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
    <Box sx={{ background: "black", height: "300px" }}>
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
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
        <Box flex={1}>
          <Typography color={"white"} align={"center"}>
            Data policy
          </Typography>
          <Typography color={"white"} align={"center"}>
            Cookies
          </Typography>
          <Typography color={"white"} align={"center"}>
            Data Safety
          </Typography>
        </Box>
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
        <Box>
          <Typography color={"white"} align={"center"}>
            Follow Us
          </Typography>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
      </Stack>
      <Typography color={"white"} align={"center"}>
        Copyright &copy;{" itsindianguy.com"}
      </Typography>
    </Box>
  );
};

export default Footer;
