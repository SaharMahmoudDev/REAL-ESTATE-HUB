import React from "react";

//  LOCAL COMPONENTS
import GroupedSelect from "../../features/browser/GroupedSelect";

//  EXTARNAL COMPONENTS
import { Box } from "@mui/material";

// EXTARNAL ICONS
import { MdLocationOn } from "react-icons/md";

const SelectSearch = ({
  isInput,
  label,
  variant = "",
  isGroup,
  list,
  selectProps,
  defaultValue,
  defaultLabel,
  sort,
  order,
  // sortSelect,
  onchange,
  isSort,
  setValueSearch,
  onChangee,
  // vv,
  locationChange,
  ...props
}) => {
  return (
    <div className="w-full ">
      <span className="block mb-2 font-medium text-sm text-[#374151] leading-5 capitalize">
        {label}
      </span>

      {isInput && (
        <Box
          className="flex items-center  bg-white rounded-lg border border-[#E5E7EB]"
          sx={{
            "&:hover": {
              boxShadow: 3,
            },
          }}
        >
          <MdLocationOn className="w-6 h-5 text-[#ADAEBC] ms-1.5" />
          <input
            className={` w-full sm:p-3.25 p-2 bg-white rounded-lg outline-0 cursor-pointer placeholder:text-[#ADAEBC] text-lg leading-6  ${variant}`}
            onChange={locationChange}
            {...props}
          ></input>
        </Box>
      )}

      {!isInput && (
        <GroupedSelect
          list={list}
          isGroup={isGroup}
          selectProps={selectProps}
          defaultValue={defaultValue}
          defaultLabel={defaultLabel}
          sort={sort}
          order={order}
          // sortSelect={sortSelect}
          // onchange={onchange}
          isSort={isSort}
          // setValueSearch={setValueSearch}
          onChangee={onChangee}
          // vv={vv}
        />
      )}
    </div>
  );
};

export default SelectSearch;
