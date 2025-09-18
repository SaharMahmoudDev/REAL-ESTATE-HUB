import React, { useContext } from "react";

//  LOCAL COMPONENTS
import Section from "../../components/ui/Section";
import PaginationSection from "./Pagination";
import { Heading } from "../../components/ui/Heading";
import CardBrowser from "./CardBrowser";
import { usePropertiesQuery } from "../../hooks/usePropertiesQuery";
import { BaramsContext } from "../../context/ParamsProvider";

// EXTERNAL COMPONENTS
import { CircularProgress } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const ResultsBrowser = ({ view }) => {
  const { params, setBarams } = useContext(BaramsContext);

  const { isLoading, isFetching, isError, error, data } =
    usePropertiesQuery(params);

  if (isLoading || isFetching) {
    return (
      <div className="min-h-[600px] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  if (isError) {
    return <div> {error.message}</div>;
  }

  const keyForAnim = `${params._page ?? 1}-${params.city_like ?? ""}-${
    params.sort ?? ""
  }`;

  return (
    <Section variant="border-b-0">
      {/* HEADING */}
      <div>
        <Heading
          label="Properties for Sale"
          text={`showing ${data.totalCount} results`}
          variant="!font-semibold !text-xl !leading-7 "
        />
        {/* REAL STATE RESULTS */}
        <div
          className={`mt-6 transition grid ${
            view
              ? "grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
              : "grid-cols-1 place-items-center "
          } gap-6`}
        >
          {data.data.map((item, ind) => (
            <CardBrowser key={item.id} view={view} data={item} i={ind} />
          ))}
        </div>

        {/* PAGINATION */}
        {data.totalCount > 0 && (
          <PaginationSection
            count={data.totalPages}
            onChange={(nextPage) =>
              setBarams((prev) => ({ ...prev, _page: nextPage }))
            }
          />
        )}
      </div>
    </Section>
  );
};

export default ResultsBrowser;
