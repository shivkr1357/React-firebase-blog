import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const InterviewLinks = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 1 }}
      style={{
        background: "white",
        opacity: 0.9,
        borderRadius: "10px",
        marginTop: "30px",
        margin: "30px",
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
    </motion.div>
  );
};

export default InterviewLinks;
