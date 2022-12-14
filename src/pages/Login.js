import { Box } from "@mui/material";
import React from "react";
import LoginComponent from "../components/LoginComponent";

const Login = ({ setIsAuth }) => {
  return (
    <Box
      flex={4}
      sx={{
        // padding: {
        //   xs: "0",
        //   sm: "0px 20px ",
        // },
        backgroundImage: "linear-gradient(to right, #9900ff, #cc80ff)",
        minHeight: "560px",
        height: "100%",
      }}>
      <LoginComponent setIsAuth={setIsAuth} />
    </Box>
  );
};

export default Login;
