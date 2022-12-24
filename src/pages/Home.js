import { Box } from "@mui/material";
import { Stack } from "@mui/system";
// import AboutComponent from "../components/AboutComponent";
import Footer from "../components/Footer";
// import HomeComponent from "../components/HomeComponent";
import LandingPage from "../components/LandingPage";

const Home = ({ mode, setMode, setIsAuth }) => {
  return (
    <>
      <Stack direction="row">
        <Box flex={4}>
          <LandingPage mode={mode} setMode={setMode} setIsAuth={setIsAuth} />
        </Box>
      </Stack>
      <Footer />
    </>
  );
};

export default Home;
