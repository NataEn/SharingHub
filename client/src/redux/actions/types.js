const ActionTypes = {
  button: {
    BUTTON_CLICK: "BUTTON_CLICK",
  },
  items: {
    ITEMS_MODIFIED: "ITEMS_MODIFIED",
    GET_ITEMS: "GET_ITEMS",
    ADD_ITEM: "ADD_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    ITEMS_LOADING: "ITEMS_LOADING",
  },
  users: {
    USER_LOADING: "USER_LOADING",
    USER_LOADED: "USER_LOADED",
    USER_AVATAR_MODIFIED: "USER_AVATAR_MODIFIED",
    AUTH_ERROR: "AUTH_ERROR",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAIL: "LOGOUT_FAIL",
    REGISTER_SUCCESS: "REGISTER_SUCCESS",
    REGISTER_FAIL: "REGISTER_FAIL",
  },
  errors: {
    GET_ERRORS: "GET_ERRORS",
    CLEAR_ERRORS: "CLEAR_ERRORS",
  },
};
export default ActionTypes;
