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
                <Card sx={{ padding: 0, borderRadius: "10px" }}>
                    <Grid
                        container
                        sx={{ height: "calc(100vh - 110px)" }}
                        alignItems="stretch"

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
                                    <Box sx={{ height: "70px", borderBottom: 1, borderColor: "divider", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5DC ", overflowY: "scroll" }}>
                                        <Typography
                                            color="inherit"
                                            edge="end"
                                            sx={{ gap: "8px", alignItems: "center", display: "flex" }}
                                        >
                                            <FaHistory style={{ height: "20px", width: "20px", color: "black" }} />
                                            <Typography sx={{ color: "black" }}>
                                                History
                                            </Typography>
                                        </Typography>

                                    </Box>
                                    <HomeHistory />

                                </Grid>

                                <Grid item xs={9.5} sx={{ height: "100%", borderBottom: 1, borderColor: "divider", backgroundColor: "#bcd9b6 " }}>



                                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: "30px", flexDirection: "column", gap: "1rem", }}>
                                        <Avatar src={Logo} alt="logo" style={{ height: "10%", width: "10%", borderRadius: "50%", aspectRatio: "3/2", border: "1px solid #168423" }} />
                                        <Typography sx={{ fontSize: "20px", fontWeight: "bold", color: "#168423" }}>Fill the Details!</Typography>

                                    </Box>
                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                        <Box sx={{ height: "auto", border: 1, width: "70%", mt: "2rem", borderRadius: "10px" }}>
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
                                    height: "90vh",
                                    backgroundColor: "#BCD9B6", color: "#3C3C3C",

                                }}
                            >
                                <Box sx={{ height: "auto", background: "#F5F5DC" }}>
                                    <HomeDrawer />

                                </Box>

                                <Typography sx={{ color: "#168423", textAlign: "center", fontSize: "20px", fontWeight: "bold", mt: "20px" }}>Please select your symptoms!</Typography>


                                <Box sx={{ height: "auto", padding: "20px", mt: "20px", display: "flex", alignItems: "center" }}>     <Form />
                                </Box>



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
