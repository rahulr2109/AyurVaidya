import React from "react";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const UserEntry = ({ username, userprofile }) => {
  // console.log(userprofile);
  return (
    <HorizontalStack justifyContent="space-between" key={username}>
      <HorizontalStack>
        <UserAvatar width={30} height={30} username={username} userProfile={userprofile} />
        <Typography>{username}</Typography>
      </HorizontalStack>
      <Link to={"/users/" + username}>View</Link>
    </HorizontalStack>
  );
};

export default UserEntry;
