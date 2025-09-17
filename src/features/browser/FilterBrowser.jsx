import React from "react";

// Local Components
import Section from "../../components/ui/Section";
import SelectFilters from "./SelectFilters";
import Button from "../../components/ui/Button";
import SelectSearch from "../../components/ui/SelectSearch";

// local Icons
import Icon from "../../assets/photos/Vector (1).svg?react";

// External Icons
import { LayoutGrid, List } from "lucide-react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import HotelIcon from "@mui/icons-material/Hotel";

//  Constants
import { SORT_OPTIONS } from "../../styles/constants/Options";

const FilterBrowser = ({ view, setView }) => {
  const toggleButton = (toggle) => {
    setView(toggle);
  };

  const flexBetweenCenter = ["flex", " items-center", "flex-wrap"].join(" ");
  const classNameSortFilter = [
    "block",
    "text-[#4B5563]",
    "text-base",
    " leading-6",
    "font-medium",
    "text-nowrap",
  ].join(" ");

  const viewBtns = [
    { val: true, Icon: LayoutGrid, label: "Grid view" },
    { val: false, Icon: List, label: "List view" },
  ];

  return (
    <Section variant="p-3 sm:!p-5">
      {/* Container Filters & Sort */}
      <div className={`text-black ${flexBetweenCenter} justify-between gap-4`}>
        {/*  Container Filters*/}
        <div className={`capitalize ${flexBetweenCenter} gap-1.5 sm:gap-3 `}>
          <span className={classNameSortFilter}>filters:</span>

          <SelectFilters
            text="bedrooms"
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
            text="bathrooms"
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

        {/* Container Sort & View */}
        <div
          className={`${flexBetweenCenter} justify-between capitalize gap-1.5 sm:gap-3 basis-full md:basis-89`}
        >
          {/* Container Sort  */}
          <div className="flex justify-between items-center gap-1.5 sm:gap-3 md:flex-1">
            <span className={classNameSortFilter}>sort by:</span>
            <div className="mb-1.5 flex-1">
              <SelectSearch
                list={SORT_OPTIONS}
                variantGroup="!h-10.5"
                selectProps={{
                  sx: {
                    "& .css-18jp67o-MuiNativeSelect-root-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                      {
                        // py: 1.3,
                        "@media (max-width:640px)": {
                          // py: 1.1,
                        },
                      },
                  },
                }}
                defaultLabel="Price: Low to High"
                defaultValue="price-asc"
                sort="_sort"
                order="_order"
                // sortSelect={true}
                isSort={true}
              />
            </div>
          </div>

          {/* CONTAINIER GRID & LIST BUTTONS  */}
          <div
            className={`${flexBetweenCenter}  gap-2 hidden sm:flex justify-end`}
          >
            {viewBtns.map(({ val, Icon, label }) => {
              return (
                <Button
                  key={label}
                  variant={`!p-1.5`}
                  isActive={!view == val}
                  onClick={() => toggleButton(val)}
                  aria-pressed={val}
                  aria-label={label}
                >
                  <Icon className="w-6 h-5  text-current" aria-hidden="true" />
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
