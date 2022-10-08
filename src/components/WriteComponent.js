import { AddPhotoAlternate } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const WriteComponent = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();

  const postCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      desc,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      created: serverTimestamp(),
    });
    navigate("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      navigate("/login");
    }
  });

  return (
    <Box flex={4} sx={{ padding: { xs: "0", sm: "50px 20px " } }}>
      <Typography variant="h3" component="h3">
        Create A Post
      </Typography>
      {/* <img
        style={{
          // marginLeft: "150px",
          width: "50vw",
          height: "250px",
          borderRadius: "10px",
          objectFit: "cover",
        }}
        src={image === "" ? "" : URL.createObjectURL(image)}
        alt="image"
        loading="lazy"
      /> */}
      {/* <ImageListItemBar position="below" title="" /> */}

      <form style={{ position: "relative", marginTop: "50px" }}>
        <Stack spacing={2}>
          {/* <Stack direction="row" spacing={1}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <label htmlFor="fileInput">
                <AddPhotoAlternate
                  fontSize="large"
                  sx={{
                    cursor: "pointer",
                  }}
                />
              </label>

              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                name="photo"
                onChange={handleImageUpload}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <label htmlFor="bold">
                <FormatBold
                  sx={{
                    cursor: "pointer",
                  }}
                  fontSize="large"
                />
              </label>
              <label>{image.name}</label>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}></Box>
          </Stack> */}
          <Box>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              label="Post Title"
              variant="outlined"
              name="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Box>
          {/* <FormControl sx={{ minWidth: 120, width: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={inputField.categories}
              label="Category"
              onChange={handleCategoryChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categoriesArray &&
                categoriesArray.map((value, key) => {
                  return (
                    <MenuItem key={key} value={value}>
                      {value}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl> */}
          <Box>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-multiline-flexible"
              label="Post Description"
              multiline
              rows={10}
              name="desc"
              onChange={(e) => {
                setDesc(e.target.value);
              }}

              // value={value}
              // onChange={handleChange}
            />
          </Box>
        </Stack>
        <Button
          variant="contained"
          sx={{ marginTop: "20px", marginRight: "20px" }}
          onClick={createPost}>
          Publish
        </Button>
        <Button
          variant="outlined"
          sx={{ marginTop: "20px", marginRight: "20px" }}>
          Cancel
        </Button>
        <Button variant="outlined" color="secondary" sx={{ marginTop: "20px" }}>
          Save Draft
        </Button>
      </form>
    </Box>
  );
};

export default WriteComponent;
