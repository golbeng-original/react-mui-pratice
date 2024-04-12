import { Box } from '@mui/material'
import { BasicButtons } from './ButtonComponents/basicButtons'
import { SxButtons } from './ButtonComponents/sxButtons'
const ButtonsPage = () => {

    return (
        <>
            <BasicButtons />
            <Box sx={{p:'2', bgcolor:'#FFFFFF', height:3}}/>
            <SxButtons />
        </>
    )
}

export default ButtonsPage