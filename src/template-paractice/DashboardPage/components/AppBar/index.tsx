import { AppBarProps, styled } from "@mui/material"
import MuiAppBar from "@mui/material/AppBar"

const drawerWidth:number = 240

interface ParacticeAppBar extends AppBarProps {
    open?: boolean
}

const AppBar = styled( MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<ParacticeAppBar>(
    ({theme, open}) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
        })
    })
)

export {AppBar}