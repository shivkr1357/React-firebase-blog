import { Box, Stack } from "@mui/material";
import React from "react";
// import { useNavigate } from "react-router-dom";
import SocialMediaIcons from "./SocialMediaIcons.js";

const AboutComponent = () => {
  // const navigate = useNavigate();
  return (
    <Stack
      sx={{
        position: "fixed",
        width: "100%",
        maxWidth: "200px",
        paddingRight: "30px",
        justifyContent: "center",
        alignItems: "center",
      }}
      direction="column">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          flexDirection: "column",
          marginTop: "20px",
        }}>
        {/* <Avatar
          alt="Shiv Prasad"
          src="/images/profile_pic.jpg"
          sx={{ width: 56, height: 56, alignSelf: "center", cursor: "pointer" }}
          onClick={() => navigate("/about")}
        /> */}
        {/* <Typography variant="h6" component="h6">
          Shiv Shankar Prasad
        </Typography> */}
        <Box sx={{ paddingTop: "20px", alignSelf: "center" }}>
          <SocialMediaIcons />
        </Box>
      </Box>
    </Stack>
  );
};

export default AboutComponent;
