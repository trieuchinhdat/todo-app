import FilterReducer from "../components/Filters/FilterSlice";
import TodoListReducer from "../components/TodoList/TodoSlice";

export const rootReducer = (state = {}, action) => {
  return {
    filters: FilterReducer(state.filters, action),
    todoList: TodoListReducer(state.todoList, action),
  };
};
