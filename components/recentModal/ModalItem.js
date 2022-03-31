import React, { Fragment } from "react";
import classes from "./ModalItem.module.css";
import Link from "next/link";
import { GoBook } from "react-icons/go";
import Image from "next/image";
import { color } from "../../utils/helpers";

const ModalItem = (props) => {
  const { data, position } = props;
  if (position === "recentModal_modalItemStart__V9_vo") {
    return (
      <Fragment>
        <Link href={`/${data.category.toLowerCase()}/${data.slug}`}>
          <a className={position}>
            <div className={classes.imgContainer}>
              <Image
                src={`/images/${data.category.toLowerCase()}/${data.image}`}
                alt={data.title}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className={classes.contentContainer}>
              <span>
                <h2>{data.title}</h2>
                <p className={classes.date}>{data.date}</p>
                <p style={{ fontSize: ".85rem" }}>
                  {data.readTime} min. <GoBook style={{ fontSize: "1.2rem" }} />
                </p>
              </span>
              <span className={classes.content}>
                {data.snippet.slice(0, 300)}{" "}
                <span className={classes.readmore}>...read more</span>
              </span>
              <span className={classes.bubble} style={color(data.category)}>
                <Link href={`/${data.category.toLowerCase()}`}>
                  {data.category}
                </Link>
              </span>
              <p style={{ fontStyle: "italic", fontSize: ".9rem" }}>
                tags: {data.tags}
              </p>
            </div>
          </a>
        </Link>
      </Fragment>
    );
  }

  return (
    <Fragment>
        <a className={position}>
          <div className={classes.imgContainer}>
            <Image
              src={`/images/${data.category.toLowerCase()}/${data.image}`}
              alt={data.title}
              objectFit="cover"
              layout="fill"
            />
          </div>
          <div className={classes.contentContainer}>
            <span>
              <h2>{data.title}</h2>
              <p className={classes.date}>{data.date}</p>
              <p style={{ fontSize: ".85rem" }}>
                {data.readTime} min. <GoBook style={{ fontSize: "1.2rem" }} />
              </p>
            </span>
            <span className={classes.content}>
              {data.snippet.slice(0, 300)}{" "}
              <span className={classes.readmore}>...read more</span>
            </span>
            <span className={classes.bubble} style={color(data.category)}>
              <Link href={`/${data.category.toLowerCase()}`}>
                {data.category}
              </Link>
            </span>
            <p style={{ fontStyle: "italic", fontSize: ".9rem" }}>
              tags: {data.tags}
            </p>
          </div>
        </a>
    </Fragment>
  );
};

export default ModalItem;
