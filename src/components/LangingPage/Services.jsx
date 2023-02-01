import { Box, Stack } from "@mui/material";
import { motion, Variants } from "framer-motion";
import "./services.css";

const Services = () => {
  const cardVariants = {
    offscreen: {
      x: -300,
    },
    onscreen: {
      x: 10,
      rotate: -2,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.9,
      },
    },
  };
  function Card({ emoji }) {
    return (
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>
        <div className="splash" />
        <motion.div
          className="card"
          variants={cardVariants}
          style={{
            backgroundImage: `linear-gradient(to left top, red, white)`,
            padding: "5px",
          }}>
          {emoji}
        </motion.div>
      </motion.div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        flexWrap: "wrap",
        paddingBottom: "50px",
      }}>
      <Card emoji={"Web Dev"} key={"dev"} />
      <Card emoji={"Interview"} key={"interview"} />
      <Card emoji={"Youtube"} key={"youtube"} />
      <Card emoji={"Mobile Dev"} key={"mob"} />
      <Card emoji={"Facebook"} key={"fb"} />
      <Card emoji={"Portfolio"} key={"port"} />
    </div>
  );
};

export default Services;
