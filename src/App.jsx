import React, { lazy, Suspense } from "react";
import "./index.css";
// LOCAL COMPONENTS
import { ParamsProvider } from "./context/ParamsProvider";
import Layout from "./layouts/Layout";

// EXTERNAL COMPONENTS
import { ThemeProvider } from "@mui/material/styles";
import { QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { theme } from "./styles/theme";
import { ReactQueryDevtools } from "./../node_modules/@tanstack/react-query-devtools/src/index";

// PAGES

const BrowserPage = lazy(() => import("./pages/BrowserPage"));

// FUNCTIONS
import { queryClient } from "./lib/queryClient";
function Fallback() {
  // return <div style={{ padding: 16, color: "#555" }}>Loading…</div>;
}

function App() {
  return (
    <>
      <ParamsProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Suspense fallback={<Fallback/>}>
            <Routes>
              <Route path="/" element={<Layout />}>
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
            </Suspense>
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
