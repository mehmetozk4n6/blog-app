import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import BlogListPage from "../components/BlogListPage";
import BlogDetailsPage from "../components/BlogDetailsPage";
import ContactPage from "../components/ContactPage";
import NotFoundPage from "../components/NotFoundPage";
import AddBlogPage from "../components/AddBlogPage";
import EditBlogPage from "../components/EditBlogPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="blogs" element={<BlogListPage />}>
            <Route path=":id" element={<BlogDetailsPage />} />
          </Route>
          <Route path="create" element={<AddBlogPage />} />
          <Route path="edit/:id" element={<EditBlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
