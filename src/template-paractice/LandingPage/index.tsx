import { useTheme } from "@mui/system"
import { Box, createTheme, CssBaseline, Divider, Grid, ThemeProvider, Typography } from "@mui/material"
import { LogoCollection } from "./components/LogoCollection"
import { Features } from "./components/Features"
import { Highlights } from "./components/Highlights"
import { Testimonials } from "./components/Testimonials"
import { Pricing } from "./components/Pricing"
import { FAQ } from "./components/FAQ"
import { Footer } from "./components/Footer"
import { AppAppBar } from "./components/AppAppBar"
import { useState } from "react"
import { Hero } from "./components/Hero"

// https://mui.com/material-ui/getting-started/templates/landing-page/
// https://github.com/mui/material-ui/tree/v5.15.15/docs/data/material/getting-started/templates/landing-page

export const LadningPage = () => {

    const [mode, setMode] = useState<'light' | 'dark'>('light')

    const defaultTheme = createTheme({palette: { mode: mode }})

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode}/>
            <Hero />
            <Box sx={{bgcolor: 'background.default' }}>
                <LogoCollection />
                <Features />
                <Divider />
                <Testimonials />
                <Divider />
                <Highlights />
                <Divider />
                <Pricing />
                <Divider />
                <FAQ />
                <Divider />
                <Footer />
            </Box>
        </ThemeProvider>
    )
}