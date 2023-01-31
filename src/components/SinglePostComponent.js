import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import Footer from "./Footer";
import { renderHTML } from "../helpers/renderHTML";

const SinglePostComponent = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const postCollectionRef = doc(db, "posts", id);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDoc(postCollectionRef);

      setPost(data.data());
    };

    getPosts();
  }, [postCollectionRef]);

  return (
    <Fragment>
      <Stack direction="row">
        <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}></Box>
        <Box
          flex={4}
          sx={{
            display: { xs: "flex", sm: "flex" },
            width: { xs: "100%", sm: "90%" },
          }}>
          <Stack spacing={2} p={1} sx={{ display: "flex", width: "100%" }}>
            <Box>
              <img src={post ? post.photo : ""} alt="" />
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                color: "blue",
                fontSize: "30px",
                fontWeight: 600,
              }}>
              {post ? (
                post.title
              ) : (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress sx={{ alignContents: "center" }} />
                </Box>
              )}
            </Box>
            <Box
              sx={{
                ":first-letter": { fontSize: "35px" },
                fontSize: "16px",
                whiteSpace: "pre-line",
              }}>
              {renderHTML(post ? post.desc : "")}
            </Box>
            <Box>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "50px",
                  paddingTop: "50px",
                }}>
                <Typography variant="h6"> Was this page helpful? </Typography>
                <ThumbUp sx={{ cursor: " pointer" }} />
                <ThumbDown sx={{ cursor: " pointer" }} />
              </Stack>
            </Box>
            {/* <Box> Subscribe to the mail </Box>
          <Box> Footer </Box> */}
          </Stack>
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}></Box>
      </Stack>
      <Footer />
    </Fragment>
  );
};

export default SinglePostComponent;
