import React from "react";
import Quiz from "../Quiz/Quiz";
import { Box } from "@mui/material";

const QuizMain = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <Quiz />
    </Box>
  );
};

export default QuizMain;
