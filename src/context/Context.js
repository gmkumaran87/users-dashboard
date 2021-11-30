import React, { useContext, useEffect, useReducer } from "react";
import data from "../data";
import reducer from "./reducer";

// Creating a Context
const AppContext = React.createContext();

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

const Context = (props) => {
  // Creating/Intiallizing the store
  const [state, dispatch] = useReducer(reducer, initialState);

  //Loading the inital data from data.js
  useEffect(() => {
    dispatch({ type: "LOAD_USER", payload: data });
    dispatch({ type: "LOADING" });
  }, []);

  // Adding a new User into the Array
  const addUser = (obj) => {
    console.log("In Context", obj);
    dispatch({ type: "ADD_USER", payload: obj });
  };

  // Deleting a User
  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  // Updating a User
  const updateUser = (obj, id) => {
    dispatch({ type: "UPDATE_USER", payload: { obj, id } });
  };

  //   console.log("Before return ", state);
  return (
    <AppContext.Provider value={{ ...state, addUser, deleteUser, updateUser }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Context };
