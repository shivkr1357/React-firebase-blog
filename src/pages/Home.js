import { ModeNight } from "@mui/icons-material";
import { Box, Switch } from "@mui/material";
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
        <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
          <AboutComponent />
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              alignItems: "flex-end",
              justifyContent: "flex-end",
              top: "550px",
              right: "50px",
              zIndex: 1,
              position: "sticky",
            }}>
            <label htmlFor="fileInput">
              <ModeNight />
            </label>

            <Switch
              sx={{ display: "none" }}
              id="fileInput"
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              checked={mode === "light" ? false : true}
            />
          </Box>
        </Box>
      </Stack>
      <Footer />
    </>
  );
};

export default Home;
