import React, { useCallback, useContext, useEffect, useRef } from "react";

//  LOCAL COMPONENTS
import Section from "../../components/ui/Section";
import PaginationSection from "./Pagination";
import { Heading } from "../../components/ui/Heading";
import CardBrowser from "./CardBrowser";
import { usePropertiesQuery } from "../../hooks/usePropertiesQuery";
import { BaramsContext } from "../../context/ParamsProvider";
import { useLoadMoreOnIntersect } from "../../hooks/useLoadMore";
import Button from "../../components/ui/Button";

// EXTERNAL COMPONENTS
import { CircularProgress, useMediaQuery } from "@mui/material";
import ScrollInTo from "../../components/common/ScrollInTo";
import { flushSync } from "react-dom";

const ResultsBrowser = React.memo(({ view, mode }) => {
  const topRef = useRef(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  const { params, setParams } = useContext(BaramsContext);

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

  // useEffect(() => {
  //     if (!isFetching && isSuccess) {
  //       topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  //     }
  //   }, [params._page, isFetching, isSuccess]);

  const handleChange = useCallback(
    (nextPage) => {
        if (nextPage === params._page) return;
      flushSync(() => {
        setParams((prev) => ({ ...prev, _page: nextPage }));
      });
      ScrollInTo();
    },
    [params._page,setParams]
  );

  if (isLoading || (isFetching && !isSuccess)) {
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
    return (
      <Section variant="!text-black ">
        <div className="min-h-[20px] flex justify-center items-center">
          {error?.message?.toLowerCase?.().includes("network error") ? (
            <span>Please check your internet connection</span>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 mb-3">
                Something went wrong. Please try again.
              </p>
              <Button
                isActive={true}
                variant="!text-gray-700"
                onClick={refetch}
              >
                retry
              </Button>
            </div>
          )}
        </div>
      </Section>
    );
  }

  return (
    <Section ref={topRef} id="result-section" variant="border-b-0 scroll-mt-5 sm:scroll-mt-0 ">
      {/* HEADING */}
      <Heading
        label={`Properties for ${saleOrRent}`}
        text={`showing ${data?.totalCount ?? 0} results`}
        variant="!font-semibold !text-xl !leading-7 "
      />
      {/* REAL STATE RESULTS */}
      <div
        className={`mt-6 transition grid overflow-x-hidden   ![overflow-y:hidden] ${
          view
            ? "grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]"
            : "grid-cols-1 place-items-center"
        } gap-6`}
      >
        {!isMobile &&
          isSuccess &&
          items.map((item, ind) => (
            <CardBrowser key={item.id} view={view} data={item} i={ind} />
          ))}
        {isMobile &&
          isSuccess &&
          data.items.map((item, ind) => (
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
