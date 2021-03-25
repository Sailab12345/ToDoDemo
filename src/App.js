import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import UserConatainer from "./cake/usercontainer";
console.log(store);
const App = () => {
  return (
    <>
      <Provider store={store}>
        <UserConatainer />
      </Provider>
    </>
  );
};
export default App;
