import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider } from 'react-router-dom'

import router from './router'
//import './index.css'
import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material'
import { GridPage } from './template-paractice/GridPage'
import { purple } from '@mui/material/colors'


const theme = createTheme({
  /*
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          margin: 0
        },
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: '#FF0000'
        },
        '#root': {
          margin: 0,
          padding: 0,
          backgroundColor: '#FF00FF'
        }
      }
    }
  },
  */
  palette: {
      primary: {
          main: purple[500]
      }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
