import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase-config";
import { setAuthentication } from "../../helpers/auth";

const RegisterComponent = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const [submitButtonDisabled, setSubmitButttonDisabled] = useState(false);

  const handleSubmit = () => {
    if (!values.name) {
      setErrMsg("Please Fill the Name");
      return;
    } else if (!values.email) {
      setErrMsg("Please Fill the email");
      return;
    } else if (!values.password) {
      setErrMsg("Please fill the password");
      return;
    } else {
      setErrMsg("");
      setSubmitButttonDisabled(true);

      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async (res) => {
          console.log(res);
          const user = res.user;
          await updateProfile(user, { displayName: values.name });
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const LoginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setAuthentication(true, result.user);
      // setIsAuth(true);
      navigate("/");
    });
  };
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
          height: { xs: "100%", sm: "100%", md: "100%" },
          background: "white",
          borderRadius: "5px",
        }}>
        <Typography variant="h2" align="center" p={2}>
          <strong style={{ fontWeight: "400" }}>Register</strong>
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
            name="name"
            label="Name"
            placeholder="Username..."
            variant="outlined"
            onChange={(e) => {
              setValues((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
          <TextField
            type="text"
            name="email"
            label="Email"
            placeholder="Email..."
            variant="outlined"
            onChange={(e) => {
              setValues((prev) => ({ ...prev, email: e.target.value }));
            }}
          />

          <TextField
            type="password"
            name="password"
            label="Password"
            placeholder="Password..."
            variant="outlined"
            onChange={(e) => {
              setValues((prev) => ({ ...prev, password: e.target.value }));
            }}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={submitButtonDisabled}>
            Register
          </Button>

          <Typography>
            Already have an account ?{" "}
            <Typography
              component="a"
              onClick={() => navigate("/login")}
              sx={{
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "500",
                color: "#9900ff",
                cursor: "pointer",
              }}>
              login
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

export default RegisterComponent;
