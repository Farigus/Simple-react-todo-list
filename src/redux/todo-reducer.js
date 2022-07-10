const ADD_TODO = "ADD-TODO";
const DELETE_TODO = "DELETE-TODO";
const UPDATE_TODO_TEXT = "UPDATE-TODO-TEXT";
const DONE_TODO = "DONE-TODO";

let initialState = {
  todos: [],
  newTodoText: "",
};

let todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (action.todoText !== "") {
        let newTodo = {
          todo: action.todoText,
          isDone: false,
        };
        state.todos.push(newTodo);
      }
      return state;

    case UPDATE_TODO_TEXT:
      state.newTodoText = action.newTodoText;
      return state;

    case DELETE_TODO:
      state.todos = state.todos.filter(
        (e) => state.todos.indexOf(e) != action.id
      );
      return state;

    case DONE_TODO:
      if (state.todos[action.id].isDone == false) {
        state.todos[action.id].isDone = true;
      } else {
        state.todos[action.id].isDone = false;
      }

      return state;

    default:
      return state;
  }
};

export const addTodoActionCreator = (todoText) => {
  return {
    type: ADD_TODO,
    todoText: todoText,
  };
};

export const updateTodoTextActionCreator = (newTodoText) => {
  return {
    type: UPDATE_TODO_TEXT,
    newTodoText: newTodoText,
  };
};

export const deleteTodoActionCreator = (id) => {
  return {
    type: DELETE_TODO,
    id: id,
  };
};

export const doneTodoActionCreator = (id) => {
  return {
    type: DONE_TODO,
    id: id,
  };
};

export default todoReducer;
