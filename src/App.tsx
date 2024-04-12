import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Stack, Typography } from '@mui/material'

import ButtonsPage from './buttonPage'
import { Link, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    <Stack>
      <Typography> MUI Paratice</Typography>
      <Link to='/buttonPage'>
        <Button variant='contained'>Button Page</Button>
      </Link>
    </Stack>
      
    </>
  )
}

export default App
