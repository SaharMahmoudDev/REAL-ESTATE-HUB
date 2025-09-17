import React, { useState } from "react";
import Section from "../components/ui/Section";
// LOCAL COMPONENTS
import { SearchBrowser } from "../features/browser/SearchBrowser";
import FilterBrowser from "../features/browser/FilterBrowser";
import ResultsBrowser from "../features/browser/ResultsBrowser";

const BrowserPage = () => {
  const [view, setView] = useState(true);

  return (
    <>
    <Section>
      <SearchBrowser />
      <FilterBrowser view={view} setView={setView} />
      <ResultsBrowser view={view} setView={setView} />
      </Section>
    </>
  );
};

export default BrowserPage;
