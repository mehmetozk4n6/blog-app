import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routers/AppRouter";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configrueStore";
import { addBlog, removeBlog, editBlog } from "./actions/blogs";

const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

const blog1 = store.dispatch(
  addBlog({ title: "blog title 1", description: "blog description 1" })
);

const blog2 = store.dispatch(
  addBlog({
    title: "blog title 2",
    description: "blog description 2",
    dateAdded: Date.now(),
  })
);

const blog3 = store.dispatch(
  addBlog({
    title: "blog title 3",
    description: "blog description 3",
    dateAdded: Date.now(),
  })
);
const blog4 = store.dispatch(
  addBlog({
    title: "blog title 4",
    description: "blog description 4",
    dateAdded: Date.now(),
  })
);
const blog5 = store.dispatch(
  addBlog({
    title: "blog title 5",
    description: "blog description 5",
    dateAdded: Date.now(),
  })
);

store.dispatch(removeBlog({ id: blog1.blog.id }));
store.dispatch(
  editBlog(blog2.blog.id, {
    title: "updated blog title",
    description: "updated blog description",
  })
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
