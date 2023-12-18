import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import { Box } from '@mui/material';


const cardMain = () => {
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });
    return (
        <>




        </>
    )
}





const Documents = () => {

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    return (
        <>
            {/* <Box sx={{ height: "100vh", width: "100vw" }}>
                <PDFViewer style={{ height: "100%", width: "100%" }} > */}
            <Document>
                <Page size="A4" style={styles.page}>
                    {/* [0,1,2].map(()=>{ }) */}
                    hello
                </Page>
            </Document>
            {/* </PDFViewer>
            </Box> */}
        </>
    )
}

export default Documents