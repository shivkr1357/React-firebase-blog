import {
  Autocomplete,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { auth, db } from "../../firebase-config";

const EditPost = ({ isAuth }) => {
  const req = useParams();

  const id = req.id;

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState([]);
  // const [categoryName, setCategoryName] = useState("");
  const [value, setValue] = useState();

  const categoryCollectionRef = query(
    collection(db, "category"),
    orderBy("created", "desc")
  );

  const postDocRef = doc(db, "posts", id);

  const updatePost = async () => {
    await updateDoc(postDocRef, {
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
    const getPost = async () => {
      const docSnap = await getDoc(postDocRef);

      setTitle(docSnap.data().title);
      setDesc(docSnap.data().desc);
      setValue(docSnap.data().category?.map((cat) => cat.name));
    };
    const getAllCategory = async () => {
      const data = await getDocs(categoryCollectionRef);

      setCategory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAllCategory();
    getPost();
  }, []);

  return (
    <Box flex={4} sx={{ padding: { xs: "0", sm: "50px 20px " } }}>
      <Typography variant="h3" component="h3">
        Update Post
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
              value={title}
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
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </Box>
        </Stack>
        <Button
          variant="contained"
          sx={{ marginTop: "20px", marginRight: "20px" }}
          onClick={updatePost}>
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

export default EditPost;
