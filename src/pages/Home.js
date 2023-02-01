import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Fragment } from "react";
import Footer from "../components/Footer";
import LandingPage from "../components/LangingPage/LandingPage";

const Home = ({ mode, setMode, setIsAuth }) => {
  return (
    <Fragment>
      <Stack direction="row" height="100%">
        <Box flex={4}>
          <LandingPage mode={mode} setMode={setMode} setIsAuth={setIsAuth} />
        </Box>
      </Stack>
      <Footer />
    </Fragment>
  );
};

export default Home;
