import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const CreatePost = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      size="medium"
      onClick={() => navigate("/posts/create")}
      sx={{
        gap: "0.1rem",
        whiteSpace: "nowrap",
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "1rem",
        // backgroundColor: "#65D6AA",
        borderColor: "primary.main",
        height: "100%",
        "&:hover": {
          backgroundColor: "primary.main",
          color: "#65D6AA",
        },
        color: "#65D6AA",
      }}
    >
      <AiOutlinePlus />
      <span>New Post</span>
    </Button>
  );
};

export default CreatePost;
