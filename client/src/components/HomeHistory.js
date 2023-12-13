import { Box, CssBaseline, Typography } from '@mui/material'
import React from 'react'
import { List } from '@mui/material'
import { ListItem } from '@mui/material'
import { ListItemButton } from '@mui/material'
import { ListItemIcon } from '@mui/material'
import { ListItemText } from '@mui/material'

const HomeHistory = () => {
    return (
        <Box style={{
            height: "85vh", backgroundColor: "#F5F5DC", overflowY: "scroll", overflowX: "hidden", borderRight: 1, borderColor: "divider"
        }}>



            <List sx={{ backgroundColor: "#F5F5DC", height: "100vh" }} >
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box >
    )
}

export default HomeHistory