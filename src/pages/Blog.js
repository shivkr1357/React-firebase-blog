import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Fragment } from "react";
import AboutComponent from "../components/AboutComponent";
import Footer from "../components/Footer";
import HomeComponent from "../components/HomeComponent";

const Blog = ({ mode, setMode, setIsAuth }) => {
  return (
    <Fragment>
      <Stack direction="row">
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}></Box>
        <Box flex={4}>
          <HomeComponent mode={mode} setMode={setMode} setIsAuth={setIsAuth} />
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}>
          <AboutComponent />
        </Box>
      </Stack>
      <Footer />
    </Fragment>
  );
};

export default Blog;
