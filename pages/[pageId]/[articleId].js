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

const Article = (props) => {
  const { pageId, related, article } = props;
  if (!article) return (
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
      related.push(readArticles(foodArt)[i]);
      // let y = Math.floor(Math.random()*3)
      // if (y === 0 ) return related.push(tech[i]);
      // if (y === 1) return related.push(food[i]);
      // if (y === 2) return related.push(lifestyle[i]);
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
