import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AddBlogPage } from "../components/AddBlogPage";
import EditBlogPage from "../components/EditBlogPage";
import Header from "../components/Header";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import BlogListPage from "../pages/BlogListPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/home",
        element: <HomePage></HomePage>,
      },
      {
        path: "/blogs",
        element: <BlogListPage></BlogListPage>,
      },
      { path: "/blogs/:id", element: <BlogDetailsPage></BlogDetailsPage> },
      { path: "/create", element: <AddBlogPage></AddBlogPage> },
      { path: "/edit/:id", element: <EditBlogPage></EditBlogPage> },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
    ],
  },
]);
