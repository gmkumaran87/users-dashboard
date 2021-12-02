import React, { useState } from "react";
import Button from "../Button";
import "./CreateUser.css";
import { useGlobalContext } from "../../context/Context";

import { useNavigate, useParams } from "react-router";

const CreateUser = () => {
  const { addUser, users, updateUser } = useGlobalContext();

  const navigate = useNavigate();

  const params = useParams();
  const editedId = params.userId;

  let stateObj = {
    name: "",
    age: "",
    position: "",
    office: "",
    salary: "",
    dateOfJoin: "",
  };
  const initialState = {
    name: "",
    age: "",
    position: "",
    office: "",
    salary: "",
    dateOfJoin: "",
  };
  /*const formatDate = (inpDate) => {
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
  };*/

  // If the Params are available then load the current user in the form
  if (editedId) {
    const [editUser] = users.filter((el) => el.id === editedId);
    // console.log("EDITED USER", editUser, users);
    stateObj = editUser;
  } else {
    stateObj = initialState;
  }

  const [userForm, setUserForm] = useState(stateObj);

  const handleSubmit = (e) => {
    if (editedId) {
      updateUser(userForm, editedId);
    } else {
      addUser(userForm);
    }

    navigate("/users", { replace: true });
    setUserForm((prev) => ({
      ...prev,
      name: "",
      age: "",
      salary: "",
      position: "",
      office: "",
      dateOfJoin: "",
    }));
  };

  return (
    <div className="formContainer">
      <p className="alert"> </p>
      <form action="/" className="userForm">
        <fieldset>
          <legend> User creation form </legend>

          <div className="formControl">
            <label htmlFor="name"> Name </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your First name"
              value={userForm.name}
              required
              onChange={(e) =>
                setUserForm((state) => {
                  const value = e.target.value;
                  return { ...state, name: value };
                })
              }
            />
          </div>
          <div className="formControl">
            <label htmlFor="age"> Age </label>
            <input
              type="text"
              name="age"
              id="age"
              placeholder="Enter your age"
              value={userForm.age}
              onChange={(e) =>
                setUserForm((state) => {
                  const input = e.target.value.trim();
                  let value = 0;
                  console.log(input);
                  if (input) {
                    value = parseInt(input);
                  }

                  return { ...state, age: value };
                })
              }
            />
          </div>
          <div className="formControl">
            <label htmlFor="position"> Position </label>
            <input
              type="text"
              name="position"
              id="position"
              placeholder="Enter your position"
              value={userForm.position}
              onChange={(e) =>
                setUserForm((state) => {
                  const value = e.target.value;
                  return { ...state, position: value };
                })
              }
            />
          </div>
          <div className="formControl">
            <label htmlFor="office"> office </label>
            <input
              type="text"
              name="office"
              id="office"
              placeholder="Enter your office"
              value={userForm.office}
              onChange={(e) =>
                setUserForm((state) => {
                  const value = e.target.value;
                  return { ...state, office: value };
                })
              }
            />
          </div>
          <div className="formControl">
            <label htmlFor="salary"> Salary </label>
            <input
              type="text"
              name="salary"
              id="salary"
              placeholder="Enter your salary"
              value={userForm.salary}
              onChange={(e) =>
                setUserForm((state) => {
                  const value = e.target.value;
                  return { ...state, salary: value };
                })
              }
            />
          </div>
          <div className="formControl">
            <label htmlFor="startDt"> Start Date </label>
            <input
              type="date"
              name="startDt"
              id="startDt"
              placeholder="Enter your startDt"
              value={userForm.dateOfJoin}
              onChange={(e) =>
                setUserForm((state) => {
                  const value = e.target.value;
                  return { ...state, dateOfJoin: value };
                })
              }
            />
          </div>
          <div className="form-control">
            <Button
              className="user-btn"
              id="submit-btn"
              btnSubmit={handleSubmit}
              text="submit"
            >
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CreateUser;
