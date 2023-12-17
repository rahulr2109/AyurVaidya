import React from "react";
import Navbar from "../Navbar";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { Box } from "@mui/material";
import Documents from "../Documents";
import bg from "../../Images/newbg.png";
import homelogo from "../../Images/home.jpeg";
import { Container, Typography, Button } from "@mui/material";
import { isLoggedIn } from "../../helpers/authHelper";
import Quiz from "./Quiz";
import { Link } from "react-router-dom";


const img =
    "https://media.istockphoto.com/id/1160620218/photo/beautiful-nature-background-from-green-leaves-with-detailed-texture-greenery-top-view-closeup.jpg?s=612x612&w=0&k=20&c=hiwAxq9f9WD7dEw8SCckV6CJg0RHvqRo4mgbHA_g9Qo=";

console.log(isLoggedIn())

const LandingView = () => {
    return (
        <Container>
            <Navbar />
            <>
                <Box
                    sx={{
                        height: "auto",
                        borderRadius: "10px",
                        minHeight: "85vh",
                        // border: 1,
                    }}
                >
                    <Box
                        className="blurred-box"
                        sx={{
                            height: "auto",
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            flexDirection: "column",
                            // backgroundColor: "#BCD9B6",
                            minHeight: { lg: "70vh", md: "60vh", sm: "55vh", xs: "55vh" },
                            backgroundSize: "cover",
                            backgroundOrigin: "content-box",
                            backgroundPosition: "center",
                        }}
                    >
                        <img
                            class="background-image"
                            src={img}
                            alt="Blurred Background"
                        />
                        <Typography
                            className="content"
                            sx={{
                                fontSize: {
                                    lg: "70px",
                                    md: "50px",
                                    sm: "40px",
                                    xs: "37px",
                                    textAlign: "center",
                                    wordWrap: "break-word",
                                    padding: "10px",
                                },
                            }}
                        >
                            <strong style={{ color: "#F5F5DC" }}>Predict</strong>{" "}
                            <strong style={{ color: "#F5F5DC" }}>Connect</strong>{" "}
                            <strong> Recognize</strong>
                        </Typography>
                        <Typography
                            className="content"
                            sx={{
                                fontSize: {
                                    lg: "45px",
                                    md: "35px",
                                    sm: "30px",
                                    xs: "30px",
                                    textAlign: "center",
                                    width: "100%",
                                },
                            }}
                        >
                            Your Ayurvedic Ecosystem
                        </Typography>
                        <Typography
                            className="content"
                            sx={{
                                fontSize: {
                                    lg: "45px",
                                    md: "35px",
                                    sm: "35px",
                                    xs: "35px",
                                    textAlign: "center",
                                    width: "50%",
                                },
                            }}
                        >
                            Awaits.
                        </Typography>
                        <Box sx={{ mt: "30px", gap: "10px", display: "flex" }}>
                            {isLoggedIn()?.username ? <>
                                <Button variant="contained" sx={{ color: "primary.main", backgroundColor: "secondary.main", width: { lg: "140px", md: "140px", sm: "120px", xs: "100px" }, ":hover": { color: "secondary.main", backgroundColor: "primary.main", boxShadow: "0px 10px 10px rgba(0, 0, 0.1, 0.1)" } }}>Explore</Button>


                            </> : <>
                                <Button variant="outlined" sx={{ color: "primary.main", backgroundColor: "secondary.main", width: { lg: "120px", md: "30px", sm: "30px", xs: "30px" }, ":hover": { color: "secondary.main", backgroundColor: "primary.main", boxShadow: "0px 10px 10px rgba(0, 0, 0.1, 0.1)" } }}>Login</Button>
                                <Button variant="outlined" sx={{
                                    backgroundColor: "primary.main", color: "secondary.main", width: { lg: "120px", md: "30px", sm: "30px", xs: "30px" }
                                }}>Signup</Button>

                            </>}

                        </Box>
                    </Box>
                    <Box>
                        <Link to={"dosha"}>hello</Link>
                    </Box>
                </Box>
            </>
        </Container>
    );
};

export default LandingView;
