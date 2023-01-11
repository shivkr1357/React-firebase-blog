import { Box } from "@mui/material";
import React from "react";
import RegisterComponent from "../components/Auth/RegisterComponent";

const Register = ({ setIsAuth }) => {
  return (
    <Box
      flex={4}
      sx={{
        // padding: {
        //   xs: "0",
        //   sm: "50px 20px ",
        // },
        backgroundImage: "linear-gradient(to right, #9900ff, #cc80ff)",
      }}>
      <RegisterComponent />
    </Box>
  );
};

export default Register;
