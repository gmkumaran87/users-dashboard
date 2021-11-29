import React, { useState } from "react";
import Button from "../Button";
import "./CreateUser.css";
import { useGlobalContext } from "../../context/Context";

import { useNavigate, useParams } from "react-router";

const CreateUser = () => {
  const { addUser, users } = useGlobalContext();

  const navigate = useNavigate();

  const params = useParams();
  const editedId = +params.userId;

  let stateObj = {
    id: 0,
    name: "",
    age: "",
    position: "",
    office: "",
    salary: "",
    dateOfJoin: "",
  };
  const initialState = {
    id: 0,
    name: "",
    age: "",
    position: "",
    office: "",
    salary: "",
    dateOfJoin: "",
  };

  // If the Params are available then load the current user in the form
  if (+params.userId) {
    const [editUser] = users.filter((el) => el.id === editedId);
    // console.log("Checking Params", initialState, stateObj, editUser);
    stateObj = editUser;
    // console.log("Checking Params", initialState, stateObj);
  } else {
    stateObj = initialState;
    console.log("Iniial State", initialState, stateObj);
  }

  const [userForm, setUserForm] = useState(stateObj);

  const handleSubmit = (e) => {
    console.log("Clicking Submit btn", userForm, users);

    const existingId = users.map((el) => el.id).sort((a, b) => a - b);

    // Assigning new Id
    const newId = existingId[existingId.length - 1] + 1;
    console.log(existingId, newId);

    addUser({
      ...userForm,
      id: newId,
      dateOfJoin: new Date(userForm.dateOfJoin),
    });

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

  console.log("UserForm details", userForm);

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
                  const value = parseInt(e.target.value);
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
