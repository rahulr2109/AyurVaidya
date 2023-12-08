import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { BiNoEntry } from "react-icons/bi";
import HorizontalStack from "./util/HorizontalStack";

const SortBySelect = ({ onSortBy, sortBy, sorts }) => {
  return (
    <HorizontalStack spacing={1}>

      <Select
        size="small"
        value={sorts[sortBy]}
        sx={{ minWidth: 150, padding: "5px", backgroundColor: "#65D6AA" }}
        onChange={onSortBy}
      >
        {Object.keys(sorts).map((sortName, i) => (
          <MenuItem value={sorts[sortName]} key={i}>
            {sorts[sortName]}
          </MenuItem>
        ))}
      </Select>
    </HorizontalStack>
  );
};

export default SortBySelect;
