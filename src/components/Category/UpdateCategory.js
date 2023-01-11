import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import React from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase-config";

const UpdateCategory = () => {
  const req = useParams();

  const [categoryName, setCategoryName] = useState("");

  const id = req.id;
  const categoryDocRef = doc(db, "category", id);

  const navigate = useNavigate();

  const updateCategory = async () => {
    await updateDoc(categoryDocRef, { name: categoryName });
    navigate("/admin/categories");
  };

  useEffect(() => {
    const getAllCategory = async () => {
      const docSnap = await getDoc(categoryDocRef);
      setCategoryName(docSnap.data().name);
    };

    getAllCategory();
  }, []);
  return (
    <Fragment>
      <Stack direction="row">
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}></Box>

        <Box flex={4} sx={{ padding: { xs: "0", sm: "50px 20px " } }}>
          <Typography variant="h3" component="h3">
            Update Category
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
                  value={categoryName}
                  onChange={(e) => {
                    setCategoryName(e.target.value);
                  }}
                  autoFocus={true}
                />
              </Box>
            </Stack>
            <Button
              variant="contained"
              sx={{ marginTop: "20px", marginRight: "20px" }}
              onClick={updateCategory}>
              Update
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

export default UpdateCategory;
