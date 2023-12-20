import { useTheme } from "@emotion/react";
import {
  Avatar,
  IconButton,
  Stack,
  TextField,
  Typography,
  Button,

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
import { MdOutlineBatchPrediction } from "react-icons/md";
import { RiVoiceRecognitionLine } from "react-icons/ri";


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
          width: { lg: "75vw", md: "95vw", sm: "93vw", xs: "92vw" },
          height: { lg: "70px", md: "70px", sm: "50px", xs: "50px" },
          mt: "10px",
          borderRadius: "10px",
          backgroundColor: "secondary.main",
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

            color={"#0EA220 "}
          >
            {/* <Link to="/" color="inherit"> */}
            AyurVaidya
            {/* </Link> */}
          </Typography>
        </HorizontalStack>

        {!navbarWidth && (
          <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ flexGrow: 1, maxWidth: 500, mt: "0px", borderRadius: "5px", padding: "0 5px 0 5px", display: "flex", alignItems: "center", width: "300px", height: "50px" }}>

              <FaSearch style={{ color: "#0EA220", marginBottom: "4px", marginRight: "5px", height: '25px', width: "25px", cursor: "pointer" }} onClick={handleSubmit} />
              <TextField
                size="small"
                placeholder="Search ..."
                sx={{ flexGrow: 1, maxWidth: 500, mt: "0px" }}
                onChange={handleChange}
                value={search}
                variant="standard"
                fullWidth
              />

            </Box>
          </Box>
        )}

        <HorizontalStack>



          {/* home here */}


          {user ? (


            // { mobile && (
            //   <>
            //     <IconButton sx={{ color: "#0EA220" }} onClick={handleSearchIcon}>
            //       <AiOutlineSearch />
            //     </IconButton>
            //   </>
            // )}


            <>
              <IconButton sx={{ color: "#0EA220" }} onClick={() => navigate("/")}>
                <  AiFillHome />
              </IconButton>
              <IconButton sx={{ color: "#0EA220" }} component={Link} to={"/question"}>
                <FaQuestionCircle />
              </IconButton>
              <IconButton sx={{ color: "#0EA220" }} onClick={() => navigate("/prediction")}>
                < MdOutlineBatchPrediction />
              </IconButton>
              <IconButton sx={{ color: "#0EA220" }} component={Link} to={"/imagerecogntion"}>
                < RiVoiceRecognitionLine />
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
                        color: "#0EA220",

                      },
                    }}>Logout</Button>
                  </MenuItem>

                </Menu>

              </Box>

            </>
          ) : (
            <>
              <Link to={"/signup"}>
                <Button variant="text" sx={{ minWidth: 80, color: "#0EA220" }} >
                  Sign Up
                </Button>
              </Link>
              <Link to={"/login"}>
                <Button variant="text" sx={{
                  minWidth: 65, color: "#0EA220"
                }} href="/login">
                  Login
                </Button>
              </Link>
            </>
          )}
        </HorizontalStack>
      </Stack>
      {navbarWidth && searchIcon && (
        <Box sx={{ color: "#0EA220" }} component="form" onSubmit={handleSubmit} mt={2}>

          <TextField
            size="small"
            label="Search..."
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
