import React, { useContext, useEffect, useState } from "react";

// LOCAL COMPONENTS
import Section from "../../components/ui/Section";
import { Heading } from "../../components/ui/Heading";
import Button from "../../components/ui/Button";
import SelectSearch from "../../components/ui/SelectSearch";
import { BaramsContext } from "../../context/ParamsProvider";

// EXTERNAL ICONS
import { Search } from "lucide-react";

import {
  PRICE_RANGE_OPTIONS,
  PROPERTY_TYPES,
} from "../../styles/constants/Options";
import { useLocation, useNavigate } from "react-router-dom";
import ScrollInTo from "../../components/common/ScrollInTo";
import { usePropertiesQuery } from "../../hooks/usePropertiesQuery";

export const SearchBrowser = ({ mode }) => {
  const { params, setBarams } = useContext(BaramsContext);

  const { isLoading, isFetching, isError, error, data } =
      usePropertiesQuery(params);

  const navigate = useNavigate();
  const location = useLocation();
  const [draft, setDraft] = useState({
    type: null,
    price_gte: null,
    price_lte: null,
    city_like: null,
  });
  const [valueInInput, setValueInInput] = useState(false);

  const [current, setCurrent] = useState("buy");

  const handleClick = (modee) => {
    setCurrent(modee);
    navigate(`/${modee}`);
    console.log(mode);
  };
  useEffect(() => {
    if (location.pathname.startsWith("/rent")) {
      setCurrent("rent");
    } else {
      setCurrent("buy");
    }
  }, [location.pathname]);

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
              setBarams((prev) => ({ ...prev, status: "FOR_SALE" }));
              handleClick("buy");
              ScrollInTo()
            }}
          >
            buy
          </Button>

          <Button
            isActive={current !== "rent"}
            onClick={() => {
              setBarams((prev) => ({ ...prev, status: "FOR_RENT" }));
              handleClick("rent");
                            ScrollInTo()

            }}
          >
            rent
          </Button>
        </div>
      </div>
      {/* SEARCH FORM */}
      <div className="p-3 sm:p-6 rounded-xl bg-[#F9FAFB] mt-6 grid md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] x sm:gap-2 gap-5  ">
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
          onChangee={(v) => {setDraft((d) => ({ ...d, type: v?.toUpperCase() }))
        //   if(draft.type!=null){
        // setValueInInput(true)
        //   }
        }}
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

        <Button
          type="button"
          variant="w-full h-12.5 text-white self-end  text-base flex justify-center items-center"
          onClick={() => {
            setBarams((prev) => ({
              ...prev,
              price_lte: draft.price_lte,
              price_gte: draft.price_gte,
              city_like: draft.city_like,
              type: draft.type,
              _page: 1,
            }));
            console.log(params,draft)
            if(draft.type||draft.city_like||draft.price_gte||draft.price_lte&&valueInInput
              ){
            ScrollInTo()
            }
          }}
        >
          <Search className="h-5 w-5 me-1" />
          <span>search</span>
        </Button>
      </div>
    </Section>
  );
};
