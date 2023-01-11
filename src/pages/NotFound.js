import { Stack } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Stack>
      <div id="message">
        <h2>404</h2>
        <h1>Page Not Found</h1>
        <p>
          The specified file was not found on this website. Please check the URL
          for mistakes and try again.
        </p>
        <h3>Why am I seeing this?</h3>
      </div>
    </Stack>
  );
};

export default NotFound;
