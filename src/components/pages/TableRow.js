import React from "react";
import "./Table.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const TableRow = (props) => {
  console.log(props);
  const { name, position, age, salary, office, startDt } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>{age}</td>
      <td>{office}</td>
      <td>{startDt}</td>
      <td>{salary}</td>
      <td>
        <button className="edit-btn icons">
          <FaEdit></FaEdit>
        </button>
        <button className="delete-btn icons">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
