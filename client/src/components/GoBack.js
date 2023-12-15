import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Tooltip } from "@mui/material";
import { FaBackward } from "react-icons/fa";
import { IconButton } from "@mui/material";

const GoBack = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Tooltip title="Go Back" placement="right" >
        <IconButton component={Link} to="/question" sx={{ color: "black", left: "10px", top: "10px" }}>
          <FaBackward style={{ borderRadius: "50%", border: "1px solid green", padding: "5px", height: "40px", width: "40px", color: "#2E4450" }} />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default GoBack;

