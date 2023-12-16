import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Moment from 'react-moment';


import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { FiMenu } from "react-icons/fi";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { Stack } from '@mui/material';
import { useContext } from 'react';
import { formResponseData } from './views/Home';
import ResultModel from './ResultModel';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),


    }),
);



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function HomeDrawer({ data }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    // const { setLoading1, setUserHistoryData, setTreatmentsData, setx } = useContext(formResponseData);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    // console.log(data);



    return (
        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <CssBaseline />

            <Toolbar>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: 'none' }), display: { lg: "none", md: "none", ms: "flex", xs: "flex", gap: "8px", alignItems: "center" }, ml: "20px" }}
                >
                    <FaHistory style={{ height: "20px", width: "20px", color: "#7A9A41" }} /> <Typography sx={{ color: "#86BB3D" }}>History</Typography>
                </IconButton>
            </Toolbar>


            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                    height: "30px",


                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader sx={{ backgroundColor: "#F5F5DC" }}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <FaChevronLeft /> : < FaChevronRight />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List sx={{ backgroundColor: "#F5F5DC", height: "100vh", justifyContent: "center", display: data.length ? "" : "flex", alignItems: "center" }} >
                    {data.length === 0 && <Typography sx={{ color: "black", fontSize: "20px", }}>No History</Typography>}
                    {data.map((newdata, index) => (
                        <ListItem key={index} disablePadding sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <ResultModel finalData={newdata?.userData} isDarawer={true} text={newdata?.userData?.modern_name} mom={newdata.createdAt} />
                        </ListItem>
                    ))}
                </List>
                <Divider />

            </Drawer>
        </Box>
    );
}