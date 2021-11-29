import React from "react";
import { useNavigate } from "react-router";
import { useGlobalContext } from "../context/Context";

const Button = (props) => {
  const { deleteUser, updateUser } = useGlobalContext();

  const navigate = useNavigate();

  const { id, children, className, text } = props;
  // console.log(props);
  const classes = `btn ${className}`;

  // console.log(classes);

  const handleClick = (e) => {
    console.log(e.currentTarget, id);
    const currEl = e.currentTarget.dataset.text;

    if (currEl === "submit") props.btnSubmit(e);

    if (currEl === "delete") deleteUser(+id);

    if (currEl === "edit") {
      navigate(`/create-user/${id}`, { replace: true });
    }
  };
  return (
    <button
      type="button"
      id={id}
      className={classes}
      onClick={handleClick}
      data-text={text}
    >
      {children}
    </button>
  );
};

export default Button;