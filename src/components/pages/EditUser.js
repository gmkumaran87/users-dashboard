import React from "react";
import { useParams, Outlet } from "react-router";
import { useGlobalContext } from "../../context/Context";

import "./EditUser.css";

const EditUser = () => {
  const { users } = useGlobalContext();
  const params = useParams();
  const editId = params.userId;

  const userName = users.filter((el) => el.id === +editId).map((el) => el.name);

  return (
    <div className="edit-container">
      <h3>Edit the User {userName}</h3>
      <Outlet></Outlet>
    </div>
  );
};

export default EditUser;
