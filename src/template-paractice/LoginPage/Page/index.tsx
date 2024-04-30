import { Avatar, Box, Button, Container, createTheme, CssBaseline, FormControlLabel, Grid, Link, Stack, SxProps, TextField, Theme, ThemeProvider, Typography } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LooksOutlined'
import CheckBox from "@mui/material/Checkbox"
import React from "react"

// 참고 Github 코드
// https://github.com/mui/material-ui/blob/v5.15.15/docs/data/material/getting-started/templates/sign-up/SignUp.tsx

type FromHandlerFunc = (event:React.FormEvent<HTMLFormElement>) => void

const defaultTheme = createTheme()

const Copyright = (props: any) => {
    return (
        <Typography variant='body2' color='text.secondary' align='center' {...props}>
            {'Copyright *'}
            <Link color='inherit' href='#'>
                Your WebSite
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const PageFormControlCheckBox = () => {

    const formControlLabel = 'I want to receive inspiration, marketing promotions and updates via email.'
    
    return (
        <FormControlLabel 
            control={<CheckBox value="allowExtraEmails" color='primary'/>} 
            label={formControlLabel}
        />
    )
}

const LoginFormWiget = (props:{onSubmit?:FromHandlerFunc}) => {

    return (
        <Box component={'form'} onSubmit={props.onSubmit} noValidate sx={{mt: 3}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth required name='firstName' id='firstName' label='First Name' autoFocus/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField fullWidth required name='lastName' id='lastName' label='Last Name' autoFocus/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth name='email' id='email' label='Email Address'/>
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth name='password' id='password' label='Password'/>
                </Grid>
                <Grid item xs={10}>
                    <PageFormControlCheckBox />
                </Grid>
            </Grid>
            <Button 
                type='submit'
                fullWidth 
                variant={'contained'} 
                sx={{mt: 3, mb: 2}}
            >
                Sign Up
            </Button>
            <Grid container justifyContent={'flex-end'}>
                <Grid item>
                    <Link href='#' variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </Box>
    )
}

const Page = () => {

    const handlerOnSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        
        // form submit의 경우 기본 동작은 이벤트 양식을 제출하는 고유 동작으로 페이지 이동,
        // 새로고침이 발생한다.
        // preventDefault()는 해당 이벤트에 대한 기본 동작을 실행하지 않도록 지정한다.
        event.preventDefault()
        console.log('handlerOnSubmit!!!')
    
        const data = new FormData(event.currentTarget)
        for(const entry of data.entries()) {
            console.log(entry)
        }
        
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            allowEmail : data.get('allowExtraEmails')
        })
    }

    const boxSx:SxProps = {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component={'main'} maxWidth={'xs'} sx={{backgroundColor: '#0000FF'}}>
                <CssBaseline />
                <Box sx={boxSx}>
                    {/* ---------- */}
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    {/* ---------- */}
                    <Typography component={'h1'} variant={'h5'}>
                        Sign up
                    </Typography>
                    {/* ---------- */}
                    <LoginFormWiget onSubmit={handlerOnSubmit}/>
                    {/* ---------- */}
                </Box>
                <Copyright sx={{mt: 5}} />
            </Container>
        </ThemeProvider>
    )
}

export default Page