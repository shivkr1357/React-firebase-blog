import { Box, Stack } from "@mui/material";
import React, { Fragment } from "react";
import AboutComponent from "../../components/AboutComponent";
import Footer from "../../components/Footer";
import NodeComponent from "../../components/Interview/NodeComponent";

const Node = () => {
  return (
    <Fragment>
      <Stack direction="row">
        <Box flex={4}>
          <NodeComponent />
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}>
          <AboutComponent />
        </Box>
      </Stack>
      <Footer />
    </Fragment>
  );
};

export default Node;
