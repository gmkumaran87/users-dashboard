import React from "react";
import classes from "./Main.module.css";

const Main = (props) => {
  return <section className={classes.main}>{props.children}</section>;
};

export default Main;
