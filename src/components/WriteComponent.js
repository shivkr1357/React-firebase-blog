import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const WriteComponent = ({ isAuth }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState([]);
  const [value, setValue] = useState();

  const categoryCollectionRef = query(
    collection(db, "category"),
    orderBy("created", "desc")
  );

  const postCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      desc,
      category: newCategory,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      created: serverTimestamp(),
    });
    navigate("/");
  };

  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      navigate("/login");
    }
    const getAllCategory = async () => {
      const data = await getDocs(categoryCollectionRef);

      setCategory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAllCategory();
  }, [categoryCollectionRef]);

  return (
    <Box flex={4} sx={{ padding: { xs: "0", sm: "50px 20px " } }}>
      <Typography variant="h3" component="h3">
        Create A Post
      </Typography>

      <form style={{ position: "relative", marginTop: "50px" }}>
        <Stack spacing={2}>
          <Autocomplete
            multiple
            id="fixed-tags-demo"
            value={value}
            onChange={(event, newValue) => {
              setNewCategory(newValue);
              setValue(newValue.name);
              // handleChange(newValue);
            }}
            options={category}
            getOptionLabel={(option) => (option.name ? option.name : "")}
            style={{ width: 500 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Categories"
                placeholder=" Select Category"
              />
            )}
          />

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
        {/* <Button variant="outlined" color="secondary" sx={{ marginTop: "20px" }}>
          Save Draft
        </Button> */}
      </form>
    </Box>
  );
};

export default WriteComponent;
