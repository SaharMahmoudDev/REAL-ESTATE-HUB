import React, {  useEffect, useState } from "react";

// LOCAL COMPONENTS
import { Section } from "@/components";
import {
  ResultsBrowser,
  SearchBrowser,
  FilterBrowser,
  useParams,
} from "@/features/browser";
import { BaramsContext } from "../context/ParamsProvider";

const BrowserPage = ({ mode }) => {
  const [view, setView] = useState(true);
  const { handleKeyParams } = useParams();

  useEffect(() => {
    handleKeyParams({ _page: 1, status: mode });
  }, [handleKeyParams, mode]);

  return (
    <>
      <Section variant="border-b-0 !p-0">
        <SearchBrowser mode={mode} />
        <FilterBrowser view={view} setView={setView} />
        <ResultsBrowser view={view} setView={setView} mode={mode} />
      </Section>
    </>
  );
};

export default BrowserPage;
