import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  CircularProgress,
  IconButton,
  Stack,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import SmartText from "../helpers/SmartText";
import { capitalize } from "../helpers/Capitalize";

const HomeComponent = ({ setIsAuth, mode, setMode }) => {
  const [postList, setPostList] = useState([]);

  const postCollectionRef = query(
    collection(db, "posts"),
    orderBy("created", "desc")
  );

  const navigate = useNavigate();

  useEffect(() => {
    // if (isAuthenticated()) {
    //   setIsAuth(true);
    // }

    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <Box
      flex={4}
      sx={{ padding: { xs: "0", sm: "0px 20px ", marginTop: "10px" } }}>
      {postList ? (
        postList.map((post, key) => {
          var creation = new Date(post.created.seconds * 1000);
          const formattedDate = creation.toLocaleDateString("en-IN");
          const formattedTime = creation.toLocaleString("en-IN", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
          const newDate = `${formattedDate} ${formattedTime}`;
          return (
            <Card
              key={key}
              sx={{ marginBottom: "20px", boxShadow: "-moz-initial" }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="question">
                    {Array.from(post.title)[0]}
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon
                      onClick={() => {
                        navigate("/");
                      }}
                    />
                  </IconButton>
                }
                title={post.title}
                subheader={`by @${post.author.name} at ${newDate} `}
                onClick={() => {
                  navigate("/posts/" + post.id);
                }}
                titleTypographyProps={{ variant: "h5" }}
                sx={{
                  cursor: "pointer",
                  color: "blue",
                  fontSize: "30px",
                  fontWeight: 600,
                }}
              />
              {/* <CardMedia
              component="img"
              height="20%"
              // image={photo}
              alt="Paella dish"
            /> */}
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  padding: "5px",
                  margin: "5px",
                }}>
                {post.category?.map((cat) => {
                  return (
                    <Box
                      sx={{
                        margin: "5px",
                        padding: "8px",
                        borderRadius: "2px",
                        backgroundColor: "silver",
                      }}>
                      {cat.name}
                    </Box>
                  );
                })}
              </Stack>

              <CardContent
                sx={{
                  ":first-letter": { fontSize: "35px" },
                  fontSize: "20px",
                  whiteSpace: "pre-line",
                }}>
                <SmartText text={capitalize(post.desc)} />
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
          {/* </ExpandMore>  */}
              </CardActions>
            </Card>
          );
        })
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default HomeComponent;
