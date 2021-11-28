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

  //   console.log("Before return ", state);
  return (
    <AppContext.Provider value={{ ...state }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, Context };
