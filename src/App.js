import { createTheme, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
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
              setIsAuth={setIsAuth}
              element={<Home />}></Route>
            <Route path="/write" element={<Write isAuth={isAuth} />}></Route>
            <Route
              path="/login"
              element={<Login setIsAuth={setIsAuth} />}></Route>
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
