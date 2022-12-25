import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { reactQuestions } from "../../questions";

const ReactComponentFile = () => {
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
        React Js Top Interview Questions
      </h2>

      {reactQuestions.map((data, key) => {
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
                  {data.ans}
                </Typography>
              </label>
            </Box>
          </Stack>
        );
      })}
    </>
  );
};

export default ReactComponentFile;
