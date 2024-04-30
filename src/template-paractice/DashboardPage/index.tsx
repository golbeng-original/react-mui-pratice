
// https://mui.com/material-ui/getting-started/templates/dashboard/
// https://github.com/mui/material-ui/tree/v5.15.15/docs/data/material/getting-started/templates/dashboard

import { Badge, Box, createTheme, CssBaseline, IconButton, SxProps, Theme, ThemeProvider, Toolbar, Typography } from "@mui/material"
import { AppBar } from "./components/AppBar"
import { useState } from "react"

import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'

const mainContainerSx:SxProps<Theme> = {
    display: 'flex',
    border: '1px solid'
}

const defaultTheme = createTheme()

const DashBoardPage = () => {

    const [open, setOpen] = useState(false)

    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline />
                <AppBar position='absolute'>
                    <Toolbar sx={{paddingRight: '24px'}}>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && {
                                    display: 'none'
                                })
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                                component='h1'
                                variant='h6'
                                color='inherit'
                                noWrap
                                sx={{flexGrow: 1}}
                            >
                                Dashboard
                        </Typography>
                        <IconButton color='inherit'>
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}

export { DashBoardPage }