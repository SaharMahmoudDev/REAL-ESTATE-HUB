import React, { useCallback } from "react";

// LOCAL COMPONENTS
import { Section, Button, ScrollInTo } from "@/components";
import { SelectSearch, SelectFilters, useParams } from "@/features/browser";

// EXTERNAL COMPONENTS
import { useMediaQuery } from "@mui/material";

// LOCAL ICONS
import Icon from "../../../assets/photos/Vector (1).svg?react";

// EXTERNAL ICONS
import { LayoutGrid, List } from "lucide-react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import HotelIcon from "@mui/icons-material/Hotel";

//  CONSTANTS
import { SORT_OPTIONS } from "../../../constants/Options";

const FilterBrowser = ({ view, setView }) => {
  const { handleKeyParams } = useParams();
  const isSmall = useMediaQuery("(max-width:600px)");

  const hundelToggleButton = useCallback(
    (toggle) => {
      setView(toggle);
      ScrollInTo("result-section");
    },
    [setView]
  );

  const handleSort = useCallback(
    (e) => {
      const isE = e ? e : "price-asc";
      handleKeyParams({
        _sort: isE.split("-")[0],
        _order: isE.split("-")[1]?.trim().toLowerCase(),
        _page: 1,
      });
      ScrollInTo("result-section");
    },
    [handleKeyParams]
  );

  const viewBtns = [
    { val: true, Icon: LayoutGrid, label: "Grid view" },
    { val: false, Icon: List, label: "List view" },
  ];

  return (
    <Section variant="p-3 sm:!p-5">
      {/* Container Filters & Sort */}
      <div className={`text-black flexItemCenter justify-between gap-4`}>
        {/*  Container Filters*/}
        <div className={`capitalize flex  items-center gap-1.5 sm:gap-3 `}>
          <span className="textSort">filters:</span>

          <div className=" justify-start flexItemCenter gap-1.5 sm:gap-3">
            <SelectFilters
              text={isSmall ? "bed" : "bedroom"}
              icon={HotelIcon}
              isNumeric={true}
              iconProps={{
                sx: {
                  fontSize: {
                    xs: 22,
                    "@media (max-width:600px)": { fontSize: 16 },
                  },
                },
              }}
              from={1}
              to={10}
              keyParams="bedrooms"
            />

            <SelectFilters
              text={isSmall ? "bath" : "bathroom"}
              icon={Icon}
              isNumeric={true}
              variant="w-3.5 h-3.5 sm:w-4.5 h-4.5 mb-1"
              from={1}
              to={10}
              keyParams="bathrooms"
            />
            <SelectFilters
              text="size"
              icon={FaExpandArrowsAlt}
              variant="!text-xm sm:text-sm !font-extrabold "
              isNumeric={false}
            />
          </div>
        </div>

        {/* Container Sort & View */}
        <div
          className={` flexItemCenter justify-between capitalize gap-1.5 sm:gap-3 basis-full lg:basis-89`}
        >
          {/* Container Sort  */}
          <div className=" justify-between flexItemCenter gap-1.5 sm:gap-3 lg:flex-1">
            <span className="textSort">sort by:</span>
            <div className="mb-1.5 flex-1">
              <SelectSearch
                list={SORT_OPTIONS}
                variantGroup="!h-10.5"
                defaultLabel="Price: Low to High"
                updateParams={(e) => {
                  handleSort(e);
                }}
              />
            </div>
          </div>

          {/* CONTAINIER GRID & LIST BUTTONS  */}
          <div className={`flexItemCenter gap-2 !hidden sm:!flex justify-end`}>
            {viewBtns.map(({ val, Icon, label }) => {
              return (
                <Button
                  key={label}
                  variant={`!p-1.5 ${
                    view == val ? "purple-interactive" : "gray-interactive"
                  }`}
                  onClick={() => {
                    hundelToggleButton(val);
                  }}
                  aria-pressed={val == view}
                  aria-label={label}
                >
                  <Icon className="w-6 h-5  !text-current" aria-hidden="true" />
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FilterBrowser;
