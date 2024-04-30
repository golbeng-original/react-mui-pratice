import { Box, CssBaseline, Grid, SxProps, Theme } from "@mui/material"

const ColorBox = () => {

    const boxSx:SxProps<Theme> = {
        backgroundColor: '#FF0000',
        display: 'block',
        width: '100%'
        //display: 'block'
        //width: 100,
        //height: 100
    }

    return (
        <Box sx={boxSx}>11</Box>
    )
}

export const BasicGrid = () => {

    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={20} md={8}>
                    <ColorBox />
                </Grid>
                <Grid item xs={20} md={4}>
                    <ColorBox />
                </Grid>
                <Grid item xs={20} md={4}>
                    <ColorBox />
                </Grid>
                <Grid item xs={20} md={8}>
                    <ColorBox />
                </Grid>
            </Grid>
        </Box>
    )
}