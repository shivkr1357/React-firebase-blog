import { Box, Stack } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";

const HomeComponent = () => {
  const [postList, setPostList] = useState([]);

  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [postCollectionRef]);

  return (
    <Box flex={4} sx={{ padding: { xs: "0", sm: "0px 20px " } }}>
      {postList.map((post, key) => {
        return (
          <Stack key={key} spacing={2} p={2} direction="row">
            <Box flex={1}></Box>
            <Stack flex={4} direction="column">
              <Box>
                <b>{post.title}</b>
              </Box>
              <Box>{post.desc}</Box>
              <Box>@{post.author.name}</Box>
            </Stack>
            <Box flex={1}></Box>
          </Stack>
        );
      })}
    </Box>
  );
};

export default HomeComponent;
