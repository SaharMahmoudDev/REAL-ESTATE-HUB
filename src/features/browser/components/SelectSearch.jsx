import React from "react";

//  LOCAL COMPONENTS
import { GroupedSelect } from "@/features/browser";

//  EXTARNAL COMPONENTS
import { Box } from "@mui/material";

// EXTARNAL ICONS
import { MdLocationOn } from "react-icons/md";

const SelectSearch = React.memo(
  ({
    isInput,
    label,
    list,
    selectProps,
    defaultLabel,
    variantGroup,
    updateParams,
    ...props
  }) => {
    return (
      <div className="w-full ">
        <span
          htmlFor="location search"
          className="block mb-2 font-medium text-sm text-[#374151] leading-5 capitalize"
        >
          {label}
        </span>

        {isInput && (
          <Box
            className=" h-12.5 flex items-center  bg-white rounded-lg border border-[#E5E7EB]"
            sx={{
              "&:hover": {
                boxShadow: 3,
              },
            }}
          >
            <MdLocationOn className="w-6 h-5 text-[#ADAEBC] ms-1.5" />
            <input
              id="location search"
              className={` w-full p-1 bg-white rounded-lg outline-0 cursor-pointer placeholder:text-[#ADAEBC] text-lg leading-6  `}
              onChange={updateParams}
              {...props}
            ></input>
          </Box>
        )}
        {!isInput && (
          <GroupedSelect
            list={list}
            selectProps={selectProps}
            defaultLabel={defaultLabel}
            variant={variantGroup}
            updateParams={updateParams}
          />
        )}
      </div>
    );
  }
);

export default SelectSearch;
