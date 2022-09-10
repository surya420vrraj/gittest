const initialState = {
  user: [{ id: 1, name: "surya",  password: "",notification:"",friendRequest:[],firend: [],}],
};
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { user: [...state.user, action.payload] };
    default:
      return state;
  }
};
export default UserReducer;
