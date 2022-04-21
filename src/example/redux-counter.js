import { createStore } from "redux";

const initialState = {
  count: 0,
};

// reducer
// blogs
// auth => username,isLoggged

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    case "RESET":
      return {
        count: 0,
      };

    default:
      return state;
  }
};

// store
const store = createStore(counterReducer);

// subscribe her değişiklik olduğunda gelir

store.subscribe(() => {
  console.log(store.getState());
});

// ıncrement,decrement,reset => Actions (obj.)

store.dispatch({
  type: "INCREMENT",
  incrementBy: 10,
});
store.dispatch({
  type: "INCREMENT",
});
store.dispatch({
  type: "RESET",
});

// getState
console.log(store.getState());
// dispatch
