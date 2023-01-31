import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

import { useState } from "react";
import { Fragment } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CategoryComponent = () => {
  //  states
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState();
  const [selDeleteCategory, setSelDeleteCategory] = useState([]);

  // Use for navigation
  const navigate = useNavigate();

  // category collection reference for showing all categories
  const categoryCollectionRef = query(
    collection(db, "category"),
    orderBy("created", "desc")
  );
  //  Modal close method

  const handleClose = () => {
    setOpen(false);
  };
  // handle dialog open for deletion

  const handleDeleteConfirmation = (cat) => {
    setOpen(true);
    setSelDeleteCategory(cat);
  };

  // handle delete the categgory

  const handleDelete = (id) => {
    const deleteCategoryCollectionDoc = doc(
      db,
      "category",
      selDeleteCategory.id
    );

    deleteDoc(deleteCategoryCollectionDoc).then(() => {
      setOpen(false);
      window.location.reload();
    });
  };

  useEffect(() => {
    const getAllCategory = async () => {
      const data = await getDocs(categoryCollectionRef);

      setCategory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAllCategory();
  }, [categoryCollectionRef]);
  return (
    <Fragment>
      <Stack direction="row">
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}></Box>
        <Box flex={4} sx={{ padding: { xs: "0", sm: "50px 20px " } }}>
          <Typography variant="h3" sx={{ alignSelf: "center" }}>
            Categories
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
              paddingBottom: "10px",
            }}>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                navigate("/admin/categories/add-category");
              }}>
              Add
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="Categories">
              <TableHead>
                <TableRow>
                  <TableCell align="left">S. No</TableCell>
                  <TableCell align="center">Categories</TableCell>
                  <TableCell align="center">Created By</TableCell>
                  <TableCell align="center">Created At</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {category ? (
                  category.map((cat, key) => {
                    var creation = new Date(cat.created.seconds * 1000);
                    const formattedDate = creation.toLocaleDateString("en-IN");
                    const formattedTime = creation.toLocaleString("en-IN", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    });
                    const newDate = `${formattedDate} ${formattedTime}`;

                    return (
                      <Fragment>
                        <TableRow
                          key={cat.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}>
                          <TableCell component="th" scope="row">
                            {key + 1}
                          </TableCell>
                          <TableCell align="center">{cat.name}</TableCell>
                          <TableCell align="center">
                            {cat.author.name}
                          </TableCell>
                          <TableCell align="center">{newDate}</TableCell>
                          <TableCell align="right">
                            <Fragment>
                              <Edit
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                  navigate(
                                    "/admin/categories/edit-category/" + cat.id
                                  );
                                }}
                              />
                              <Delete
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                  handleDeleteConfirmation(cat);
                                }}
                              />
                            </Fragment>
                          </TableCell>
                        </TableRow>
                      </Fragment>
                    );
                  })
                ) : (
                  <CircularProgress variant="solid" />
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}></Box>
      </Stack>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Category Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete the Category{" "}
            <b>{selDeleteCategory.name}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            onClick={() => {
              handleDelete();
            }}>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default CategoryComponent;
