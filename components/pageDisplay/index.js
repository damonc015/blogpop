import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { GoBook } from "react-icons/go";
import classes from "./index.module.css";
import { color } from "../../utils/helpers";

const PageItem = (props) => {
  const { image, title, snippet, date, readTime, category, filename } = props;

  return (
    <Fragment>
      <Link href={`/${category.toLowerCase()}/${filename}`} passHref>
        <div className={classes.articleContainer}>
          <div className={classes.imageContainer}>
            <Image
              src={`/images/${category.toLowerCase()}/${image}`}
              alt="img"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <h2>{title}</h2>
              <p className={classes.date}>
                <span>{date}</span>
                <span>
                  {`${readTime} min read`} <GoBook className={classes.book} />
                </span>
              </p>
            </div>
            <p
              style={{
                opacity: ".8",
                overflow: "hidden",
                textAlign: "justify",
              }}
            >
              {snippet.slice(0, 200) + "..."}
            </p>
            <p className={classes.category} style={color(category)}>
              {category}
            </p>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default PageItem;
