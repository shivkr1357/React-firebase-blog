import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase-config";

const AddCategory = () => {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState();
  const categoryCollectionRef = collection(db, "category");

  const createCategory = async () => {
    await addDoc(categoryCollectionRef, {
      name: categoryName,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      created: serverTimestamp(),
    });
    navigate("/admin/categories");
  };
  useEffect(() => {
    if (!localStorage.getItem("isAuth")) {
      navigate("/login");
    }
  });

  return (
    <Fragment>
      <Stack direction="row">
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}></Box>

        <Box flex={4} sx={{ padding: { xs: "0", sm: "50px 20px " } }}>
          <Typography variant="h3" component="h3">
            Add Category
          </Typography>

          <form style={{ position: "relative", marginTop: "50px" }}>
            <Stack spacing={2}>
              <Box>
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="Category Name"
                  variant="outlined"
                  name="category_name"
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                  }}
                />
              </Box>
            </Stack>
            <Button
              variant="contained"
              sx={{ marginTop: "20px", marginRight: "20px" }}
              onClick={createCategory}>
              Create
            </Button>
            <Button
              variant="outlined"
              color="error"
              sx={{ marginTop: "20px", marginRight: "20px" }}
              onClick={() => {
                navigate("/admin/categories");
              }}>
              Cancel
            </Button>
          </form>
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}></Box>
      </Stack>
    </Fragment>
  );
};

export default AddCategory;
