import React from "react";
import Link from "next/link";
import RowItem from "./RowItem";
import classes from "./Row.module.css";
import { v4 as uuidv4 } from "uuid";
import { MdKeyboardArrowRight } from "react-icons/md";

const Row = (props) => {
  const { headline, articles } = props;
  let sortedArticles = articles
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }).reverse()

  if (articles.length > 3) {
    return (
      <div className={classes.row}>
        <div className={classes.headerContainer}>
          <span className={classes.header}>Latest {headline} Articles</span>
        </div>
        <div className={classes.rowBody}>
          {sortedArticles.map((article, index) => {
            if (index > 2) return;
            return <RowItem key={uuidv4()} article={article} />;
          })}
          <Link href={`${headline.toLowerCase()}`}>
            <a className={classes.more}>
              <MdKeyboardArrowRight />
            </a>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.row}>
      <div className={classes.headerContainer}>
        <span className={classes.header}>Latest {headline} Articles</span>
        <Link href={`${headline.toLowerCase()}`}>
          <a className={classes.more}>
            <MdKeyboardArrowRight />
          </a>
        </Link>
      </div>
      <div className={classes.rowBody}>
        {articles.map((article) => {
          return <RowItem key={uuidv4()} article={article} />;
        })}
      </div>
    </div>
  );
};

export default Row;
