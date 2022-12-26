import { Box, Stack } from "@mui/material";
import React, { Fragment } from "react";
import AboutComponent from "../../components/AboutComponent";
import Footer from "../../components/Footer";
import JavascriptComponent from "../../components/Interview/JavascriptComponent";

const Javascript = () => {
  return (
    <Fragment>
      <Stack direction="row">
        <Box flex={4}>
          <JavascriptComponent />
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}>
          <AboutComponent />
        </Box>
      </Stack>
      <Footer />
    </Fragment>
  );
};

export default Javascript;
