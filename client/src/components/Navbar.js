import { useTheme } from "@emotion/react";
import {
  Avatar,
  IconButton,
  Stack,
  TextField,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "react-icons/ai";
import "react-icons/ri";
import {
  AiFillFileText,
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
  SearchIcon
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../helpers/authHelper";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";
import { RiContrast2Line } from "react-icons/ri";
import logo from "../Images/logo (2).png"
import { Tooltip } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
  const navigate = useNavigate();
  const user = isLoggedIn();
  // console.log(user);
  const theme = useTheme();
  const username = user && isLoggedIn().username;
  const [search, setSearch] = useState("");
  const [searchIcon, setSearchIcon] = useState(false);
  const [width, setWindowWidth] = useState(0);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const mobile = width < 500;
  const navbarWidth = width < 600;

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const handleLogout = async (e) => {
    logoutUser();
    navigate("/login");
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?" + new URLSearchParams({ search }));
  };

  const handleSearchIcon = (e) => {
    setSearchIcon(!searchIcon);
  };

  return (
    <Stack mb={2}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          width: { lg: "75vw", md: "80vw", sm: "93vw", xs: "93vw" },
          height: { lg: "70px", md: "70px", sm: "50px", xs: "50px" },
          mt: "10px",
          borderRadius: "10px",
          backgroundColor: "#3C3C3C ",
          padding: "0px 30px 0px 30px",

        }}
        spacing={!mobile ? 2 : 0}

      >
        <HorizontalStack>
          <Avatar src={logo}
            size={33}
            color={theme.palette.primary.main}
            onClick={() => navigate("/")}

          />
          <Typography
            sx={{ display: mobile ? "none" : "block", fontWeight: "bold", mb: "5px" }}
            variant={navbarWidth ? "h6" : "h5"}
            mr={1}

            color={"#86BB3D "}
          >
            {/* <Link to="/" color="inherit"> */}
            AyurVaidya
            {/* </Link> */}
          </Typography>
        </HorizontalStack>

        {!navbarWidth && (
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 1, maxWidth: 400, mt: "0px", border: "0.1px solid #88BA44", borderRadius: "5px", padding: "0 5px 0 5px", display: "flex", alignItems: "center" }}>

              <FaSearch style={{ color: "#86BB3D", marginBottom: "4px", marginRight: "5px", height: '20px', cursor: "pointer" }} onClick={handleSubmit} />
              <TextField
                size="small"
                placeholder="Search...."
                sx={{ flexGrow: 1, maxWidth: 400, mt: "0px" }}
                onChange={handleChange}
                value={search}
                variant="standard"
                fullWidth
              />

            </Box>
          </Box>
        )}

        <HorizontalStack>
          {mobile && (
            <IconButton sx={{ color: "#86BB3D" }} onClick={handleSearchIcon}>
              <AiOutlineSearch />
            </IconButton>
          )}

          <IconButton sx={{ color: "#86BB3D" }} onClick={() => navigate("/")}>
            <AiFillHome />
          </IconButton>
          {/* home here */}

          <IconButton sx={{ color: "#86BB3D" }} component={Link} to={"/question"}>
            <FaQuestionCircle />
          </IconButton>
          {user ? (
            <>
              <IconButton sx={{ color: "#86BB3D" }} component={Link} to={"/messenger"}>
                <AiFillMessage />
              </IconButton>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <UserAvatar width={30} height={30} username={user.username} userProfile={user.profile} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>

                    <Link to={"/users/" + username} style={{ textDecoration: "none", color: "black" }}> Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>

                    <Button onClick={handleLogout} variant="contained" sx={{
                      height: "40px",
                      width: "60px",
                      "&:hover": {
                        backgroundColor: "#343435",
                        color: "#86BB3D",

                      },
                    }}>Logout</Button>
                  </MenuItem>

                </Menu>
              </Box>

            </>
          ) : (
            <>
              <Link to={"/signup"}>
                <Button variant="text" sx={{ minWidth: 80, color: "#86BB3D" }} >
                  Sign Up
                </Button>
              </Link>
              <Link to={"/login"}>
                <Button variant="text" sx={{
                  minWidth: 65, color: "#86BB3D"
                }} href="/login">
                  Login
                </Button>
              </Link>
            </>
          )}
        </HorizontalStack>
      </Stack>
      {navbarWidth && searchIcon && (
        <Box sx={{ color: "#86BB3D" }} component="form" onSubmit={handleSubmit} mt={2}>

          <TextField
            size="small"
            label="Search for posts..."
            fullWidth
            onChange={handleChange}
            value={search}

          />

        </Box>
      )}

    </Stack>
  );
};

export default Navbar;
