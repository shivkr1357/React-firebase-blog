// import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
// import LeftBar from "../components/LeftBar";
// import Feed from "../components/Feed";
// import Rightbar from "../components/Rightbar";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import AboutComponent from "../components/AboutComponent";
import Footer from "../components/Footer";
import HomeComponent from "../components/HomeComponent";
// import Navbar from "../components/Navbar";

const Home = () => {
  //   const [mode, setMode] = useState("light");
  //   const darkTheme = createTheme({
  //     palette: {
  //       mode: mode,
  //     },
  //   });

  return (
    <>
      <Stack direction="row">
        <Box flex={3}>
          <HomeComponent />
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
          <AboutComponent />
        </Box>
      </Stack>
      <Footer />
    </>
  );
};

export default Home;
