import { createStore, combineReducers } from "redux";
import authReducer from "../reducers/auth";
import blogsReducer from "../reducers/blogs";

const configrueStore = () => {
  const store = createStore(
    combineReducers({
      blogs: blogsReducer,
      auth: authReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configrueStore;
