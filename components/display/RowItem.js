import React from "react";
import classes from "./RowItem.module.css";
import Image from "next/image";
import Link from "next/link";

const RowItem = (props) => {
  const { article } = props;;
  return (
    <Link href={`/${article.category.toLowerCase()}/${article.slug}`} passHref>
      <div className={classes.rowItem}>
        <Image
          src={`/images/${article.category.toLowerCase()}/${article.image}`}
          alt="img"
          className={classes.image}
          layout="responsive"
          width={100}
          height={100}
        />
        <div className={classes.itemPreview}>
          <h2 className={classes.rowItemTitle}>{article.title}</h2>
          <p className={classes.rowItemSnippet}>{article.snippet.slice(0,200)+"..."}</p>
        </div>
      </div>
    </Link>
  );
};

export default RowItem;
