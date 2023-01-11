import { Box, Stack } from "@mui/material";
import React, { Fragment } from "react";
import ContactUsComponent from "../components/ContactUsComponent";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <Fragment>
      <Stack
        direction="row"
        sx={{ backgroundImage: "linear-gradient(to right, #9900ff, #cc80ff)" }}>
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}></Box>
        <Box flex={4}>
          <ContactUsComponent />
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}></Box>
      </Stack>
      <Footer />
    </Fragment>
  );
};

export default ContactUs;
