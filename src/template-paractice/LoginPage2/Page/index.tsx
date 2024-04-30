
// https://mui.com/material-ui/getting-started/templates/sign-in-side/
// https://github.com/mui/material-ui/tree/v5.15.15/docs/data/material/getting-started/templates/sign-in-side

import { Box, Container, CssBaseline, Grid, Typography } from "@mui/material"

const LoginPage2 = () => {

    const boxSx = {
        width: 100,
        height: 100,
        backgroundColor:'#FF0000'
    }

    return (
        <>
            <CssBaseline />
                <Container component={'section'} maxWidth={'xs'}>
                    <Box sx={{display:'flex', flexDirection:'column', alignItems: 'conter'}} >
                        <Grid direction={'row'} container spacing={1} sx={{backgroundColor: '#FF00FF'}}>
                            <Grid item lg={20} xs={12} sx={{backgroundColor:'#FF0000'}}>
                                aaa
                            </Grid>
                            <Grid item lg={10} xs={6} sx={{backgroundColor:'#0FF0F0'}}>
                                bbb
                            </Grid>
                            <Grid item xs={6}>
                                CCC
                            </Grid>
                        </Grid>
                    </Box>

                </Container>
                {/*
            <Container component={'main'} maxWidth={'sm'} sx={{backgroundColor:'#00FF00'}}>
                <Box sx={boxSx}/>
                <Box
                    width={200} 
                    height={200} 
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    color={'red'} 
                    sx={{backgroundColor: '#0000FF'}}
                >
                    Box
                </Box>

                <Typography>
                    Todo Side by Side Login
                </Typography>
             </Container>
            */}
        </>

    )
}

export { LoginPage2 }