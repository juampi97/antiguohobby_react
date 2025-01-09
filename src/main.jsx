import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';

// Importing Roboto font weights
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './App.jsx'

let theme = createTheme ({
  palette: {
    mode:'light',
    primary: {
      main: '#363432'
    },
    dark_primary:{
      main:'#1c1b19'
    },
    secondary: {
      main: '#F0941F'
    },
    ligth: {
      main:'#e5e5e5'
    }
  }
})
theme = responsiveFontSizes(theme)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
