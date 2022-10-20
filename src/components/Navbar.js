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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import SideDrawer from "./SideDrawer";
// import { isAuthenticated, logout } from "../Helpers/auth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import SideDrawer from "./SideDrawer";
import { useState } from "react";
import { isAuthenticated } from "../helpers/auth";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    width: "40%",
  },
}));

// const Icons = styled(Box)(({ theme }) => ({
//   display: "none",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: "15px",
//   [theme.breakpoints.up("sm")]: {
//     display: "flex",
//   },
// }));

const Navbar = ({ isAuth, setIsAuth, mode, setMode }) => {
  // const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      sessionStorage.clear();
      navigate("/login");
      setIsAuth(false);

      console.log("logged Out");
    });

    navigate("/");
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
            <InputBase placeholder="Search Itsindianguy" />
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
              variant="contained"
              color="secondary"
              onClick={() => {
                navigate("/");
              }}
              sx={{ width: "contained" }}>
              Home
            </Button>

            {isAuthenticated() && (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  navigate("/write");
                }}
                sx={{ width: "contained" }}>
                Write
              </Button>
            )}
            {!isAuthenticated() ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  navigate("/login");
                }}
                sx={{ width: "contained" }}>
                Login
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogout}
                sx={{ width: "contained" }}>
                Logout
              </Button>
            )}
          </Stack>
        </StyledToolbar>
        {/* <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onMouseOver={(e) => setOpen(true)}
          onMouseLeave={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}>
          <MenuItem component="a" href="/accounts/profile">
            Profile
          </MenuItem>
          <MenuItem>My account</MenuItem>

          {isAuthenticated() && (
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          )}
        </Menu> */}
      </AppBar>
    </>
  );
};

export default Navbar;
