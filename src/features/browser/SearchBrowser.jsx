import React, { useContext, useState } from "react";

// LOCAL COMPONENTS
import Section from "../../components/ui/Section";
import { Heading } from "../../components/ui/Heading";
import Button from "../../components/ui/Button";
import SelectSearch from "../../components/ui/SelectSearch";
import { BaramsContext } from "../../context/ParamsProvider";

// EXTERNAL ICONS
import { Search } from "lucide-react";
// import {Button} from "@mui/material";
// CONSTANTS
import {
  PRICE_RANGE_OPTIONS,
  PROPERTY_TYPES,
} from "../../styles/constants/Options";
import { Box } from "@mui/material";

export const SearchBrowser = () => {
  const { setBarams } = useContext(BaramsContext);

  const [draft, setDraft] = useState({
    type: null,
    price_gte: null,
    price_lte: null,
    city_like: null,
  });

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
            variant="me-3 !bg-primary text-white"
            onClick={() =>
              setBarams((prev) => ({ ...prev, status: "FOR_SALE" }))
            }
          >
            buy
          </Button>

          <Button
            variant=" text-[#4B5563]"
            onClick={() =>
              setBarams((prev) => ({ ...prev, status: "FOR_RENT" }))
            }
          >
            rent
          </Button>
        </div>
      </div>
      {/* SEARCH FORM */}
      <div className="p-3 sm:p-6 rounded-xl bg-[#F9FAFB] mt-6 flex justify-between items-center sm:gap-2 gap-5 flex-col  sm:flex-row">
        <SelectSearch
          isInput={true}
          placeholder="Enter location"
          label="location"
          variant="placeholder:text-[#ADAEBC] text-lg leading-6"
          locationChange={(e) => {
            setDraft((d) => ({ ...d, city_like: e.target.value }));
          }}
        />
        <SelectSearch
          list={PROPERTY_TYPES}
          isGroup={true}
          label="property type"
          defaultLabel="All Types"
          isSort={false}
          onChangee={(v) => setDraft((d) => ({ ...d, type: v?.toUpperCase() }))}
        />

        <SelectSearch
          list={PRICE_RANGE_OPTIONS}
          label="price range"
          defaultLabel="Any Price"
          isSort={false}
          onChangee={(v) => {
            const min = v.min;
            const max = v.max;
            max?.toString().trim() === "M10+"
              ? setDraft((d) => ({ ...d, price_lte: min, price_gte: null }))
              : setDraft((d) => ({ ...d, price_lte: min, price_gte: max }));
          }}
        />

        {/* <Box
          className="purple-interactive w-full self-end  rounded-lg "
          // sx={{
          //   bgcolor: "#6D28D9",
          //   "&:hover": {
          //     bgcolor: "#7C3AED", 
          //     boxShadow: 4,
          //   },
          //   "&:active": {
          //     bgcolor: "#5B21B6", 
          //     boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.3)", 
          //     transform: "scale(0.97)", 
          //   },
          // }}
        > */}
          <Button
            type="button"
            variant="w-full h-12.5 text-white self-end  text-base flex justify-center items-center"
            // py-2.5 sm:py-3.25 
            onClick={() => {
              setBarams((prev) => ({
                ...prev,
                price_lte: draft.price_lte,
                price_gte: draft.price_gte,
                city_like: draft.city_like,
                type: draft.type,
              }));
            }}
          >
            <Search className="h-5 w-5 me-1" />
            <span>search</span>
          </Button>
        {/* </Box> */}
      </div>
    </Section>
  );
};
