import { Box } from "@mui/material";
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
        return <div key={key}>{post.title}</div>;
      })}
    </Box>
  );
};

export default HomeComponent;
