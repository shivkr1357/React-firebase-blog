import { Box, Stack } from "@mui/material";
import AboutComponent from "../../components/AboutComponent";
import Footer from "../../components/Footer";
import ReactComponentFile from "../../components/Interview/ReactComponentFile";

const ReactFile = () => {
  return (
    <>
      <Stack direction="row">
        <Box flex={4}>
          <ReactComponentFile />
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}>
          <AboutComponent />
        </Box>
      </Stack>
      <Footer />
    </>
  );
};

export default ReactFile;
