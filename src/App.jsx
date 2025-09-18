import React from "react";
import "./index.css";

// EXTERNAL COMPONENTS
// import { ThemeProvider } from "styled-components";
import { ThemeProvider } from "@mui/material/styles";

import { CssBaseline } from "@mui/material";
import { theme } from "./styles/theme";

// PAGES
import BrowserPage from "./pages/BrowserPage";

// EXTERNAL COMPONENTS
import { QueryClientProvider } from "@tanstack/react-query";
// FUNCTIONS
import { queryClient } from "./lib/queryClient";
import { ParamsProvider } from "./context/ParamsProvider";
import { ReactQueryDevtools } from './../node_modules/@tanstack/react-query-devtools/src/index';
import ScrollTopButton from "./components/ui/ScrollTopButton";

function App() {
  return (
    <>
    <ParamsProvider>
    <QueryClientProvider client={queryClient}>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserPage />
        <ScrollTopButton/>
      </ThemeProvider>
              <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />

      </QueryClientProvider>
      </ParamsProvider>
    </>
  );
}

export default App;
