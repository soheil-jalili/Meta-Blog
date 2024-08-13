import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleBlog from "./pages/Single_Blog/Single_Blog.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingleBlog />} />
        <Route path="/:blog_id" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
