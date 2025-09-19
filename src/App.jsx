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
import { ReactQueryDevtools } from "./../node_modules/@tanstack/react-query-devtools/src/index";
import ScrollTopButton from "./components/ui/ScrollTopButton";
import Layout from "./layouts/Layout";
import { BrowserRouter, Outlet, Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <ParamsProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<Layout />}>
                {/* <Route path=":statusRoute(buy|rent)" element={<BrowserPage/>} /> */}
                <Route
                  path="/buy"
                  element={<BrowserPage mode="FOR_SALE"/>}
                />
                <Route
                  path="/rent"
                  element={<BrowserPage mode="FOR_RENT" />}
                />
              </Route>
            </Routes>
          </ThemeProvider>
          <ReactQueryDevtools
            initialIsOpen={false}
            buttonPosition="bottom-left"
          />
        </QueryClientProvider>
      </ParamsProvider>
    </>
  );
}

export default App;
