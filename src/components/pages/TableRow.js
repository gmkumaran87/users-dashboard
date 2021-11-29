import React from "react";
import "./Table.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "../Button";

const TableRow = (props) => {
  const { name, position, age, salary, office, startDt, id } = props;

  return (
    <tr>
      <td> {name} </td>
      <td> {position}</td>
      <td> {office} </td>
      <td> {age} </td>
      <td> {startDt} </td>
      <td> {salary} </td>
      <td>
        <Button className="edit-btn icons" id={id} text="edit">
          <FaEdit />
        </Button>
        <Button className="delete-btn icons" id={id} text="delete">
          <FaTrash />
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
