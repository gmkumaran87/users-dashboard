const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "LOAD_USER":
      return { ...state, users: action.payload };
    default:
      throw new Error("no matching action type");
  }
};

export default reducer;
