import { Delete, Edit } from "@mui/icons-material";
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
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect } from "react";
import { Fragment } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";

const Post = () => {
  const [postList, setPostList] = useState([]);
  const [open, setOpen] = useState(false);

  const postCollectionRef = query(
    collection(db, "posts"),
    orderBy("created", "desc")
  );

  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(!open);
  };

  const handleDelete = () => {};
  const handleDeleteConfirmation = () => {};

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [postCollectionRef]);

  return (
    <Fragment>
      <Stack direction="row">
        <Box flex={1} sx={{ display: { xs: "none", sm: "flex" } }}></Box>
        <Box flex={4} sx={{ padding: { xs: "0", sm: "50px 20px " } }}>
          <Typography variant="h3" sx={{ alignSelf: "center" }}>
            Posts
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
                navigate("/write");
              }}>
              Add
            </Button>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="postegories">
              <TableHead>
                <TableRow>
                  <TableCell align="left">S. No</TableCell>
                  <TableCell align="center">Post Title</TableCell>
                  <TableCell align="center">Created By</TableCell>
                  <TableCell align="center">Created At</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
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
                      <Fragment>
                        <TableRow
                          key={post.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}>
                          <TableCell component="th" scope="row">
                            {key + 1}
                          </TableCell>
                          <TableCell align="center">{post.title}</TableCell>
                          <TableCell align="center">
                            {post.author.name}
                          </TableCell>
                          <TableCell align="center">{newDate}</TableCell>
                          <TableCell align="right">
                            <Fragment>
                              <Edit
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                  navigate("/admin/posts/edit-post/" + post.id);
                                }}
                              />
                              <Delete
                                sx={{ cursor: "pointer" }}
                                onClick={() => {
                                  handleDeleteConfirmation(post);
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
        <DialogTitle id="alert-dialog-title">{"Post Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete the postegory <b>{}</b>
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

export default Post;
