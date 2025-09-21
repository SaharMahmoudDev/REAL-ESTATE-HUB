import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider
      maxSnack={1}
      autoHideDuration={4000}
      preventDuplicate
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
    <App />
    </SnackbarProvider>
    </BrowserRouter>
  </StrictMode>
)
