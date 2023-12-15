import { Box, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { useContext } from 'react';
import { formResponseData } from './views/Home';
import { Button } from '@mui/material';
import { FaBackward } from "react-icons/fa";



const Card = ({ data }) => {

    return (
        <>
            {JSON.stringify(data)}


        </>
    )

}





const PredictionResults = ({ data }) => {
    const { setLoading1, setUserHistoryData, setTreatmentsData, setx, setDisease } = useContext(formResponseData);
    const deleteTreament = () => {
        setTreatmentsData([]);
        setDisease("")
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

export default PredictionResults