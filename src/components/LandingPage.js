import { Box, Typography } from "@mui/material";
import backgroundImage from "./static/backgroundImage.jpg";

const LandingPage = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100%",
          height: 600,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
        }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 2, sm: 3, md: 5 },
          }}>
          <Box sx={{ background: "white", opacity: 0.7 }}>
            <Typography align="center" variant="h6" pt={8}>
              We have the best blog of the React Js
            </Typography>
            <Typography align="center" variant="h4">
              We have the best blog of the React Js
            </Typography>
            <Typography align="center" variant="body1" pb={8}>
              We have the best blog of the React Js
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
