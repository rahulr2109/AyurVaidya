import React from 'react'
import HomeDrawer from './HomeDrawer'
import { Card } from '@mui/material'
import HorizontalStack from './util/HorizontalStack'
import { Box } from '@mui/material'
import HomeMainContainer from './HomeMainContainer'
import ReactDOM from 'react-dom';


const HomePanel = () => {
    return (<>
        <Card sx={{ background: "#2E4450", display: { lg: "none", md: "none", sm: "block", xs: 'block' } }}>
            <HorizontalStack justifyContent="space-between"   >
                <Box sx={{ height: "50px" }}>
                    <HomeDrawer />
                </Box>
            </HorizontalStack>
        </Card>
        <HomeMainContainer />



    </>


    )
}

export default HomePanel