import React from "react";
import Row from "./Row";
import classes from "./index.module.css";
import {v4 as uuidv4} from "uuid"

const Display = (props) => {
  const { allArticles } = props;
  const titles = ["Tech", "Food", "Lifestyle"];
  if (!allArticles) return <div></div>;
  return (
    <div className={classes.container}>
      {allArticles.map((article, index) => {
        return <Row key={uuidv4()} headline={`${titles[index]}`} articles={article} />;
      })}
    </div>
  );
};

export default Display;
