let nextTodoId = 0;
export const addTodo = (payload) => {
  const { todoName } = payload;
  debugger;
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text: todoName
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};
