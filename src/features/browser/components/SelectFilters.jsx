import React, { useCallback, useState } from "react";
// LOCAL COMPONENTS
import { ScrollInTo } from "@/components";
import {
  RangeOption,
  IconLabel,
  useResponsiveMenuProps,
  useParams,
} from "@/features/browser";

// EXTERNAL COMPONENTS
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

const SelectFilters = React.memo(({
  text,
  icon,
  variant = "",
  iconProps,
  from,
  to,
  isNumeric,
  keyParams,
  props,
}) => {
  const [value, setValue] = useState("");

  const [valueRange, setValueRange] = useState([0, 0]);
  const { handleKeyParams } = useParams();

  const handleChange = useCallback(
    (_, newValue) => {
      setValueRange(newValue);
    },
    [setValueRange]
  );
  const handleCommit = useCallback(
    (_, newValue) => {
      setValueRange(newValue);
      handleKeyParams({
        area_sqm_gte: newValue[0],
        area_sqm_lte: newValue[1],
        _page: 1,
      });

      ScrollInTo("result-section");
    },
    [handleKeyParams]
  );
  const menuProps = useResponsiveMenuProps();

  return (
    <>
      <Select
        className="gray-interactive px-4 sm:px-6 py-2.25 !rounded-lg"
        displayEmpty
        variant="outlined"
        value={value}
        onChange={(e) => {
          isNumeric && setValue(e.target.value);
          handleKeyParams({ [keyParams]: e.target.value, _page: 1 });
          ScrollInTo("result-section");
        }}
        {...props}
        IconComponent={null}
        renderValue={(selected) => {
          const labelTextNum = selected ? `${selected} ${text}` : text;
          const labelTextSiz =
            valueRange[0] > 0 || valueRange[1] > 0
              ? `${valueRange[0]} - ${valueRange[1]} ${text}`
              : text;

          return (
            <IconLabel
              label={isNumeric ? labelTextNum : labelTextSiz}
              icon={icon}
              iconProps={iconProps}
              variantSpan="sm:text-base"
              variant={variant}
            />
          );
        }}
        sx={{
          "& .MuiSelect-select": {
            padding: 0,
            paddingRight: "0 !important",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "unset",
          },

          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        MenuProps={menuProps}
      >
        {isNumeric == true ? (
          Array.from({ length: to - from + 1 }, (_, i) =>
            i == 0 ? (
              <MenuItem
                key={i}
                value=""
                className="w-screen sm:!w-auto !justify-center sm:!justify-start"
              >
                all
              </MenuItem>
            ) : (
              <MenuItem
                key={i}
                value={i + from - 1}
                className=" w-screen sm:!w-auto !justify-center sm:!justify-start"
              >
                {i + from - 1}
              </MenuItem>
            )
          )
        ) : (
          <MenuItem disableRipple>
            <RangeOption
              onChange={handleChange}
              handleCommit={handleCommit}
              valueSlider={valueRange}
            />
          </MenuItem>
        )}
      </Select>
    </>
  );
})

export default SelectFilters;
