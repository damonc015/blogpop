import React from "react";
import classes from "./index.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={classes.container}>
      <div className={classes.nav}>
        <h1 className={classes.logo}>
          <Link href="/">blog POP</Link>
        </h1>
        <ul className={classes.listContainer}>
          <li className={classes.listItem}>
            <Link href="/tech">Tech</Link>
          </li>
          <li className={classes.listItem}>
            <Link href="/food">Food</Link>
          </li>
          <li className={classes.listItem}>
            <Link href="/lifestyle">Lifestyle</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
