import { Box, Container, createTheme, CssBaseline, Paper, Stack, styled } from "@mui/material"
import { purple } from "@mui/material/colors"

const ColumnItem = styled(Paper)(({theme}) => (
    {
        backgroundColor: '#FFF',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
))

const RowItem = styled(Paper)(({theme}) => (
    {
        flex: '1 0 auto',
        backgroundColor: '#F0F0F0',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary

    }
))

export const StackLoyoutPage = () => {
    return (
        <>
            <CssBaseline />
            <Container sx={{p:0}}>
                <Stack direction={'column'} spacing={1}>
                    <ColumnItem>Item 1</ColumnItem>
                    <ColumnItem>Item 2</ColumnItem>
                </Stack>
            </Container>
            <Box height={20} sx={{backgroundColor: '#000'}}/>
            <Container>
                <Stack display={'flex'} direction={'row'} flexWrap={'nowrap'} spacing={1}>
                    {
                        Array.from({length: 5}).map((value, idx) => {
                            return <RowItem key={idx}>{`Item ${idx}`}</RowItem>
                        })
                    }
                </Stack>
            </Container>
            <Box minWidth={'xs'}>
                <Box sx={{backgroundColor:'#000', width:'200px', minWidth:'100px', height:'100px'}}>

                </Box>
                
            </Box>
        </>
    )
}