import { Box } from "@mui/material";
import React from "react";
import LoginComponent from "../components/LoginComponent";

const Login = ({ setIsAuth }) => {
  return (
    <Box flex={4} sx={{ padding: { xs: "0", sm: "50px 20px " } }}>
      <LoginComponent setIsAuth={setIsAuth} />
    </Box>
  );
};

export default Login;
