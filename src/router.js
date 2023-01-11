import React from "react";
import { Routes, Route } from "react-router";

export default (
  <Routes>
    <Route path="/" />
    <Route path="/posts/:id" />
    <Route path="/write" />
    <Route path="/blog" />
    <Route path="/interview-qa/node-js-interview-questions" />
    <Route path="/interview-qa/react-js-interview-questions" />
    <Route path="/interview-qa/js-interview-questions" />
    <Route path="/login" />
    <Route path="/register" />
    <Route path="/admin/posts" />
    <Route path="/admin/posts/edit-post/:id" />
    <Route path="/admin/categories" />
    <Route path="/admin/categories/add-category" />
    <Route path="/admin/categories/edit-category/:id" />
  </Routes>
);
