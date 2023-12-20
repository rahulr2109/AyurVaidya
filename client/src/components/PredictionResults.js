import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import { FaBackward } from "react-icons/fa";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import ResultModel from "./ResultModel";
import { useContext } from "react";
import { formResponseData } from "./views/Home";
import { getFormServer } from "../api/Data";
import { isLoggedIn } from "../helpers/authHelper";

const Card = ({ name, chance, data1 }) => {
  // const handleSubmit = () => { };
  const {
    setLoading1,
    setUserHistoryData,
    setTreatmentsData,
    setx,
    x,
    disease,
    setDisease,
    setFormDataModel,
    FormDataModel,
  } = useContext(formResponseData);
  const [Formulation, setFormulation] = React.useState({});

  React.useEffect(() => {
    const fetch = async () => {
      try {
        data1["Disease"] = name;
        // console.log(data);
        const res = await getFormServer(data1, isLoggedIn());
        if (res.success === "true") {
          // console.log(res)
          setFormulation(res.TreatRem);
          // handleClose()
          delete data1.Disease;
        }
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, []);

  return (
    <Container
      component={"form"}
      // onSubmit={handleSubmit}

      className="card"
      sx={{
        display: "flex",
        // flexWrap: "wrap",
        // justifyContent: "center",
        alignItems: "center",
        width: { xs: "85%", md: "95%" },
        height: "190px",
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
      <ResultModel finalData={Formulation} raw={data1} name={name} />
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "25px", md: "30px", sm: "20px", xs: "20px" },
              color: "secondary.main",
            }}
          >
            <strong>Disease</strong>: {name}
          </Typography>
          <Typography
            sx={{
              fontSize: { lg: "25px", md: "30px", sm: "20px", xs: "20px" },
              color: "primary.main",
            }}
          >
            <strong>Probability </strong>: {(chance * 100).toFixed(2)}%
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

const PredictionResults = ({ data }) => {
  const {
    setLoading1,
    setUserHistoryData,
    setTreatmentsData,
    setx,
    x,
    disease,
    setDisease,
    setFormDataModel,
    FormDataModel,
  } = useContext(formResponseData);

  const deleteTreament = () => {
    // setTreatmentsData();
    // console.log(data)
    setDisease({
      Disease: [],
      Probability: [],
    });
    setx((x) => !x);
  };
  // console.log(data.newData.Disease)
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        overflowY: "scroll",

        display: "flex",
        flexWrap: "wrap",
        // padding: "1rem",
        // paddingTop: "3.4rem",
      }}
    >
      {" "}
      <Box
        sx={{
          backgroundColor: "transaparent",
          height: "9%",
          width: "100%",
          position: "relative",
          mb: "20px",
        }}
      >
        <Tooltip title="Go Back" placement="right">
          <Button
            onClick={deleteTreament}
            sx={{
              color: "black",
              position: "absolute",
              left: "10px",
              top: "5px",
              border: "1px solid black",
            }}
            startIcon={
              <FaBackward
                style={{
                  borderRadius: "10%",
                  // border: "1px solid black",
                  padding: "5px",
                  height: "30px",
                  width: "30px",
                  color: "#2E4450",
                  // padding: "5px"
                }}
              />
            }
          >
            Back
          </Button>
        </Tooltip>
        {/* <Tooltip title="Download" placement="right">
          <Button
            sx={{
              color: "black",
              position: "absolute",
              right: "10px",
              top: "5px",
              border: "1px solid black",
            }}
            endIcon={
              <FaFileDownload
                style={{
                  borderRadius: "50%",
                  // border: "1px solid green",
                  padding: "5px",
                  height: "30px",
                  width: "30px",
                  color: "#2E4450",
                }}
              />
            }
          >
            download
          </Button>
        </Tooltip> */}
      </Box>
      {[0, 1, 2].map((item) => {
        return (
          <Card
            name={data?.Disease[item]}
            chance={data?.Probability[item]}
            data1={FormDataModel}
          />
        );
      })}
    </Box>
  );
};

export default PredictionResults;
