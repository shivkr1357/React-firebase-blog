import { useNavigate } from "react-router-dom";
import {
  AppBar,
  styled,
  Toolbar,
  Box,
  InputBase,
  Button,
  Stack,
  MenuItem,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import SideDrawer from "./SideDrawer";
import { Fragment, useState } from "react";
import { isAuthenticated } from "../helpers/auth";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  "::-webkit-input-placeholder": {
    color: "white",
  },
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
}));

const Navbar = ({ setIsAuth, mode, setMode }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/login");
      setIsAuth(false);
    });

    navigate("/");
  };

  const handleClick = (e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleRequestClose = (e) => {
    setOpen(false);
  };

  return (
    <Fragment>
      <SideDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        mode={mode}
        setMode={setMode}
      />
      <AppBar
        position="sticky"
        sx={{
          "background-image": "linear-gradient(to right, #00395d, #8f8f8c)",
        }}>
        <StyledToolbar>
          <Stack
            spacing={2}
            direction="row"
            sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              variant="text"
              sx={{
                width: "contained",
                cursor: "pointer",
                color: "white",
                fontWeight: 600,
              }}
              onClose={handleRequestClose}
              aria-owns={open ? "simple-menu" : null}
              aria-haspopup="true"
              onClick={handleClick}>
              Interview Q/A{" "}
              {open ? (
                <ExpandLess onClick={handleClick} />
              ) : (
                <ExpandMore onClick={handleClick} />
              )}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleRequestClose}
              // onChange={handleChange}
            >
              <MenuItem
                value={10}
                onClick={() => {
                  setOpen(false);
                  navigate("/interview-qa/js-interview-questions");
                  window.scrollTo(0, 0);
                }}>
                JavaScript Interview Q/A
              </MenuItem>
              <MenuItem
                value={20}
                onClick={() => {
                  setOpen(false);
                  navigate("/interview-qa/react-js-interview-questions");
                  window.scrollTo(0, 0);
                }}>
                React Js Interview Q/A
              </MenuItem>
              <MenuItem
                value=""
                onClick={() => {
                  setOpen(false);
                  navigate("/interview-qa/node-js-interview-questions");
                  window.scrollTo(0, 0);
                }}>
                Node Js Interview Q/A
              </MenuItem>
            </Menu>
            {isAuthenticated() && (
              <Button
                variant="text"
                onClick={() => {
                  navigate("/admin/categories");
                }}
                sx={{
                  width: "contained",
                  cursor: "pointer",
                  color: "white",
                  fontWeight: 600,
                }}>
                Categories
              </Button>
            )}

            <Button
              variant="text"
              onClick={() => {
                navigate("/blog");
              }}
              sx={{
                width: "contained",
                cursor: "pointer",
                color: "white",
                fontWeight: 600,
              }}>
              Blog
            </Button>

            {isAuthenticated() && (
              <Button
                variant="text"
                onClick={() => {
                  navigate("/write");
                  window.scrollTo(0, 0);
                }}
                sx={{
                  width: "contained",
                  cursor: "pointer",
                  color: "white",
                  fontWeight: 600,
                }}>
                Write
              </Button>
            )}
            {!isAuthenticated() ? (
              <Button
                variant="text"
                onClick={() => {
                  navigate("/login");
                  window.scrollTo(0, 0);
                }}
                sx={{
                  width: "contained",
                  cursor: "pointer",
                  color: "white",
                  fontWeight: 600,
                }}>
                Login
              </Button>
            ) : (
              <Button
                variant="text"
                onClick={handleLogout}
                sx={{
                  width: "contained",
                  cursor: "pointer",
                  color: "white",
                  fontWeight: 600,
                }}>
                Logout
              </Button>
            )}
          </Stack>

          <Search sx={{ display: { xs: "none", sm: "block" } }}>
            <InputBase
              name="search"
              id="search"
              color="success"
              placeholder="Search Itsindianguy ( Coming Soon ) "
            />
          </Search>

          {/* {!isAuthenticated() && ( */}
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              display: { xs: "flex", sm: "none" },
            }}>
            <MenuIcon
              onClick={(e) => setOpenDrawer(true)}
              sx={{
                display: { xs: "block", sm: "none" },
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
          </Box>
          <img
            src="/newLogo.png"
            alt="Logo"
            style={{
              margin: 0,
              padding: 0,
              width: { xs: "5px", sm: "20px", md: "50px" },
              height: "50px",
              objectFit: "cover",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              borderRadius: "50%",
            }}
            onClick={() => {
              navigate("/");
            }}
          />
        </StyledToolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
