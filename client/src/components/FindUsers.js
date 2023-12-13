import {
  Avatar,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { RiRefreshFill } from "react-icons/ri";
import { MdRefresh } from "react-icons/md";
import { Link } from "react-router-dom";
import { getRandomUsers } from "../api/users";
import Loading from "./Loading";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";
import UserEntry from "./UserEntry";
import { SiGooglescholar } from "react-icons/si";

const FindUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);



  const fetchUsers = async () => {
    setLoading(true);
    const data = await getRandomUsers({ size: 5 });
    setLoading(false);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = () => {
    fetchUsers();
  };
  // console.log(users);

  return (
    <Card sx={{ backgroundColor: "#A3CB9A" }}>
      <Stack spacing={2} sx={{ padding: "10px" }}>
        <HorizontalStack justifyContent="space-between">
          <HorizontalStack>
            <SiGooglescholar />
            <Typography>See Scholars</Typography>
          </HorizontalStack>
          <IconButton
            sx={{ padding: 0 }}
            disabled={loading}
            onClick={handleClick}
          >
            <RiRefreshFill style={{ color: "#1B1B1D" }} />
          </IconButton>
        </HorizontalStack>

        <Divider />

        {loading ? (
          <Loading />
        ) : (
          users &&
          users.map((user) => (
            <UserEntry username={user.username} key={user.username} userprofile={user.profile} />

          ))
        )}
      </Stack>
    </Card>
  );
};

export default FindUsers;
