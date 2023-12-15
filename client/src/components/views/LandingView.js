import React from 'react'
import Navbar from '../Navbar'

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { Box } from '@mui/material';
import Documents from '../Documents';
import bg from "../../Images/newbg.png"


import { Container, Typography, Button } from '@mui/material';

const LandingView = () => {
    return (
        <Container >
            <Navbar />
            <>
                <Container sx={{ height: "85vh", border: "1px solid black", backgroundColor: bg }}>

                </Container>
            </>


        </Container >
    );
}

export default LandingView