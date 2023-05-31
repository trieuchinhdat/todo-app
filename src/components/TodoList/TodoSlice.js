const initState = [
  { id: 1, name: "TASK 1", completed: false, priority: "Medium" },
  { id: 2, name: "TASK 2", completed: false, priority: "Low" },
  { id: 3, name: "TASK 3", completed: false, priority: "High" },
  { id: 4, name: "TASK 4", completed: false, priority: "Medium" },
];

const TodoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default TodoListReducer;
