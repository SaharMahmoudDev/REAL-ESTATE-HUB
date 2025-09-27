import React, { useCallback, useContext } from "react";

//  LOCAL COMPONENTS
import { Section, Heading, ScrollInTo } from "@/components";
import {
  CardBrowser,
  PaginationSection,
  useLoadMoreOnIntersect,
  usePropertiesQuery,
  useParams,
  LoadingSection,
  ErrorSection,
} from "@/features/browser";
import { BaramsContext } from "../../../context/ParamsProvider";

// EXTERNAL COMPONENTS
import { CircularProgress, useMediaQuery } from "@mui/material";
import { flushSync } from "react-dom";


const ResultsBrowser = React.memo(({ view, mode }) => {

  const isMobile = useMediaQuery("(max-width:768px)");
  const { params } = useContext(BaramsContext);
  const { handleKeyParams } = useParams();

  const {
    isLoading,
    isFetching,
    isError,
    error,
    isSuccess,
    refetch,
    data,
    hasMore,
    loadMore,
    isLoadingMore,
    items,
  } = usePropertiesQuery(params);
  
  const sentinelRef = useLoadMoreOnIntersect(() => {
    if (hasMore) loadMore?.();
  });
  const saleOrRent = mode === "FOR_SALE" ? "sale" : "rent";

  const handleChange = useCallback(
    (nextPage) => {
      if (nextPage === params._page) return;
      flushSync(() => {
        handleKeyParams({ _page: nextPage });
      });
      ScrollInTo("result-section");
    },
    [params._page, handleKeyParams]
  );

  if (isLoading || (isFetching && !isSuccess)) {
    return <LoadingSection saleOrRent={saleOrRent} />;
  }
  if (isError) {
    return <ErrorSection error={error} onClick={refetch} />;
  }

  return (
    <Section
      id="result-section"
      variant="border-b-0 scroll-mt-5 sm:scroll-mt-0 "
    >
      {/* HEADING */}
      <Heading
        label={`Properties for ${saleOrRent}`}
        text={`showing ${data?.totalCount ?? 0} results`}
        variant="!font-semibold !text-xl !leading-7 "
      />
      {/* REAL STATE RESULTS */}
      <div
        className={`mt-6 transition grid overflow-x-hidden   ![overflow-y:hidden] grid-cols-1 ${
          view
            ? " sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
            : " place-items-center"
        } gap-6`}
      >
        {isSuccess &&
          items.map((item, ind) => (
            <CardBrowser key={item.id} view={view} data={item} i={ind} />
          ))}
        {isMobile && hasMore && (
          <div
            className="w-full max-w-2xl h-64 flex items-center justify-center "
            style={{ overflowAnchor: "none" }}
          >
            <div ref={sentinelRef} />
            {isLoadingMore && <CircularProgress />}
          </div>
        )}
      </div>

      {/* PAGINATION */}
      {!isMobile && data?.totalCount > 0 && (
        <PaginationSection
          count={data?.totalPages ?? 1}
          onChange={(nextPage) => {
            handleChange(nextPage);
          }}
          page={params._page}
        />
      )}
    </Section>
  );
});

export default ResultsBrowser;
