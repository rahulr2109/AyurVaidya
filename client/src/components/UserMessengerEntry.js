import {
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import UserAvatar from "./UserAvatar";

import moment from "moment";

const UserMessengerEntry = (props) => {
  const recipient = props.conversation.recipient;
  const username = recipient.username;
  const profile = recipient.profile;
  const expert = recipient.isExpert;
  const selected =
    props.conservant && props.conservant.username === recipient.username;

  const handleClick = () => {
    props.setConservant(recipient);
  };

  return (
    <>
      <MenuItem
        onClick={handleClick}
        sx={{ padding: 2 }}
        divider
        disableGutters
        selected={selected}
      >
        <ListItemAvatar>
          <UserAvatar height={45} width={45} username={username} userProfile={profile} expert={expert} />
        </ListItemAvatar>
        <ListItemText
          primary={username}

          sx={{ color: "#87AD3F" }}
        />
      </MenuItem>
    </>
  );
};

export default UserMessengerEntry;
// secondary={moment(props.conversation.lastMessageAt).fromNow()}