const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "LOAD_USER":
      return { ...state, users: action.payload };
    case "ADD_USER":
      const oldUser = state.users;
      oldUser.push(action.payload);
      return { ...state, users: oldUser };

    case "DELETE_USER":
      const newUsers = state.users.filter((el) => el.id !== action.payload);
      return { ...state, users: newUsers };

    case "UPDATE_USER":
      const { obj, id } = action.payload;

      const editedUser = state.users.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            name: obj.name,
            age: obj.age,
            position: obj.position,
            office: obj.office,
            salary: obj.salary,
            dateOfJoin: obj.dateOfJoin,
          };
        } else {
          return el;
        }
      });

      return { ...state, users: editedUser };

    default:
      throw new Error("no matching action type");
  }
};

export default reducer;
