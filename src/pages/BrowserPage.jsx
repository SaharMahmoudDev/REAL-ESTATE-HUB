import React, { useState } from "react";

// LOCAL COMPONENTS
import { SearchBrowser } from "../features/browser/SearchBrowser";
import FilterBrowser from "../features/browser/FilterBrowser";
import ResultsBrowser from "../features/browser/ResultsBrowser";

const BrowserPage = () => {
  const [view, setView] = useState(true);

  return (
    <>
      <SearchBrowser />
      <FilterBrowser view={view} setView={setView} />
      <ResultsBrowser view={view} setView={setView} />
    </>
  );
};

export default BrowserPage;
