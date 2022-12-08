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
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              flexDirection: "column",
              flex: 1,
            }}>
            <label htmlFor="fileInput">
              <ModeNight
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                  alignSelf: "flex-end",
                  position: "absolute",
                  bottom: 35,
                }}
              />
            </label>

            <Switch
              sx={{ display: "none" }}
              id="fileInput"
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              checked={mode === "light" ? false : true}
            />
          </Box>
          <AboutComponent />
        </Box>
      </Stack>
      <Footer />
    </>
  );
};

export default Home;
