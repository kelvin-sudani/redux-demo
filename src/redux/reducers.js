import { combineReducers } from "redux";
//initial state
const initstate = {
  name: "AJ",
  country: "",
  phone: null
};

export const updateName = name => ({
  type: "UPDATE_NAME",
  payload: { name }
});
export const removeName = name => ({ type: "REMOVE_NAME", payload: { name } });
export const updatePhone = phone => ({
  type: "UPDATE_PHONE",
  payload: { phone }
});
export const removePhone = phone => ({
  type: "REMOVE_PHONE",
  payload: { phone }
});
//reducers
const nameReducer = (state = initstate, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload.name };
    case "REMOVE_NAME":
      return {
        ...state,
        name: ""
      };
    default:
      return initstate;
  }
};

const phoneReducer = (state = initstate, action) => {
  switch (action.type) {
    case "UPDATE_PHONE":
      return {
        ...state,
        name: action.payload
      };
    case "REMOVE_NAME":
      return {
        ...state,
        phone: null
      };
    default:
      return initstate;
  }
};

//combine reducers
export default combineReducers({ nameReducer, phoneReducer });
