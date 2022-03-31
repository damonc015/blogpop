import React, { useState, useEffect } from "react";
import Arrow from "./Arrow";
import classes from "./index.module.css";
import ModalItem from "./ModalItem";

const Modal = (props) => {
  const { allArticles } = props;
  const [articles,food] = allArticles;

  const [positionStart, setPositionStart] = useState(0);
  const arrPositions = [
    classes.modalItemStart,
    classes.modalItemQuarter,
    classes.modalItemHalf,
    classes.modalItemThreeQuarter,
  ];

  function increasePosition() {
    if (positionStart === 3) return setPositionStart((prev) => 0);
    return setPositionStart((prev) => prev + 1);
  }
  function decreasePosition() {
    if (positionStart === 0) return setPositionStart((prev) => 3);
    return setPositionStart((prev) => prev - 1);
  }
  function arrIndex(i) {
    let temp = positionStart + i;
    if (temp > 3) temp -= 4;
    return arrPositions[temp];
  }

  useEffect(() => {
    let timer = setInterval(increasePosition, 10000);
    return () => {
      clearInterval(timer);
    };
  }, [positionStart]);

  return (
    <div className={classes.modalContainer}>
      <Arrow direction="backwards" changePos={decreasePosition} />
      <div className={classes.modalItemsContainer}>
        {food.map((article, index) => {
          return (
            <ModalItem
              key={article.slug}
              data={article}
              position={arrIndex(index)}
            />
          );
        })}
      </div>
      <Arrow direction="forwards" changePos={increasePosition} />
    </div>
  );
};

export default Modal;
