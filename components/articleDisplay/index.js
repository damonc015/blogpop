import React from "react";
import classes from "./index.module.css";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Image from "next/image";

const Related = (props) => {
  const { articles } = props;

  return (
    <div className={classes.relatedContainer}>
      <div className={classes.relatedTitle}>Related Articles</div>
      <div className={classes.relatedArticles}>
        {articles.map((item, index) => {
          if (index > 2) return;
          return (
            <div key={uuidv4()} className={classes.article}>
              <Link href={`/${item.category.toLowerCase()}/${item.filename}`}>
                <a className={classes.imgContainer}>
                  <Image
                    src={`/images/${item.category.toLowerCase()}/${item.image}`}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                  />
                </a>
              </Link>
              <Link href={`/${item.category.toLowerCase()}/${item.filename}`}>
                <a className={classes.title}>{item.title}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Related;
