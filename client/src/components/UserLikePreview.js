import { Avatar, AvatarGroup, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import HorizontalStack from "./util/HorizontalStack";
import { AiFillLike } from "react-icons/ai";
import UserLikeModal from "./UserLikeModal";
import { getUser } from "../api/users";
import { FaArrowAltCircleUp } from "react-icons/fa";

const UserLikePreview = ({ postId, userLikePreview }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setOpen(true);
  };
  console.log(userLikePreview);

  // getUser(userLikePreview);


  let userLikes;
  if (userLikePreview) {
    userLikes = userLikePreview.slice(0, 3);
  }

  return (
    userLikes && (
      <>
        <Button
          variant="outlined"
          size="small"
          startIcon={<FaArrowAltCircleUp />}
          color="primary"
          onClick={handleClick}
        >
          <HorizontalStack>
            <AvatarGroup>
              {userLikes &&
                userLikes.map((userLike) => (
                  <Avatar
                    src={userLike.profile}
                    sx={{ backgroundColor: "lightgray", width: 30, height: 30 }}
                    key={userLike._id}
                  />
                ))}
            </AvatarGroup>
          </HorizontalStack>
        </Button>
        {open && (
          <UserLikeModal open={open} setOpen={setOpen} postId={postId} />
        )}
      </>
    )
  );
};

export default UserLikePreview;
