import React, { useContext, useState } from "react";
// LOCAL COMPONENTS
import IconLabel from "../../components/ui/IconLabel";
import RangeOption from "../../components/common/RangeOption";
import { BaramsContext } from "../../context/ParamsProvider";

// EXTERNAL COMPONENTS
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

const SelectFilters = ({
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

  const { setBarams } = useContext(BaramsContext);

  const handleChange = (_, newValue) => {
    setValueRange(newValue);
  };
  const handleCommit = (_, newValue) => {
    setValueRange(newValue);
    setBarams((prev) => ({
      ...prev,
      area_sqm_gte: newValue[0],
      area_sqm_lte: newValue[1],
    }));
  };

  return (
    <>
      <Select
        className="gray-interactive  px-2 py-1 sm:px-3 sm:py-2 !rounded-lg"
        displayEmpty
        variant="outlined"
        value={value}
        onChange={(e) => {
          isNumeric && setValue(e.target.value);
          setBarams((prev) => ({ ...prev, [keyParams]: e.target.value }));
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
      >
        {isNumeric == true ? (
          Array.from({ length: to - from + 1 }, (_, i) =>
            i == 0 ? (
              <MenuItem key={i} value="">
                all
              </MenuItem>
            ) : (
              <MenuItem key={i} value={i + from - 1}>
                {i + from - 1}
              </MenuItem>
            )
          )
        ) : (
          <RangeOption
            onChange={handleChange}
            handleCommit={handleCommit}
            valueSlider={valueRange}
          />
        )}
      </Select>
    </>
  );
};

export default SelectFilters;
