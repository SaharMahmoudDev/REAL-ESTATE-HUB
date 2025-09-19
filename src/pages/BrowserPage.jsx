import React, { useContext, useEffect, useMemo, useState } from "react";
import Section from "../components/ui/Section";
// LOCAL COMPONENTS
import { SearchBrowser } from "../features/browser/SearchBrowser";
import FilterBrowser from "../features/browser/FilterBrowser";
import ResultsBrowser from "../features/browser/ResultsBrowser";
import { BaramsContext } from "../context/ParamsProvider";
import { useParams } from "react-router-dom";
import { PURPOSE_TO_MODE } from "../styles/constants/Options";

const BrowserPage = ({mode}) => {
  const [view, setView] = useState(true);
  const { setBarams } = useContext(BaramsContext);
  // const { statusRoute = "buy" } = useParams();          

  // const apiStatus = useMemo(() => PURPOSE_TO_MODE[statusRoute] ?? "FOR_SALE", [statusRoute]);

 useEffect(() => {

    setBarams(prev => ({
      ...prev,
      _page: 1,           
      status: mode,       
    }));
  
    // window.scrollTo({ top: 0, behavior: "smooth" });
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
