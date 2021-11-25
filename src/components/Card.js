import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const { amt, borderColor, label, icon, isSalary } = props;

  const classNames = `${classes.card} ${classes}.${borderColor}`;

  console.log(isSalary);

  const preSal = isSalary ? "$" : "";

  return (
    <div className={classNames}>
      <div className={classes.cardBody}>
        <div className={classes.col1}>
          <div>
            <h5 className={classes.row1}>{label}</h5>
            <h3 className={classes.row2}>
              {preSal}
              {amt}
            </h3>
          </div>
        </div>
        <div className={classes.col2}>
          <i className={icon}></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
