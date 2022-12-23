import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import AboutComponent from "../components/AboutComponent";
import Footer from "../components/Footer";
import HomeComponent from "../components/HomeComponent";

const Home = ({ mode, setMode, setIsAuth }) => {
  return (
    <>
      <Stack direction="row">
        <Box flex={3}>
          <HomeComponent mode={mode} setMode={setMode} setIsAuth={setIsAuth} />
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}>
          <AboutComponent />
        </Box>
      </Stack>
      <Footer />
    </>
  );
};

export default Home;
