import { Avatar } from "@mui/material";
import React from "react";

const UserAvatar = ({ username, height, width, userProfile }) => {
  // console.log(userProfile);
  return (
    <Avatar
      sx={{
        height: height,
        width: width,
        backgroundColor: "lightgray",
      }}
      src={userProfile}
    />
  );
};

export default UserAvatar;
