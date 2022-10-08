import { Stack } from "@mui/material";
import {
  Facebook,
  Instagram,
  Pinterest,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";

const SocialMediaIcons = () => {
  return (
    <Stack spacing={2}>
      <Facebook
        sx={{
          color: "#4267B2",
          fontSize: "30px",
          "&:hover": {
            fontSize: "40px",
          },
        }}
      />
      <Instagram
        sx={{
          color: "#8a3ab9",
          fontSize: "30px",
          "&:hover": {
            fontSize: "40px",
          },
        }}
      />
      <YouTube
        sx={{
          color: "#FF0000",
          fontSize: "30px",
          "&:hover": {
            fontSize: "40px",
          },
        }}
      />
      <Pinterest
        sx={{
          color: "#E60023",
          fontSize: "30px",
          "&:hover": {
            fontSize: "40px",
          },
        }}
      />
      <WhatsApp
        sx={{
          color: "#34B7F1",
          fontSize: "30px",
          "&:hover": {
            fontSize: "40px",
          },
        }}
      />
    </Stack>
  );
};

export default SocialMediaIcons;
