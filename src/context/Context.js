import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

// Creating a Context
const AppContext = React.createContext();

const URL = "https://614eabf5b4f6d30017b482ac.mockapi.io/user-detail";

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
    const getData = async (url) => {
      try {
        const response = await axios(url);
        if (response.statusText !== "OK") {
          throw new Error("Something went wrong");
        }
        dispatch({ type: "LOAD_USER", payload: response.data });
        dispatch({ type: "LOADING" });
      } catch (error) {
        console.log(error);
      }
    };

    getData(URL);
  }, []);

  // Adding a new User into the Array
  const addUser = async (obj) => {
    try {
      const res = await axios.post(URL, obj);
      /*if (res.statusText !== "OK") {
        throw new Error("Something went wrong");
      }*/

      dispatch({ type: "ADD_USER", payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  // Deleting a User
  const deleteUser = (id) => {
    const newUrl = `${URL}/${id}`;
    const deletetoApi = async () => {
      try {
        const res = await axios.delete(newUrl);

        if (res.statusText !== "OK") {
          throw new Error("Something went wrong!");
        }

        dispatch({ type: "DELETE_USER", payload: id });
      } catch (error) {
        console.log(error);
      }
    };
    deletetoApi();
  };

  // Updating a User
  const updateUser = (obj, id) => {
    const newUrl = `${URL}/${id}`;

    const updatetoApi = async (obj) => {
      try {
        const res = await axios.put(newUrl, obj);
        if (res.statusText !== "OK") {
          throw new Error("Something went wrong!");
        }
        dispatch({ type: "UPDATE_USER", payload: { obj: res.data, id } });
      } catch (error) {
        console.log(error);
      }
    };
    updatetoApi(obj);
  };

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
