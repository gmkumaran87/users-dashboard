import React from "react";
import classes from "./Dashboard.module.css";
import CardBody from "../CardBody";
import { useGlobalContext } from "../../context/Context";

const Dashboard = (props) => {
  const { users } = useGlobalContext();
  console.log("In Dashboard", users);
  const { salary } = users[0];

  return (
    <>
      <h2 className={classes.title}> Dashboard </h2>
      <section className={classes.cards}>
        <CardBody
          amt={salary}
          label="EARNINGS(MONTHLY)"
          customColor="primary"
          icon="fas fa-calendar fa-2x"
          isSalary={true}
        />
        <CardBody
          amt={salary * 12}
          label="EARNINGS(ANNUAL)"
          customColor="green"
          icon="fas fa-dollar-sign fa-2x"
          isSalary={true}
        />
        <CardBody
          amt="50%"
          label="TASKS"
          customColor="cyan"
          icon="fas fa-clipboard-list fa-2x"
          isSalary={false}
        />
        <CardBody
          amt="18"
          label="PENDING REQUESTS"
          customColor="orange"
          icon="fas fa-comments fa-2x"
          isSalary={false}
        />
      </section>
    </>
  );
};

export default Dashboard;
