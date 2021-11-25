import React from "react";
import classes from "./Dashboard.module.css";
import Card from "../Card";

const Dashboard = (props) => {
  const { salary } = props.data;

  return (
    <>
      <section className={classes.main}>
        <h2>Dashboard</h2>
        <section className={classes.cards}>
          <Card
            amt={salary}
            label="EARNINGS(MONTHLY)"
            borderColor="primary"
            icon="fas fa-calendar fa-2x"
            isSalary={true}
          />
          <Card
            amt={props.data.salary * 12}
            label="EARNINGS(ANNUAL)"
            borderColor="green"
            icon="fas fa-dollar-sign fa-2x"
            isSalary={true}
          />
          <Card
            amt="50%"
            label="TASKS"
            borderColor="cyan"
            icon="fas fa-clipboard-list fa-2x"
            isSalary={false}
          />
          <Card
            amt="18"
            label="PENDING REQUESTS"
            borderColor="orange"
            icon="fas fa-comments fa-2x"
            isSalary={false}
          />
        </section>
      </section>
    </>
  );
};

export default Dashboard;
