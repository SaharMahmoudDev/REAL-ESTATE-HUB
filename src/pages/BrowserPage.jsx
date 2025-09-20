import React, { useContext, useEffect, useMemo, useState } from "react";
import Section from "../components/ui/Section";
// LOCAL COMPONENTS
import { SearchBrowser } from "../features/browser/SearchBrowser";
import FilterBrowser from "../features/browser/FilterBrowser";
import ResultsBrowser from "../features/browser/ResultsBrowser";
import { BaramsContext } from "../context/ParamsProvider";

const BrowserPage = ({mode}) => {
  const [view, setView] = useState(true);
  const { setBarams } = useContext(BaramsContext);

 useEffect(() => {

    setBarams(prev => ({
      ...prev,
      _page: 1,           
      status: mode,       
    }));
  
  }, [ setBarams,mode]);

  return (
    <>
    <Section variant="border-b-0 !p-0">
      <SearchBrowser mode={mode}/>
      <FilterBrowser view={view} setView={setView} />
      <ResultsBrowser view={view} setView={setView} />
      </Section>
    </>
  );
};

export default BrowserPage;
