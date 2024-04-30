
import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { Button, Container, createTheme, Stack, StyledEngineProvider, ThemeProvider, Typography } from '@mui/material';


const defaultTheme = createTheme()

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

export function GridPage() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{flexGrow: 1, backgroundColor: '#0000FF'}}>
                <Grid container spacing={2} minWidth={'xs'} >
                  <Grid xs={8} sm={12}>
                    <Item>xs=8</Item>
                  </Grid>
                  <Grid xs={4} lg={12}>
                    <Item>xs=4</Item>
                  </Grid>
                  <Grid xs={4}>
                    <Item>xs=4</Item>
                  </Grid>
                  <Grid xs={8}>
                    <Item>xs=8</Item>
                  </Grid>
                </Grid>
            </Box>
            <Container sx={{mt: 3}}>
                <Typography>with useFlexGap</Typography>
                <Stack spacing={1} direction={'row'} useFlexGap gap={2} justifyContent={'space-between'}>
                    <Button variant='contained'>
                        button1
                    </Button>
                    <Button variant='contained'>
                        button2
                    </Button>
                    <Button variant='contained'>
                        button3
                    </Button>
                    <Button variant='contained'>
                        button4
                    </Button>
                    <Button variant='contained'>
                        button5
                    </Button>
                </Stack>

                <Typography sx={{mt:4}}>without useFlexGap</Typography>
                <Stack spacing={1} direction={'row'} gap={2} justifyContent={'space-between'}>
                    <Button variant='contained'>
                        button1
                    </Button>
                    <Button variant='contained'>
                        button2
                    </Button>
                    <Button variant='contained'>
                        button3
                    </Button>
                    <Button variant='contained'>
                        button4
                    </Button>
                    <Button variant='contained'>
                        button5
                    </Button>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}


/*
export const GridPage = () => {
    
    const containeSx:SxProps<Theme> = {
        backgroundColor:'#0000FF',
        flexGrow:1
    }

    const gridSx:SxProps<Theme> = {
        border: '1px solid',
        borderColor: '#000000',
        borderRadius: '10px',
    }
    
    return (
        <Box component={'body'} sx={containeSx}>
            <Grid container spacing={2}>
                <Grid sx={gridSx}>
                    <Typography>1</Typography>
                </Grid>
                <Grid sx={gridSx}>
                    <Typography>2</Typography>
                </Grid>
                <Grid sx={gridSx}>
                    <Typography>3</Typography>
                </Grid>
                <Grid sx={gridSx}>
                    <Typography>4</Typography>
                </Grid>
                <Grid sx={gridSx}>
                    <Typography>5</Typography>
                </Grid>
                <Grid sx={gridSx}>
                    <Typography>6</Typography>
                </Grid>
                <Grid sx={gridSx}>
                    <Typography>7</Typography>
                </Grid>
            </Grid>
        </Box>

    )
}
*/