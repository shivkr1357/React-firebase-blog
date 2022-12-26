import { Box, Stack } from "@mui/material";
import { Fragment } from "react";
import AboutComponent from "../../components/AboutComponent";
import Footer from "../../components/Footer";
import ReactComponentFile from "../../components/Interview/ReactComponentFile";

const ReactFile = () => {
  return (
    <Fragment>
      <Stack direction="row">
        <Box flex={4}>
          <ReactComponentFile />
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}>
          <AboutComponent />
        </Box>
      </Stack>
      <Footer />
    </Fragment>
  );
};

export default ReactFile;
