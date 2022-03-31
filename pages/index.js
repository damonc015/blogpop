import React from "react";
import Nav from "../components/nav";
import Modal from "../components/recentModal";
import Display from "../components/display";
import classes from "../styles/pages.module.css";
import { readAllArticles } from "../utils/readArticles";

const index = (props) => {
  const { allArticles } = props;
  if (!allArticles) return <div></div>;

  return (
    <div className={classes.container}>
      <Nav />
      <Modal allArticles={allArticles} />
      <Display allArticles={allArticles} />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const allArticles = readAllArticles();
  return {
    props: {
      allArticles: allArticles,
    },
  };
}
