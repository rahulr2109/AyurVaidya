import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";

function QuizResult(props) {
  const data = [
    {
      "Vata Dosha": {
        Lifestyle:
          "Establish a regular daily routine, prioritize calm and consistency",
        Diet: "Emphasize warm, grounding foods like cooked grains, root vegetables, and warm spices. Avoid excessive cold or raw foods.",
        Wellness:
          "Practice gentle and calming exercises like yoga or tai chi. Adequate rest and sleep are crucial.",
      },
    },
    {
      "Pitta Dosha": {
        Lifestyle:
          "Create a balanced routine with time for relaxation. Avoid excessive competition or stress.",
        Diet: "Choose cooling and hydrating foods like cucumber, mint, and coconut. Minimize spicy and acidic foods.",
        Wellness:
          "Engage in moderate, non-competitive physical activities. Meditation and mindfulness can help manage stress.",
      },
    },
    {
      "Kapha Dosha": {
        Lifestyle:
          "Encourage active and energetic habits, avoid excessive sedentary behavior.",
        Diet: "Favor warm, light, and spicy foods. Limit heavy and oily foods. Include a variety of colorful fruits and vegetables.",
        Wellness:
          "Regular, invigorating exercise is crucial. Stimulate the mind with new experiences. Incorporate dry brushing to invigorate circulation.",
      },
    },
  ];

  const renderDoshaDetails = (dosha) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "sm:30%  lg:50% xl:50% 2xl:50%",
          paddingX: "2rem",
        }}
      >
        <Typography variant="h4" align="justify">
          <strong>Lifestyle:</strong>
          {data[dosha][Object.keys(data[dosha])[0]]["Lifestyle"]}
        </Typography>
        <Typography variant="h4" align="justify">
          <strong>Diet:</strong>
          {data[dosha][Object.keys(data[dosha])[0]]["Diet"]}
        </Typography>
        <Typography variant="h4" align="justify">
          <strong>Wellness:</strong>
          {data[dosha][Object.keys(data[dosha])[0]]["Wellness"]}
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <Container>
        <Navbar />
        <Box
          sx={{
            backgroundColor: "#f5f5dc",
            borderRadius: "10px",
            padding: "2rem",
            marginTop: "2rem",
          }}
        >
          <Typography variant="h2" align="center">
            Your Prakriti
          </Typography>
          <Typography variant="h3" align="center">
            {props.score}
          </Typography>
          {props.score === "Vata" ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "3rem",
                padding: "1rem",
              }}
            >
              {renderDoshaDetails(0)}
            </Box>
          ) : props.score === "Pitta" ? (
            <Box>{renderDoshaDetails(1)}</Box>
          ) : props.score === "Kapha" ? (
            <Box>{renderDoshaDetails(2)}</Box>
          ) : (
            <Box>
              <Typography variant="h3" align="justify">
                Vata Dosha
              </Typography>
              {renderDoshaDetails(0)}
              <Typography variant="h3" align="justify">
                Pitta Dosha
              </Typography>
              {renderDoshaDetails(1)}
              <Typography variant="h3" align="justify">
                Kapha Dosha
              </Typography>
              {renderDoshaDetails(2)}
            </Box>
          )}
        </Box>
      </Container>
    </>
  );
}

export default QuizResult;
