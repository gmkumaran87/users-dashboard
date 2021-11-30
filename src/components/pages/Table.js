import React from "react";
import TableRow from "./TableRow";
import "./Table.css";
import { useGlobalContext } from "../../context/Context";

const Table = () => {
  const { users } = useGlobalContext();

  console.log(users);

  const formatDate = (inpDate) => {
    let dateReceived = new Date(inpDate);

    let month = String(dateReceived.getMonth() + 1);
    let day = String(dateReceived.getDate());
    let year = dateReceived.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = `0${day}`;
    }

    return `${day}-${month}-${year}`;
  };

  return (
    <>
      <h2> Tables </h2>
      <table className="emp-table">
        <thead>
          <tr>
            <th>Name</th>
            <th> Position</th>
            <th> Office </th>
            <th> Age </th>
            <th> Start Date </th>
            <th> Salary </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody id="table-row-list">
          {users.map((el) => (
            <TableRow
              key={el.id}
              id={el.id}
              name={el.name}
              age={el.age}
              office={el.office}
              position={el.position}
              salary={el.salary}
              startDt={el.dateOfJoin}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
