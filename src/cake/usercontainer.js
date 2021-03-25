import { React, useEffect } from "react";
import { fetchusers } from "../users";
import { connect } from "react-redux";

function Usercontainer(props) {
  const { userData, getusers } = props;
  /*useEffect(() => {
    getusers();
  }, []);*/
  console.log(props);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>Users</h2>
      <div>{userData && userData.users && userData.users.map((user) => <p>user.name</p>)}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.users
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    getusers: () => dispatch(fetchusers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Usercontainer);
