import { Stack } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const SocialMediaIcons = () => {
  return (
    <Stack spacing={2}>
      <a
        className="anchorTag facebook"
        href="https://www.facebook.com/itsindianguy">
        <Facebook
          sx={{
            color: "#4267B2",
            fontSize: "30px",
            "&:hover": {
              fontSize: "40px",
            },
          }}
        />
      </a>
      <a
        className="anchorTag instagram"
        href="https://www.instagram.com/itsindianguy/">
        <Instagram
          sx={{
            color: "#8a3ab9",
            fontSize: "30px",
            "&:hover": {
              fontSize: "40px",
            },
          }}
        />
      </a>

      <YouTube
        sx={{
          color: "#FF0000",
          fontSize: "30px",
          "&:hover": {
            fontSize: "40px",
          },
        }}
      />
      {/* <Pinterest
        sx={{
          color: "#E60023",
          fontSize: "30px",
          "&:hover": {
            fontSize: "40px",
          },
        }}
      /> */}
      <a className="anchorTag twitter" href="https://twitter.com/itsindianguy/">
        <Twitter
          sx={{
            color: "#34B7F1",
            fontSize: "30px",
            "&:hover": {
              fontSize: "40px",
            },
          }}
        />
      </a>
      <a
        className="anchorTag social quora"
        href="https://itsindianguy.quora.com/"
        style={{
          fontSize: "28px",
          color: "#b92b27",
          ":hover": {
            fontSize: "40px",
          },
        }}>
        <i className="fa-brands fa-quora"></i>
      </a>
    </Stack>
  );
};

export default SocialMediaIcons;
