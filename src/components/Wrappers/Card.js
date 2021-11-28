import React from "react";
import "./Card.css";

const Card = (props) => {
  const customColor = props.props;

  const borderColor =
    props.props === "green"
      ? "border-green"
      : customColor === "orange"
      ? "border-orange"
      : customColor === "cyan"
      ? "border-cyan"
      : customColor === "primary"
      ? "border-blue"
      : "primary";

  const newClass = `card ${borderColor}`;

  return <div className={newClass}> {props.children} </div>;
};

export default Card;
