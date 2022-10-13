import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";

const SinglePostComponent = () => {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState();
  const postCollectionRef = doc(db, "posts", id);
  // const [user, setUser] = useState();
  // console.log(id);

  useEffect(() => {
    const getPosts = async () => {
      // const data = await db.collection("posts").doc(id.id).get();

      const data = await getDoc(postCollectionRef);
      console.log(data);

      setPost(data.data());
    };

    getPosts();
  }, []);

  return (
    <Stack direction="row">
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}></Box>
      <Box flex={4} sx={{ display: { xs: "none", sm: "block" } }}>
        <Stack spacing={3} p={2} alignContent="left">
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
            {post ? post.title : ""}
          </Box>
          <Box
            sx={{
              ":first-letter": { fontSize: "35px" },
              fontSize: "20px",
              whiteSpace: "pre-line",
            }}>
            {post ? post.desc : ""}
          </Box>
          <Box>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: "50px",
              }}>
              <Typography variant="h6"> Was this page helpful? </Typography>
              <ThumbUp sx={{ cursor: " pointer" }} />
              <ThumbDown sx={{ cursor: " pointer" }} />
            </Stack>
          </Box>
          <Box> Subscribe to the mail </Box>
          <Box> Footer </Box>
        </Stack>
      </Box>
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}></Box>
    </Stack>
  );
};

export default SinglePostComponent;
