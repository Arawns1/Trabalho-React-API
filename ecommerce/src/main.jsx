import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme.jsx'
import {GlobalStyle} from './common/global/GlobalStyle.jsx'
import { AllRoutes } from '../routes/AllRoutes.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AllRoutes/>
    </ThemeProvider>
  </React.StrictMode>,
)
