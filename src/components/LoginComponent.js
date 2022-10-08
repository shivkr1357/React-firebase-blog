import React from "react";

import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { Button, Stack, Box, Typography } from "@mui/material";

const LoginComponent = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);

      navigate("/");
    });
  };

  return (
    <Stack spacing={2} p={2} direction="column" sx={{ alignItems: "center" }}>
      <Box
        sx={{
          width: "184px",
          height: "42px",
          backgroundColor: "#4285f4",
          borderRadius: "2px",
          boxShadow: "0 3px 4px 0 rgba(0,0,0,.25)",
          cursor: "pointer",
          "&:hover": {
            boxShadow: "0 0 6px #4285f4",
          },
          "&:active": {
            background: "#1669F2",
          },
        }}>
        <Box
          sx={{
            position: "absolute",
            marginTop: "1px",
            marginLeft: "1px",
            width: "40px",
            height: "40px",
            borderRadius: "2px",
            backgroundColor: "white",
          }}>
          <img
            style={{
              position: "absolute",
              marginTop: "11px",
              marginLeft: "11px",
              width: "18px",
              height: "18px",
            }}
            src="google_logo.svg"
          />
        </Box>
        <Typography
          variant="p"
          component="p"
          sx={{
            float: "right",
            margin: "11px 11px 0 0",
            color: "#fff",
            fontSize: "14px",
            letterSpacing: "0.2px",
          }}
          onClick={LoginWithGoogle}>
          <b>Login With Google</b>
        </Typography>
      </Box>
    </Stack>
  );
};

export default LoginComponent;
