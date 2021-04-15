import { toggleTodo } from "../actions";
import Todo from "./Todo";
const todoList = (props) => {
  const { todos, onTodoClick } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  );
};

const getvisibletodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter((t) => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter((t) => !t.completed);
  }
};
const mapStateToProps = (state) => {
  return {
    todos: getvisibletodos(state.todos, state.visibilityFilter)
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};