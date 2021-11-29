const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "LOAD_USER":
      return { ...state, users: action.payload };
    case "ADD_USER":
      const oldUser = state.users;
      oldUser.push(action.payload);
      console.log("In Reducer", oldUser);
      return { ...state, users: oldUser };
    case "DELETE_USER":
      const newUsers = state.users.filter((el) => el.id !== action.payload);
      return { ...state, users: newUsers };
    default:
      throw new Error("no matching action type");
  }
};

export default reducer;
