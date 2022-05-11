import React, { Fragment } from "react";
import classes from "../../styles/pages.module.css";
import Nav from "../../components/nav";
import Related from "../../components/articleDisplay";
import {
  techArt,
  foodArt,
  lifestyleArt,
  getArticleName,
  readArticleNames,
  readArticles,
} from "../../utils/readArticles";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Head from "next/head";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
SyntaxHighlighter.registerLanguage("jsx", jsx);

const Article = (props) => {
  const { pageId, related, article } = props;
  console.log(related)
  if (!article)
    return (
      <div>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content={article.snippet} />
          <meta name="keywords" content={article.tags} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <link rel="icon" href="/favicon.ico" />
          <title>{article.title}</title>
        </Head>
      </div>
    );
  const renderConfig = {
    img(image) {
      return (
        <div className={classes.imgContainer}>
          <Image
            src={`${image.src}`}
            alt="img"
            layout="fill"
            objectFit="contain"
          />
        </div>
      );
    },
    code(code) {
      return (
        <SyntaxHighlighter language={"jsx"} style={atomDark}>
          {code.children}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={article.snippet} />
        <meta name="keywords" content={article.tags} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <title>{article.title}</title>
      </Head>

      <div className={classes.container}>
        <Nav />
        <div className={classes.articleContainer}>
          <article className={classes.article}>
            <h2>{article.title}</h2>
            <span className={classes.date}>{article.date}</span>
            <ReactMarkdown components={renderConfig}>
              {article.content}
            </ReactMarkdown>
            <p className={classes.tags}>tags: {article.tags}</p>
          </article>
          <Related articles={related} />
        </div>
      </div>
    </Fragment>
  );
};

export default Article;

export async function getStaticPaths() {
  function makePaths(article, pageid) {
    return readArticleNames(article).map((item) => ({
      params: { pageId: pageid, articleId: item },
    }));
  }
  const tech = makePaths(techArt, "tech");
  const food = makePaths(foodArt, "food");
  const lifestyle = makePaths(lifestyleArt, "lifestyle");
  const paths = [...tech, ...food, ...lifestyle];
  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps(context) {
  const { pageId, articleId } = context.params;
  let article = null;
  let related = null;
  const tech = readArticles(techArt);
  const food = readArticles(foodArt);
  const lifestyle = readArticles(lifestyleArt);

  if (pageId === "tech") {
    article = getArticleName(techArt, articleId);
    related = tech.filter((item) => {
      if (item.filename === articleId) return;
      return item;
    });
  }
  if (pageId === "food") {
    article = getArticleName(foodArt, articleId);
    related = food.filter((item) => {
      if (item.filename === articleId) return;
      return item;
    });
  }
  if (pageId === "lifestyle") {
    article = getArticleName(lifestyleArt, articleId);
    related = lifestyle.filter((item) => {
      if (item.filename === articleId) return;
      return item;
    });
  }
  if (related.length < 3) {
    let x = 3 - related.length;
    for (let i = 0; i < x; i++) {
      related.push(readArticles(techArt)[i]);
    }
  }
  return {
    props: {
      pageId,
      article,
      related,
    },
    revalidate: 300,
  };
}
