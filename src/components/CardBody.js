import React from "react";
import "./CardBody.css";
import Card from "./Wrappers/Card";

const CardBody = (props) => {
  const { amt, customColor, label, icon, isSalary } = props;

  const row1Class = `row1 ${customColor}`;

  const preSal = isSalary ? "$" : "";

  return (
    <Card props={customColor}>
      <div className="cardBody">
        <div className="col1">
          <div>
            <h5 className={row1Class}> {label} </h5>
            <h3 className="row2">
              {preSal} {amt}
            </h3>
          </div>
        </div>
        <div className="col2">
          <i className={icon}> </i>
        </div>
      </div>
    </Card>
  );
};

export default CardBody;
