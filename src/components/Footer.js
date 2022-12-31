import { Box, Stack, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
import "./CSS/footer.css";

const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
  paddingTop: 20,
});

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        "background-image": "linear-gradient(to right, #00395d, #8f8f8c)",
        height: "100%",
        minHeight: "280px",
      }}>
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        p={{ xs: 2, sm: 3, md: 7 }}
        spacing={{ xs: 3, sm: 4, md: 5 }}>
        <Box flex={1}>
          <Box
            align={"center"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Typography
              color={"white"}
              align={"center"}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}>
              Contact Us
            </Typography>
            <SocialBox>
              <a
                className="anchorTag facebook"
                href="https://www.facebook.com/itsindianguy">
                <Facebook />
              </a>
              <a
                className="anchorTag instagram"
                href="https://www.instagram.com/itsindianguy/">
                <Instagram />
              </a>

              <a
                className="anchorTag twitter"
                href="https://twitter.com/itsindianguy/">
                <Twitter />
              </a>
              <a
                className="anchorTag quora"
                href="https://itsindianguy.quora.com/"
                style={{ fontSize: "24px" }}>
                <i className="fa-brands fa-quora"></i>
              </a>
            </SocialBox>
          </Box>
          {/* <Typography color={"white"} align={"center"}>
            of squamate reptiles, with over 6,000 species,
          </Typography>
          <Typography color={"white"} align={"center"}>
            continents except Antarcti
          </Typography>
          <Typography color={"white"} align={"center"}>
            ranging across
          </Typography> */}
        </Box>
        <Stack
          flex={1}
          spacing={1}
          direction={{ xs: "row", sm: "column", md: "column" }}
          justifyContent={"center"}>
          <Typography color={"white"} align={"center"} display="flex">
            Data policy{" "}
            <Typography
              sx={{
                display: { xs: "block", sm: "block", md: "none" },
                marginLeft: { xs: "10px", sm: "10px", md: "0px" },
              }}>
              |
            </Typography>
          </Typography>
          <Typography color={"white"} align={"center"} display="flex">
            Cookies{" "}
            <Typography
              sx={{
                display: { xs: "block", sm: "block", md: "none" },
                marginLeft: { xs: "10px", sm: "10px", md: "0px" },
              }}>
              |
            </Typography>
          </Typography>
          <Typography color={"white"} align={"center"} display="flex">
            Data Safety
          </Typography>
        </Stack>
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Categories
          </Typography>
          <Typography
            color={"white"}
            align={"center"}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/blog");
              window.scrollTo(0, 0);
            }}>
            Blog
          </Typography>
          <Typography
            color={"white"}
            align={"center"}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/interview-qa/js-interview-questions");
            }}>
            JavaScript Interview Q/A
          </Typography>
          <Typography
            color={"white"}
            align={"center"}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/interview-qa/react-js-interview-questions");
              window.scrollTo(0, 0);
            }}>
            React Js Interview Q/A
          </Typography>
          <Typography
            color={"white"}
            align={"center"}
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/interview-qa/node-js-interview-questions");
              window.scrollTo(0, 0);
            }}>
            Node Js Interview Q/A
          </Typography>
          {/* <Typography color={"white"} variant={"body2"} align={"center"}>
            Kids
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Women
          </Typography>
          <Typography color={"white"} variant={"body2"} align={"center"}>
            Men
          </Typography> */}
        </Box>
        <Box flex={1}>
          <Box
            align={"center"}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Typography color={"white"} align={"center"}>
              Follow Us
            </Typography>
            <SocialBox>
              <a
                className="anchorTag facebook"
                href="https://www.facebook.com/itsindianguy">
                <Facebook />
              </a>
              <a
                className="anchorTag instagram"
                href="https://www.instagram.com/itsindianguy/">
                <Instagram />
              </a>

              <a
                className="anchorTag twitter"
                href="https://twitter.com/itsindianguy/">
                <Twitter />
              </a>
              <a
                className="anchorTag quora"
                href="https://itsindianguy.quora.com/"
                style={{ fontSize: "24px" }}>
                <i className="fa-brands fa-quora"></i>
              </a>
            </SocialBox>
          </Box>
        </Box>
      </Stack>
      <Typography color={"white"} align={"center"}>
        Copyright &copy;{" itsindianguy.in"}
      </Typography>
    </Box>
  );
};

export default Footer;
