import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
  paddingTop: 20,
});

const Footer = () => {
  return (
    <Box
      sx={{
        "background-image": "linear-gradient(to right, #00395d, #8f8f8c)",
        height: "100%",
        minHeight: "400px",
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
            <Typography color={"white"} align={"center"}>
              Contact Us
            </Typography>
            <SocialBox>
              <Facebook />
              <Instagram />
              <Twitter />
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
            Categories (Coming Soon)
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
              <Facebook />
              <Instagram />
              <Twitter />
            </SocialBox>
          </Box>
        </Box>
      </Stack>
      <Typography color={"white"} align={"center"}>
        Copyright &copy;{" itsindianguy.com"}
      </Typography>
    </Box>
  );
};

export default Footer;
