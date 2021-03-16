import "./App.css";
import store from "./store";
import { Provider } from "react-redux";
import ToDoMain from "./to-do-main";

function App() {
  return (
    <Provider store={store}>
      <ToDoMain />
    </Provider>
  );
}

export default App;
