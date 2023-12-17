import { Avatar, Card, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import HomeDrawer from "../HomeDrawer";
import { Typography } from "@mui/material";
import { FaHistory } from "react-icons/fa";
import Logo from "../../Images/logo (2).png";
import HomeHistory from "../HomeHistory";
import Form from "../Form";
import { createContext } from "react";
import { isLoggedIn } from "../../helpers/authHelper";
import { fetchUserHistoryData } from "../../api/Data";
import PredictionResults from "../PredictionResults";
import Loading from "../Loading";

export const formResponseData = createContext();

const Home = () => {
  const [width, setWindowWidth] = useState(0);
  const [userHistoryData, setUserHistoryData] = useState([]);
  const [treatmentsData, setTreatmentsData] = useState([]);
  const [Loading1, setLoading1] = useState(false);
  const [x, setx] = useState(true);

  const [disease, setDisease] = useState({
    Disease: [],
    Probability: [],
  });
  const [FormDataModel, setFormDataModel] = useState({
    Age: "",
    Gender: "",
    Severity: "",
    SelectedOptions: [],
  });
  // console.log(userHistoryData);
  // console.log(treatmentsData);
  // console.log(disease)

  // console.log(disease?.Disease.length)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserHistoryData(isLoggedIn());
        if (data?.size) {
          setUserHistoryData(data?.userHistory);
          // console.log(data?.userHistory);
        }
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    };
    fetchData();
  }, [x]);
  // console.log(disease)
  const mobile = width < 800;
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    setx(x + 1);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return (
    <formResponseData.Provider
      value={{
        setLoading1,
        setUserHistoryData,
        setTreatmentsData,
        setx,
        x,
        disease,
        setDisease,
        setFormDataModel,
        FormDataModel,
      }}
    >
      <Container>
        <Navbar />
        <Box>
          <Card sx={{ padding: 0, borderRadius: "10px" }}>
            <Grid
              container
              sx={{ height: "calc(100vh - 110px)" }}
              alignItems="stretch"
              overflowY="scroll"
            >
              {!mobile ? (
                <>
                  <Grid
                    item
                    xs={2.5}
                    sx={{
                      borderRight: 1,
                      borderColor: "divider",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        height: "70px",
                        borderBottom: 1,
                        borderColor: "divider",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#F5F5DC ",
                        overflowY: "scroll",
                      }}
                    >
                      <Typography
                        color="inherit"
                        edge="end"
                        sx={{
                          gap: "8px",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <FaHistory
                          style={{
                            height: "20px",
                            width: "20px",
                            color: "black",
                          }}
                        />
                        <Typography sx={{ color: "black" }}>History</Typography>
                      </Typography>
                    </Box>
                    <HomeHistory data={userHistoryData} />
                  </Grid>

                  <Grid
                    item
                    xs={9.5}
                    sx={{
                      height: "100%",
                      borderBottom: 1,
                      borderColor: "divider",
                      backgroundColor: "#bcd9b6 ",
                    }}
                  >
                    {disease?.Disease?.length !== 0 && !Loading1 && (
                      <>
                        <PredictionResults data={disease} />
                      </>
                    )}

                    {disease?.Disease.length === 0 && !Loading1 && (
                      <>
                        {" "}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mt: "30px",
                            flexDirection: "column",
                            gap: "1rem",
                          }}
                        >
                          <Avatar
                            src={Logo}
                            alt="logo"
                            style={{
                              height: "10%",
                              width: "10%",
                              borderRadius: "50%",
                              aspectRatio: "3/2",
                              border: "1px solid #168423",
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              color: "#168423",
                            }}
                          >
                            Fill the Details!
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              height: "auto",
                              width: "70%",
                              mt: "2rem",
                              borderRadius: "10px",
                            }}
                          >
                            <Grid
                              container
                              sx={{
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "20px",
                              }}
                            >
                              <Form />
                            </Grid>
                          </Box>
                        </Box>
                      </>
                    )}
                    {disease?.Disease.length === 0 && Loading1 && (
                      <Box
                        sx={{
                          height: "100%",
                          width: "100%",
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Loading />
                      </Box>
                    )}
                  </Grid>
                </>
              ) : (
                <Grid
                  item
                  xs={12}
                  sx={{
                    borderRight: 1,
                    borderColor: "divider",
                    minHeight: "80vh",
                    backgroundColor: "#BCD9B6",
                    color: "#3C3C3C",
                    height: "auto",
                    overflowY: "scroll",
                  }}
                >
                  <Box sx={{ height: "auto", background: "#F5F5DC" }}>
                    <HomeDrawer data={userHistoryData} />
                  </Box>

                  {disease.Disease.length !== 0 && !Loading1 && (
                    <>
                      <PredictionResults data={disease} />
                    </>
                  )}

                  {disease?.Disease.length === 0 && !Loading1 && (
                    <>
                      <Typography
                        sx={{
                          color: "#168423",
                          textAlign: "center",
                          fontSize: "20px",
                          fontWeight: "bold",
                          mt: "20px",
                        }}
                      >
                        Please select your symptoms!
                      </Typography>
                      <Box
                        sx={{
                          height: "auto",
                          padding: "20px",
                          mt: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                        <Form />
                      </Box>
                    </>
                  )}

                  {disease?.Disease.length === 0 && Loading1 && (
                    <Box
                      sx={{
                        height: "100%",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <Loading />
                    </Box>
                  )}
                </Grid>
              )}
            </Grid>
          </Card>
        </Box>
      </Container>
    </formResponseData.Provider>
  );
};

export default Home;
