import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from 'styled-components'
import { theme } from './Theme.jsx'
import {GlobalStyle} from './common/global/GlobalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
