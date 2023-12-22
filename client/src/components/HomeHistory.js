import { Box, CssBaseline, Typography } from '@mui/material'
import React from 'react'
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { ListItemButton } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import { ListItemText } from '@mui/material'
import Moment from 'react-moment'
import { Stack } from '@mui/material'
import ResultModel from './ResultModel'


const HomeHistory = ({ data }) => {
    console.log(data);
    return (
        <Box style={{
            height: "80vh", backgroundColor: "#F5F5DC", overflowY: "scroll", overflowX: "hidden", borderRight: 1, borderColor: "divider"
        }}>



            <List sx={{ backgroundColor: "#F5F5DC", height: "80vh", justifyContent: "center", display: data.length ? "" : "flex", alignItems: "center" }} >
                {data.length === 0 && <Typography sx={{ color: "black", fontSize: "20px", }}>No History</Typography>}

                {data.map((newdata, index) => (
                    <ListItem key={index} disablePadding sx={{ borderBottom: 1, borderColor: "divider" }}>


                        <ResultModel finalData={newdata?.userData} isDarawer={true} text={newdata?.userData?.modern_name} mom={newdata.createdAt} id={newdata?._id} />


                    </ListItem>
                ))}
            </List>
        </Box >
    )
}

export default HomeHistory