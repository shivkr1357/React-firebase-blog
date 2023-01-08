import React, { Fragment } from "react";

import {
  Drawer,
  List,
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Switch,
  ListSubheader,
  Divider,
  Collapse,
} from "@mui/material";
import {
  Article,
  Group,
  Home,
  ModeNight,
  Storefront,
  Close,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";
import SocialMediaIcons from "./SocialMediaIcons";
import { isAuthenticated } from "../helpers/auth";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";

const SideDrawer = ({
  openDrawer,
  setOpenDrawer,
  mode,
  setMode,
  setIsAuth,
}) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openInterview, setOpenInterview] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    setOpenCategory(!openCategory);
  };
  const handleInterviewClick = () => {
    setOpenInterview(!openInterview);
  };
  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/login");
      setIsAuth(false);
    });

    navigate("/");
  };
  return (
    <Drawer
      open={openDrawer}
      onClose={(e) => setOpenDrawer(false)}
      PaperProps={{
        sx: {
          width: { xs: "70%", sm: "20%" },
        },
      }}>
      <List>
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "right",
            cursor: "pointer",
            marginTop: "10px",
            marginRight: "10px",
          }}
          onClick={(e) => setOpenDrawer(false)}>
          <Close />
        </Box>
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Box>Menu</Box>
        </ListSubheader>
        <Divider />
        <ListItem disablePadding onClick={(e) => setOpenDrawer(false)}>
          <ListItemButton component="a" href="/">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>

        {/* <ListItem disablePadding onClick={(e) => setOpenDrawer(false)}>
          <ListItemButton component="a" href="/write">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Write" />
          </ListItemButton>
        </ListItem> */}
        {isAuthenticated() && (
          <Fragment>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="/categories/get-all-categories">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Categories" />
                {openCategory ? (
                  <ExpandLess onClick={handleCategoryClick} />
                ) : (
                  <ExpandMore onClick={handleCategoryClick} />
                )}
              </ListItemButton>
            </ListItem>
            <Collapse in={openCategory} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component="a"
                  href="/categories/add-category">
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Add Category" />
                </ListItemButton>
              </List>
            </Collapse>
          </Fragment>
        )}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Interview Q/A" />
            {openInterview ? (
              <ExpandLess onClick={handleInterviewClick} />
            ) : (
              <ExpandMore onClick={handleInterviewClick} />
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={openInterview} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              component="a"
              href="/interview-qa/js-interview-questions">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Core JavaScript" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              component="a"
              href="/interview-qa/react-js-interview-questions">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="React Js" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              component="a"
              href="/interview-qa/node-js-interview-questions">
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Node Js" />
            </ListItemButton>
          </List>
        </Collapse>

        {/* <ListItem disablePadding onClick={(e) => setOpenDrawer(false)}>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem> */}
        {isAuthenticated() && (
          <ListItem disablePadding onClick={(e) => setOpenDrawer(false)}>
            <ListItemButton component="a" href="/write">
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Create Post" />
            </ListItemButton>
          </ListItem>
        )}
        {!isAuthenticated() ? (
          <Fragment>
            <ListItem disablePadding onClick={(e) => setOpenDrawer(false)}>
              <ListItemButton component="a" href="/login">
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>

            {/* <ListItem disablePadding onClick={(e) => setOpenDrawer(false)}>
              <ListItemButton component="a" href="/auth/register">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Register" />
              </ListItemButton>
            </ListItem> */}
          </Fragment>
        ) : (
          <ListItem disablePadding onClick={(e) => setOpenDrawer(false)}>
            <ListItemButton
              component="a"
              onClick={() => {
                handleLogout();
              }}>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        )}
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch
              onChange={(e) => {
                setMode(mode === "light" ? "dark" : "light");
                setOpenDrawer(false);
              }}
              checked={mode === "light" ? false : true}
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}>
          <SocialMediaIcons />
        </Box>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
