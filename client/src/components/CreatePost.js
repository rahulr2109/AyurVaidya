import { Button, Tooltip } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";


const CreatePost = () => {
  const navigate = useNavigate();
  return (
    <Tooltip title="Ask a Question" arrow>
      <Button
        variant="text"
        size="medium"
        onClick={() => navigate("/posts/create")}
        sx={{
          gap: "0.1rem",
          whiteSpace: "nowrap",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "0.5rem",
          backgroundColor: "#F5F5DC",
          color: "primary.main",
          height: "100%",

          "&:hover": {

            backgroundColor: "primary.main",
            color: "#F5F5DC",
          },

        }}
      >
        <AiOutlinePlus />
        <span>Ask a Question.</span>
      </Button>
    </Tooltip>
  );
};

export default CreatePost;
