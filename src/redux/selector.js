import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const searchStatusSelector = (state) => state.filters.status;
export const searchPrioritiesSelector = (state) => state.filters.priority;
export const todoListSelector = (state) => state.todoList;

export const todoRemainningSelector = createSelector(
  todoListSelector,
  searchStatusSelector,
  searchTextSelector,
  searchPrioritiesSelector,
  (todoList, status, seachText, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(seachText) && priorities.includes(todo.priority)
          : todo.name.includes(seachText);
      }
      return (
        todo.name.includes(seachText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);

// export const toToListSelector = (state) => {
//   const todoRemainning = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });
//   return todoRemainning;
// };

// export const searchTextSelector = (state) => state.filter.search;
