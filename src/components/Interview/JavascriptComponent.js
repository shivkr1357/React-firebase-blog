import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { jsQuestions } from "../../questions";
import { renderHTML } from "../../helpers/renderHTML";

const JavascriptComponent = () => {
  return (
    <>
      <h2
        style={{
          padding: "10px",
          fontWeight: 800,
          fontSize: "22px",
          display: "flex",
          fontFamily: "Roboto",
        }}>
        JavaScript Top Interview Questions
      </h2>

      {jsQuestions.map((data, key) => {
        return (
          <Stack direction="row" spacing={2} key={key}>
            <Box flex={3} p={2} id="question">
              <label
                htmlFor="question"
                style={{
                  paddingBottom: "100px",
                  fontWeight: 900,
                  fontFamily: "Roboto",
                }}>
                <b>{data.id + "." + data.que}</b>
              </label>
              <label htmlFor="answer">
                <Typography sx={{ fontFamily: "Roboto", paddingTop: "20px" }}>
                  {renderHTML(data.ans)}
                </Typography>
              </label>
            </Box>
          </Stack>
        );
      })}
    </>
  );
};

export default JavascriptComponent;
