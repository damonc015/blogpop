import { Fragment } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import classes from "./Arrow.module.css";

const Arrow = (props) => {
  const { direction, changePos } = props;

  return (
    <Fragment>
      {direction === "backwards" ? (
        <MdArrowBackIos className={classes.leftArrow} onClick={changePos} />
      ) : (
        <MdArrowForwardIos className={classes.rightArrow} onClick={changePos} />
      )}
    </Fragment>
  );
};

export default Arrow;
