import React from "react";

import { auth, provider } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { Stack, Box, Typography, TextField, Button } from "@mui/material";
import { isAuthenticated, setAuthentication } from "../helpers/auth";
import { useState } from "react";
import { useEffect } from "react";

const LoginComponent = (setIsAuth) => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = () => {
    if (!values.email) {
      setErrMsg("Please Fill the email");
      return;
    } else if (!values.password) {
      setErrMsg("Please fill the password");
      return;
    } else {
      setErrMsg("");
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((res) => {
          setAuthentication(true, res.user);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setAuthentication(true, result.user);
      // console.log(result.user.email === "shivshankarkumar.pusa@gmail.com");
      if (result.user.email === "shivshankarkumar.pusa@gmail.com") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
      // setIsAuth(true);
    });
  };

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    }
  });

  return (
    <Stack
      spacing={2}
      p={2}
      direction="column"
      sx={{
        alignItems: "center",
      }}>
      <Box
        sx={{
          margin: { xs: "10px", sm: "10px", md: "0px" },
          padding: { xs: "20px", sm: "20px", md: "20px" },
          width: { xs: "80%", sm: "80%", md: "400px" },
          height: "100%",
          background: "white",
          borderRadius: "5px",
        }}>
        <Typography variant="h2" align="center" p={2}>
          <strong style={{ fontWeight: "400" }}>Login</strong>
        </Typography>
        <Stack p={2} spacing={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
              fontFamily: "sans-serif",
              fontWeight: "700",
            }}>
            {errMsg}
          </Box>
          <TextField
            type="text"
            name="email"
            label="Email"
            placeholder="Enter Your Email..."
            variant="outlined"
            onChange={(e) => {
              setValues((prev) => ({ ...prev, email: e.target.value }));
            }}
          />

          <TextField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Your password..."
            variant="outlined"
            onChange={(e) => {
              setValues((prev) => ({ ...prev, password: e.target.value }));
            }}
          />

          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>

          <Typography>
            New Here ?{" "}
            <Typography
              component="a"
              onClick={() => navigate("/register")}
              sx={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "500",
                color: "#9900ff",
                cursor: "pointer",
              }}>
              SignUp
            </Typography>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
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
                  alt="Google Logo"
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
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default LoginComponent;
