import React from "react";
import { useContext } from "react";
import { formResponseData } from "./views/Home";
import { Button, Container, Typography } from "@mui/material";
import { FaBackward } from "react-icons/fa";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

// const Card = ({ data }) => {

//     return (
//         <Container>

// heelo

//         <Contaier/>
//     )

// }

// console.log(data);
const Card = ({ data }) => {

  const handleSubmit = () => { };


  return (
    <Container
      component={"form"}
      onSubmit={handleSubmit}
      to="/"
      className="card"
      sx={{
        display: "flex",
        // flexWrap: "wrap",
        // justifyContent: "center",
        alignItems: "center",
        width: { xs: "80%", md: "95%" },
        height: "200px",
        backgroundColor: "#f5f5dc",
        fontFamily: "monospace",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        transition: "all 0.3s ease-in-out",
        position: "relative",

        overflowY: "scroll",
        ":hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          //   opacity: "0.6",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <Typography variant="h5">Disease : { }</Typography>
          <Typography variant="h6">Probability : { }</Typography>
        </Box>

        <Button
          variant="contained"
          type="submit"
          color="success"
          sx={{ position: "absolute", bottom: "5px", right: "5px" }}
        >
          Go to Cure {">"}
        </Button>
      </Box>
    </Container>
  );
};

const PredictionResults = ({ data }) => {


  const { setLoading1, setUserHistoryData, setTreatmentsData, setx } = useContext(formResponseData);
  const deleteTreament = () => {
    setTreatmentsData([]);
    setx((x) => !x)
  }
  // console.log(data);
  return (
    <Box sx={{ width: "100%", height: "100%", overflowY: "scroll", position: "relative" }}>
      <Tooltip title="Go Back" placement="right" >
        <IconButton onClick={deleteTreament} sx={{ color: "black", position: "absolute", left: "10px", top: "10px" }}>
          <FaBackward style={{ borderRadius: "50%", border: "1px solid green", padding: "5px", height: "30px", width: "30px", color: "#2E4450" }} />
        </IconButton>
      </Tooltip>


      <Card data={data} />




    </ Box>
  )
}

export default PredictionResults;
