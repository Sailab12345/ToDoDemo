import axios from "axios";

export const fetchusers = () => {
  debugger;
  return (dispatch) => {
    debugger;
    dispatch(fetchuserrequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchusersuccess(users));
      })
      .catch((error) => {
        dispatch(fetchuserfailure(error.message));
      });
  };
};

export const fetchuserrequest = () => {
  return {
    type: "FETCH_USER_REQUEST"
  };
};

export const fetchusersuccess = (users) => {
  return {
    type: "FETCH_USER_SUCCESS",
    payload: users
  };
};

export const fetchuserfailure = (error) => {
  return {
    type: "FETCH_USER_FAILURE",
    payload: error
  };
};
