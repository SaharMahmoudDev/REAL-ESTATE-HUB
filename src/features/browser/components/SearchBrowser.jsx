import React, { useCallback, useContext, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// LOCAL COMPONENTS
import { Section, Heading, Button, ScrollInTo } from "@/components";
import { SelectSearch,useParams } from "@/features/browser";
import { BaramsContext } from "../../../context/ParamsProvider";
import {
  PRICE_RANGE_OPTIONS,
  PROPERTY_TYPES,
} from "../../../constants/Options";

// EXTERNAL ICONS
import { Search } from "lucide-react";

const SearchBrowser = React.memo(() => {
  const { setParams } = useContext(BaramsContext);

  const navigate = useNavigate();
  const location = useLocation();
  const [draft, setDraft] = useState({
    type: null,
    price_gte: null,
    price_lte: null,
    city_like: null,
  });
  const prevDraft = useRef(draft);
  const current = location.pathname.startsWith("/rent") ? "rent" : "buy";
  const { handleKeyParams } = useParams();
  const handleModeClick = (mode) => {
    navigate(`/${mode}`);
  };

  const onLocationChange = useCallback((e) => {
    setDraft((d) => ({ ...d, city_like: e.target.value }));
  }, []);

  const onTypeChange = useCallback((v) => {
    setDraft((d) => ({ ...d, type: v?.toUpperCase() || null }));
  }, []);

  const onPriceChange = useCallback((v) => {
    const { min, max } = v || {};
    if (String(max).trim() === "M10+") {
      setDraft((d) => ({ ...d, price_lte: min, price_gte: null }));
    } else {
      setDraft((d) => ({ ...d, price_lte: min, price_gte: max }));
    }
  }, []);

  const checkDraftChange = () => {
    if (prevDraft?.current !== draft) {
      ScrollInTo("result-section");
    }
    prevDraft.current = draft;
  };

  const handleSearch = (e) => {
    e?.preventDefault?.();

    handleKeyParams({
      price_lte: draft.price_lte,
      price_gte: draft.price_gte,
      city_like: draft.city_like,
      type: draft.type,
      _page: 1,
    });

    checkDraftChange();
  };

  return (
    <Section variant="!text-black">
      {/* CONTAINER HEADING & BUY & RENT BUTTONS */}
      <div className="flex justify-between items-center flex-wrap gap-4">
        <Heading
          label="Find Your Dream Property"
          text="Discover the perfect home from our extensive collection"
        />
        <div className="mx-auto sm:mx-0 sm:ms-auto">
          <Button
            variant="me-3 "
            isActive={current !== "buy"}
            onClick={() => {
              setParams((prev) => ({ ...prev, status: "FOR_SALE" }));
              handleModeClick("buy");
              ScrollInTo("result-section");
            }}
          >
            buy
          </Button>

          <Button
            isActive={current !== "rent"}
            onClick={() => {
              setParams((prev) => ({ ...prev, status: "FOR_RENT" }));
              handleModeClick("rent");
              ScrollInTo("result-section");
            }}
          >
            rent
          </Button>
        </div>
      </div>
      {/* SEARCH FORM */}
      <form
        onSubmit={handleSearch}
        className="p-3 sm:p-6 rounded-xl bg-[#F9FAFB] mt-6 grid md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:gap-2 gap-5  "
      >
        <SelectSearch
          isInput={true}
          placeholder="Enter location"
          label="location"
          variant="placeholder:text-[#ADAEBC] text-lg leading-6"
          locationChange={(e) => {
            onLocationChange(e);
          }}
        />
        <SelectSearch
          list={PROPERTY_TYPES}
          isGroup={true}
          label="property type"
          defaultLabel="All Types"
          isSort={false}
          updateDraft={(v) => {
            onTypeChange(v);
          }}
        />

        <SelectSearch
          list={PRICE_RANGE_OPTIONS}
          label="price range"
          defaultLabel="Any Price"
          isSort={false}
          updateDraft={(v) => {
            onPriceChange(v);
          }}
        />

        <Button
          type="submit"
          variant="w-full h-12.5 text-white self-end  text-base flex justify-center items-center"
        >
          <Search className="h-5 w-5 me-1" />
          <span>search</span>
        </Button>
      </form>
    </Section>
  );
});
export default SearchBrowser;
