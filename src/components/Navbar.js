import { useNavigate } from "react-router-dom";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
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
import { useState } from "react";
import { isAuthenticated } from "../helpers/auth";
// import { ModeNight } from "@mui/icons-material";

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
    <>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}>
            <MenuIcon
              onClick={(e) => setOpenDrawer(true)}
              sx={{
                display: { xs: "block", sm: "none" },
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
            <Typography
              variant="h5"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={() => {
                navigate("/");
              }}>
              Itsindianguy
            </Typography>
          </Box>

          <Search>
            <InputBase
              name="search"
              id="search"
              color="success"
              placeholder="Search Itsindianguy"
            />
          </Search>

          {/* {!isAuthenticated() && ( */}
          <Stack
            spacing={2}
            direction="row"
            sx={{ display: { xs: "none", sm: "block" } }}>
            {/* <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                navigate("/auth/login");
              }}
              sx={{ width: "contained" }}>
              Login
            </Button>
            <Button
              onClick={() => {
                navigate("/auth/register");
              }}
              variant="outlined"
              color="secondary"
              sx={{ width: "contained" }}>
              Register
            </Button> */}

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
              onClick={handleClick}
              onMouseOver={handleClick}>
              Interview Q/A
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onRequestClose={handleRequestClose}
              // onChange={handleChange}
            >
              <MenuItem value={10} onClick={handleRequestClose}>
                JavaScript Interview Q/A (Coming Soon )
              </MenuItem>
              <MenuItem value={20} onClick={handleRequestClose}>
                JavaScript Interview Q/A (Coming Soon )
              </MenuItem>
              <MenuItem value={30} onClick={handleRequestClose}>
                JavaScript Interview Q/A (Coming Soon )
              </MenuItem>
            </Menu>

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
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
