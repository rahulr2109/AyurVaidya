import React from "react";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const UserEntry = ({ username, userprofile }) => {
  // console.log(userprofile);
  return (
    <HorizontalStack justifyContent="space-between" key={username}>
      <Link to={"/users/" + username} style={{ textDecoration: "none" }}>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5em" }}>

          <UserAvatar width={30} height={30} username={username} userProfile={userprofile} />
          <Typography sx={{ color: "black" }}>{username}</Typography>

        </Box>
      </Link>
      <Link to={"/users/" + username}>< FaArrowRight color="#1B1B1D" /></Link>
    </HorizontalStack>
  );
};

export default UserEntry;
