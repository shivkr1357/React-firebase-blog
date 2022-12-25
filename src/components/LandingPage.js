import { Box, Typography } from "@mui/material";
import backgroundImage from "./static/backgroundImage.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
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
          <Box
            sx={{
              background: "white",
              opacity: 0.9,
              borderRadius: "10px",
              marginTop: "30px",
            }}>
            <Typography
              align="center"
              p={2}
              pt={8}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/interview-qa/js-interview-questions")}>
              Top INTERVIEW QUESTIONS of the JAVASCRIPT
            </Typography>
            <Typography
              align="center"
              sx={{ cursor: "pointer" }}
              p={2}
              onClick={() =>
                navigate("/interview-qa/react-js-interview-questions")
              }>
              Top INTERVIEW QUESTIONS the React Js
            </Typography>
            <Typography
              align="center"
              sx={{ cursor: "pointer" }}
              p={2}
              pb={8}
              onClick={() =>
                navigate("/interview-qa/node-js-interview-questions")
              }>
              Top INTERVIEW QUESTIONS of the Node Js
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
