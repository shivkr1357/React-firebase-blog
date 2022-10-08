import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  // Stack,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import SmartText from "../helpers/SmartText";
import { data } from "../helpers/data";

const HomeComponent = () => {
  // const [postList, setPostList] = useState([]);

  // const postCollectionRef = collection(db, "posts");

  const navigate = useNavigate();

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const data = await getDocs(postCollectionRef);

  //     setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getPosts();
  // }, [postCollectionRef]);

  return (
    <Box
      flex={4}
      sx={{ padding: { xs: "0", sm: "0px 20px ", marginTop: "10px" } }}>
      <Card sx={{ marginBottom: "20px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {Array.from("Hello World")[0]}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={"Hello This is a title for the "}
          subheader={data.date}
          onClick={() => {
            navigate("");
          }}
          sx={{ cursor: "pointer" }}
        />
        {/* <CardMedia
          component="img"
          height="20%"
          // image={}
          alt="Paella dish"
        /> */}
        <CardContent>
          <SmartText text={data.desc} />
          {/* <Typography variant="body2" color="text.secondary">
              {post.desc}
            </Typography> */}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          {/*  <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
        </CardActions>
      </Card>
      {/* {postList.map((post, key) => {
        return (
          <Card sx={{ marginBottom: "20px" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                  {Array.from(post.title)[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.title}
              // subheader={}
              onClick={() => {
                navigate("");
              }}
              sx={{ cursor: "pointer" }}
            />
            <CardMedia
              component="img"
              height="20%"
              // image={photo}
              alt="Paella dish"
            />
            <CardContent>
              <SmartText text={post.desc} />
              {/* <Typography variant="body2" color="text.secondary">
              {post.desc}
            </Typography> 
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: "red" }} />}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              {/*  <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> 
            </CardActions>
          </Card>
        );
       */}
    </Box>
  );
};

export default HomeComponent;
