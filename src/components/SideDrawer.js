import React from "react";

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
} from "@mui/material";
import {
  //   AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  // Person,
  //   Settings,
  Storefront,
  Close,
} from "@mui/icons-material";
import SocialMediaIcons from "./SocialMediaIcons";
import { isAuthenticated } from "../helpers/auth";

const SideDrawer = ({ openDrawer, setOpenDrawer, mode, setMode }) => {
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
        <ListItem disablePadding onClick={(e) => setOpenDrawer(false)}>
          <ListItemButton component="a" href="/write">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Write" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={(e) => setOpenDrawer(false)}>
          <ListItemButton
            component="a"
            href="/interview-qa/react-js-interview-questions">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="React Js Interview Q/A" />
          </ListItemButton>
        </ListItem>
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
        {!isAuthenticated() && (
          <>
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
          </>
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
