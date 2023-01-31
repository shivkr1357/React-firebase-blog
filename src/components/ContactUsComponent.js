import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Fragment } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const ContactUsComponent = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2c1vsjo",
        "template_4nlm98f",
        form.current,
        "UIVNxsnbicAJvGhr6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Fragment>
      <Typography align="center" sx={{ backgroundColor: "white" }}>
        Send Us a message to connect with us
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={2}
        p={2}
        align="center">
        <Stack
          spacing={2}
          p={2}
          sx={{
            // margin: { xs: "10px", sm: "10px", md: "0px" },
            padding: { xs: "20px", sm: "20px", md: "20px" },
            width: { xs: "80%", sm: "80%", md: "400px" },
            minHeight: "40vh",
            height: "100%",
            background: "silver",
            borderRadius: "5px",
          }}>
          <Stack direction="row" spacing="2" p={2}>
            <Typography>
              <LocationOnIcon />
            </Typography>
            <Typography>
              Address :<br />
              Muzaffarpur ,Bihar , India IN
            </Typography>
          </Stack>
          <Stack direction="row" spacing="2" p={2}>
            <Typography>
              <LocalPhoneIcon />
            </Typography>
            <Typography>+91 8969308829</Typography>
          </Stack>
          <Stack direction="row" spacing="2" p={2}>
            <Typography>
              <EmailIcon />
            </Typography>
            <Typography>itsindianguy12@gmail.com</Typography>
          </Stack>
        </Stack>
        <Stack
          spacing={2}
          p={2}
          sx={{
            // margin: { xs: "10px", sm: "10px", md: "0px" },
            padding: { xs: "20px", sm: "20px", md: "20px" },
            width: { xs: "80%", sm: "80%", md: "400px" },
            minHeight: "40vh",
            height: "100%",
            background: "white",
            borderRadius: "5px",
          }}>
          <Typography variant="h3" align="center">
            Send Message
          </Typography>
          <form ref={form} onSubmit={sendEmail}>
            <Stack p={2} m={2} spacing={2}>
              <TextField type="text" label="Your Name" name="user_name" />

              <TextField type="email" label="Email" name="user_email" />

              <TextField multiline rows={4} label="Message" name="message" />

              <Button variant="contained" type="submit" value="Send">
                Send
              </Button>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default ContactUsComponent;
