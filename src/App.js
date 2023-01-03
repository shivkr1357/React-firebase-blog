import { createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCategory from "./components/Category/AddCategory";
import CategoryComponent from "./components/Category/CategoryComponent";
import UpdateCategory from "./components/Category/UpdateCategory";
import CookiesPolicy from "./components/CookiesPolicy";
import DataSafety from "./components/DataSafety";
import Navbar from "./components/Navbar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SinglePostComponent from "./components/SinglePostComponent";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Javascript from "./pages/Interview Q/Javascript";
import Node from "./pages/Interview Q/Node";
import React from "./pages/Interview Q/ReactFile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AdminHome from "./pages/PrivateRoutes/AdminHome";
import { PrivateRoute } from "./pages/PrivateRoutes/PrivateRoutes";
import Write from "./pages/Write";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar
            isAuth={isAuth}
            setIsAuth={setIsAuth}
            mode={mode}
            setMode={setMode}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home setIsAuth={setIsAuth} mode={mode} setMode={setMode} />
              }
            />
            <Route
              exact
              path="/posts/:id"
              setIsAuth={setIsAuth}
              element={<SinglePostComponent />}></Route>
            <Route path="/write" element={<Write isAuth={isAuth} />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route
              path="/interview-qa/node-js-interview-questions"
              element={<Node />}></Route>
            <Route
              path="/interview-qa/react-js-interview-questions"
              element={<React />}></Route>
            <Route
              path="/interview-qa/js-interview-questions"
              element={<Javascript />}></Route>

            {/* static pages */}
            <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="/cookies-policy" element={<CookiesPolicy />}></Route>
            <Route path="/data-policy" element={<DataSafety />}></Route>
            <Route
              path="/login"
              element={<Login setIsAuth={setIsAuth} />}></Route>
            <Route path="*" element={<NotFound />} />

            <Route path="/admin" element={<PrivateRoute />}>
              <Route path="categories" element={<CategoryComponent />} />

              <Route path="categories/add-category" element={<AddCategory />} />
              <Route
                path="categories/edit-category/:id"
                element={<UpdateCategory />}
              />
            </Route>
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
