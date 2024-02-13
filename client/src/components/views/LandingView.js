import React from "react";
import Navbar from "../Navbar";
import { Box } from "@mui/material";
import { Container, Typography, Button } from "@mui/material";
import { isLoggedIn } from "../../helpers/authHelper";
// import Quiz from "./Quiz";
import { Link, useNavigate } from "react-router-dom";
// import image from "../../Images/image.png"s
import searchIcon from "../../Images/searchIcons.jpg"
import question from "../../Images/question.png"
import ml from "../../Images/machine-learning-colorful-round-vector-line-illustration-dark-background_104589-1784-removebg-preview.png"
import { Grid } from "@mui/material";


const featureData = [
    {
        label: "Recognition of herbs and plants using Machine Learning",
        // img: searchIcon,
        // bg: "#469C45",
        colo: "white",
        // rout: "imagerecogntion"
    },
    {
        label: "Prediction of disease and its cure ",
        img: ml,
        // bg: "#467c45",
        colo: "white",
        // rout: "predict"
    },
    {
        label: "Buid communities with our servies",
        img: question,
        // bg: "#468c45",
        // colo: "white",
        // rout: "question"
    }
]
// console.log(i);
// < Features bag={featureData[i].bg} col={featureData[i].colo} imgg={featureData[i].img} labela={featureData[i].label} routes={featureData[i].rout} />


const Features = ({ labela, imgg, bag, col, routes }) => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ border: 1, borderRadius: "10px", backgroundColor: "#469C45" }}>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", minHeight: "25vh", width: "100%", flexDirection: "column", paddingBottom: "20px" }}>
                    <Typography > {labela}</Typography>
                    <Button variant="contained" onClick={() => navigate(`/${routes}`)} sx={{
                        backgroundColor: `${bag}`, color: `${col}`,
                        width: { lg: "30%", md: "40%", sm: "50%", xs: "60%" },
                        transition: "all 0.2s ease-in-out",
                        ":hover": {
                            backgroundColor: `${col}`,
                            color: `${bag}`,
                            boxShadow: "0px 10px 10px rgba(0, 0, 0.1, 0.1)",

                        }
                    }}>See details</Button>

                </Box>

            </Box>

        </>


    )
}




const NewCard = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ borderRadius: "10px", backgroundColor: "#469C45" }}>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", minHeight: "25vh", width: "100%", flexDirection: "column", paddingBottom: "20px" }}>

                <Typography sx={{ width: "100%", fontSize: "30px", flex: 3, padding: { lg: "10px", md: "5px", sm: "5px", xs: "5px", textAlign: "center" } }}>Take a Quiz to know About your body's <strong style={{ color: "white" }}>Prakriti</strong>.</Typography>
                {/* <Typography sx={{ fontSize: "20px", fontWeight: "bold", flex: 1 }}>Take a Quiz to know About your body's Prakriti</Typography> */}

                <Button variant="contained" onClick={() => navigate('/dosha')} sx={{
                    backgroundColor: "secondary.main", color: "primary.main",
                    width: { lg: "30%", md: "40%", sm: "50%", xs: "60%" },

                    transition: "all 0.2s ease-in-out",
                    ":hover": {


                        backgroundColor: "primary.main",
                        color: "secondary.main",
                        boxShadow: "0px 10px 10px rgba(0, 0, 0.1, 0.1)",

                    }
                }}>Take Quiz</Button>

            </Box>

        </Box>
    )
}





const img =
    "https://media.istockphoto.com/id/1160620218/photo/beautiful-nature-background-from-green-leaves-with-detailed-texture-greenery-top-view-closeup.jpg?s=612x612&w=0&k=20&c=hiwAxq9f9WD7dEw8SCckV6CJg0RHvqRo4mgbHA_g9Qo=";



const LandingView = () => {
    const navigate = useNavigate();

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
                        overflowY: "scroll",
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
                            paddingBottom: "10px",
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
                        <Box sx={{ mt: { lg: "30px", md: "10px", sm: "10px", xs: "10px" }, gap: "10px", display: "flex" }}>
                            {isLoggedIn()?.username ? (
                                <>
                                    <Button
                                        onClick={() => navigate("/dosha")}
                                        variant="contained"
                                        sx={{
                                            color: "primary.main",

                                            backgroundColor: "secondary.main",
                                            width: {
                                                lg: "140px",
                                                md: "140px",
                                                sm: "120px",
                                                xs: "100px",
                                            },
                                            ":hover": {
                                                color: "secondary.main",
                                                backgroundColor: "primary.main",
                                                boxShadow: "0px 10px 10px rgba(0, 0, 0.1, 0.1)",
                                            },
                                        }}
                                    >
                                        Explore
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        variant="outlined"
                                        onClick={() => navigate("/login")}
                                        sx={{
                                            color: "primary.main",
                                            backgroundColor: "secondary.main",
                                            width: {
                                                lg: "120px",
                                                md: "30px",
                                                sm: "30px",
                                                xs: "30px",
                                            },
                                            ":hover": {
                                                color: "secondary.main",
                                                backgroundColor: "primary.main",
                                                boxShadow: "0px 10px 10px rgba(0, 0, 0.1, 0.1)",
                                            },
                                        }}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        onClick={() => navigate("/signup")}
                                        sx={{
                                            backgroundColor: "primary.main",
                                            color: "secondary.main",
                                            width: {
                                                lg: "120px",
                                                md: "30px",
                                                sm: "30px",
                                                xs: "30px",
                                            },
                                        }}
                                    >
                                        Signup
                                    </Button>
                                </>
                            )}
                        </Box>
                    </Box>
                    <Box className="Section2" sx={{ width: "100%", minHeight: "20%", mt: "10px", mb: "10px" }}>
                        <NewCard />
                    </Box>
                    <Box className="featureBox" sx={{ height: "auto" }}>
                        {
                            [0, 1, 2].map((i) => {
                                console.log(i);
                                < Features bag={featureData[i].bg} col={featureData[i].colo} imgg={featureData[i].img} labela={featureData[i].label} routes={featureData[i].rout} />
                            })
                        }
                    </Box>







                </Box>

            </>
        </Container >
    );
};

export default LandingView;
