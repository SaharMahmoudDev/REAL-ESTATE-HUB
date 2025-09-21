import React, { useContext, useRef } from "react";

//  LOCAL COMPONENTS
import Section from "../../components/ui/Section";
import PaginationSection from "./Pagination";
import { Heading } from "../../components/ui/Heading";
import CardBrowser from "./CardBrowser";
import { usePropertiesQuery } from "../../hooks/usePropertiesQuery";
import { BaramsContext } from "../../context/ParamsProvider";

// EXTERNAL COMPONENTS
import { CircularProgress } from "@mui/material";
import Button from "../../components/ui/Button";

const ResultsBrowser = ({ view, mode }) => {
  const topRef = useRef(null);

  const { params, setBarams } = useContext(BaramsContext);

  const { isLoading, isFetching, isError, error,isSuccess, refetch,data } =
    usePropertiesQuery(params);
  const saleOrRent = mode == "FOR_SALE" ? "sale" : "rent";

  if (isLoading || isFetching) {
    return (
      <Section>
        <Heading
          label={`Properties for ${saleOrRent}`}
          variant="!font-semibold !text-xl !leading-7 "
        />
        <div className="min-h-[500px] flex justify-center items-center">
          <CircularProgress />
        </div>
      </Section>
      
    );
  }
  if (isError) {
    return <Section variant="!text-black">
        <div className="min-h-[500px] flex justify-center items-center">
          {error.message.toLowerCase()=='network error'?
          <span>Please check your internet connection</span>:
          <div className="text-center">
          <p className="text-gray-600 mb-3">Something went wrong. Please try again.</p>
          <Button isActive={true} variant="!text-gray-700" onClick={refetch}>retry</Button>
</div>
          }
        </div>


    </Section>
  }

  return (
    <Section ref={topRef} id="result-section" variant="border-b-0">
      {/* HEADING */}
      <Heading
        label={`Properties for ${saleOrRent}`}
        text={`showing ${data.totalCount} results`}
        variant="!font-semibold !text-xl !leading-7 "
      />
      {/* REAL STATE RESULTS */}
      <div
        className={`mt-6 transition grid overflow-x-hidden ${
          view
            ? "grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
            : "grid-cols-1 place-items-center "
        } gap-6`}
      >
        {isSuccess&& data.data.map((item, ind) => (
          <CardBrowser key={item.id} view={view} data={item} i={ind} />
        ))}
      </div>

      {/* PAGINATION */}
      {data.totalCount > 0 && (
        <PaginationSection
          count={data.totalPages}
          onChange={(nextPage) => {
            setBarams((prev) => ({ ...prev, _page: nextPage }));
            topRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          page={params._page}
        />
      )}
    </Section>
  );
};

export default ResultsBrowser;
