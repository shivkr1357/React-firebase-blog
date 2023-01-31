import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const InterviewLinks = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: "white",
        opacity: 0.9,
        borderRadius: "10px",
        marginTop: "30px",
      }}>
      <Typography
        align="center"
        variant="h1"
        p={2}
        pt={8}
        sx={{ fontSize: "20px", fontFamily: "Roboto", cursor: "pointer" }}
        onClick={() => navigate("/interview-qa/js-interview-questions")}>
        Top INTERVIEW QUESTIONS of the JAVASCRIPT
      </Typography>
      <Typography
        align="center"
        variant="h2"
        sx={{ fontSize: "20px", fontFamily: "Roboto", cursor: "pointer" }}
        p={2}
        onClick={() => navigate("/interview-qa/react-js-interview-questions")}>
        Top INTERVIEW QUESTIONS the React Js
      </Typography>
      <Typography
        align="center"
        variant="h3"
        sx={{ fontSize: "20px", fontFamily: "Roboto", cursor: "pointer" }}
        p={2}
        pb={8}
        onClick={() => navigate("/interview-qa/node-js-interview-questions")}>
        Top INTERVIEW QUESTIONS of the Node Js
      </Typography>
    </Box>
  );
};

export default InterviewLinks;
