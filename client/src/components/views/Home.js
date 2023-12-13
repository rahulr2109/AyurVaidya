import { Avatar, Card, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import HomeDrawer from "../HomeDrawer";
import { Typography } from "@mui/material";
import { FaHistory } from "react-icons/fa";
import Logo from "../../Images/logo (2).png"
import HomeHistory from "../HomeHistory";
import Form from "../Form";


const Home = () => {
    const [width, setWindowWidth] = useState(0);
    const mobile = width < 800;
    useEffect(() => {
        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    };

    return (
        <Container>
            <Navbar />
            <Box>
                <Card sx={{ padding: 0 }}>
                    <Grid
                        container
                        sx={{ height: "calc(100vh - 110px)" }}
                        alignItems="stretch"
                    >
                        {!mobile ? (
                            <>
                                <Grid
                                    item
                                    xs={3}
                                    sx={{
                                        borderRight: 1,
                                        borderColor: "divider",
                                        height: "100%",

                                    }}
                                >
                                    <Box sx={{ height: "50px", borderBottom: 1, borderColor: "divider", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#3C3C3C" }}>
                                        <Typography
                                            color="inherit"
                                            edge="end"
                                            sx={{ gap: "8px", alignItems: "center", display: "flex" }}
                                        >
                                            <FaHistory style={{ height: "20px", width: "20px", color: "#7A9A41" }} />
                                            <Typography sx={{ color: "#86BB3D" }}>
                                                History
                                            </Typography>
                                        </Typography>

                                    </Box>
                                    <HomeHistory />

                                </Grid>

                                <Grid item xs={9} sx={{ height: "100%", borderBottom: 1, borderColor: "divider", }}>
                                    <Box sx={{ height: "50px", borderBottom: 1, borderColor: "divider", backgroundColor: "#2E4450" }} />


                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "30px", flexDirection: "column", gap: "1rem", }}>
                                        <Avatar src={Logo} alt="logo" style={{ height: "10%", width: "10%", borderRadius: "50%", aspectRatio: "3/2", border: "1px solid #8EBE3D" }} />
                                        <Typography sx={{ fontSize: "20px", fontWeight: "bold", color: "#8EBE3D" }}>Please select your symptoms!</Typography>

                                    </Box>
                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                        <Box sx={{ height: "auto", border: "1px solid black", width: "80%", mt: "2rem", borderRadius: "10px" }}>
                                            <Grid container sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", }}>
                                                <Form />
                                            </Grid>
                                        </Box>
                                    </Box>



                                </Grid>
                            </>
                        ) : (
                            <Grid
                                item
                                xs={12}
                                sx={{
                                    borderRight: 1,
                                    borderColor: "divider",
                                    height: "100%",

                                }}
                            >
                                <Box sx={{ height: "auto", background: "#3C3C3C" }}> <HomeDrawer /></Box>


                            </Grid>
                        )
                        }
                    </Grid>
                </Card>
            </Box>
        </Container >
    );
};

export default Home;
