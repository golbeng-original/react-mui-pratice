import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, Container, createMuiTheme, createTheme, CssBaseline, GlobalStyles, Stack, ThemeProvider, Typography } from '@mui/material'

import ButtonsPage from './buttonPage'
import { Link, Route, Routes } from 'react-router-dom'
import { purple } from '@mui/material/colors'


function App() {

  return (
      <Container maxWidth={false} disableGutters>
        <CssBaseline />
        <Stack>
          <Typography> MUI Paratice</Typography>
          <Link to='/buttonPage'>
            <Button variant='contained'>Button Page</Button>
          </Link>
          <Link to='/template/login'>
            <Button variant='contained'>Tempalte-LoginPage</Button>
          </Link>
          <Link to='/template/login2'>
            <Button variant='contained'>Tempalte-LoginPage2</Button>
          </Link>
          <Link to='/template/dashboard'>
            <Button variant='contained'>DashBoardPage</Button>
          </Link>
          <Link to='/template/landingPage'>
            <Button variant='contained'>LandingPage</Button>
          </Link>
          <Link to='/template/grid'>
            <Button variant='contained'>GridPage</Button>
          </Link>
          <Link to='/gridParaticePage'>
            <Button variant='contained'>GridParaticePage</Button>
          </Link>
          <Link to='/stackLayoutPage'>
            <Button variant='contained'>StackLayoutPage</Button>
          </Link>
        </Stack>
      </Container>
  )
}

export default App
