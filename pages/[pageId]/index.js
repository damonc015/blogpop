import React, { Fragment, useState } from "react";
import classes from "../../styles/pages.module.css";
import Nav from "../../components/nav";
import PageItem from "../../components/pageDisplay";
import { v4 as uuidv4 } from "uuid";
import { readFood, readTech, readLife } from "../../utils/readArticles";
import Head from "next/head";

const Page = (props) => {
  const { list, pageId } = props;
  const [artSort, setArtSort] = useState("new");
  let newList = [];
  if (artSort === "new") {
    newList = list
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .reverse();
  }
  if (artSort === "old") {
    newList = list.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  const sortArt = (e) => {
    setArtSort(e);
  };
  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content={pageId} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
        <title>{pageId.charAt(0).toUpperCase()+pageId.slice(1)}</title>
      </Head>
      <div className={classes.container}>
        <Nav />
        <div className={classes.genreContainer}>
          <div className={classes.genreHeading}>
            <h1>{pageId} Articles</h1>
            <form className={classes.selectForm}>
              <label htmlFor="artSort" className={classes.label}>
                Sort by
              </label>
              <select
                id="artSort"
                value={artSort}
                onChange={(e) => sortArt(e.target.value)}
                className={classes.selector}
              >
                <option value="new">Newest First</option>
                <option value="old">Oldest First</option>
              </select>
            </form>
          </div>
          <div className={classes.genreContent}>
            {newList.map((item) => {
              return (
                <PageItem
                  key={uuidv4()}
                  image={item.image}
                  title={item.title}
                  date={item.date}
                  snippet={item.snippet}
                  readTime={item.readTime}
                  category={item.category}
                  filename={item.filename}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Page;

export async function getStaticPaths() {
  const paths = ["tech", "food", "lifestyle"].map((item) => ({
    params: { pageId: item },
  }));
  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps(context) {
  const id = context.params.pageId;
  let articles = null;
  if (id === "tech") {
    articles = readTech();
  }
  if (id === "food") {
    articles = readFood();
  }
  if (id === "lifestyle") {
    articles = readLife();
  }
  return {
    props: {
      pageId: id,
      list: articles,
    },
  };
}
