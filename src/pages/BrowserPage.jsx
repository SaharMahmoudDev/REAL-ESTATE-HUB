import React, { useContext, useEffect, useState } from "react";

// LOCAL COMPONENTS
import {Section} from "@/components";
import {ResultsBrowser,SearchBrowser,FilterBrowser} from "@/features/browser";
import { BaramsContext } from "../context/ParamsProvider";

const BrowserPage = ({mode}) => {
  const [view, setView] = useState(true);
  const { setParams } = useContext(BaramsContext);

 useEffect(() => {

    setParams(prev => ({
      ...prev,
      _page: 1,           
      status: mode,       
    }));
  
  }, [ setParams,mode]);

  return (
    <>
    <Section variant="border-b-0 !p-0">
      <SearchBrowser mode={mode}/>
      <FilterBrowser view={view} setView={setView} />
      <ResultsBrowser view={view} setView={setView} mode={mode}/>
      </Section>
    </>
  );
};

export default BrowserPage;
