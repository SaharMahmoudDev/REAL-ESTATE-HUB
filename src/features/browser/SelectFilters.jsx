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
          "& .css-18jp67o-MuiNativeSelect-root-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
            {
              paddingRight:0,

              px: 2,
              py: 1,
              background: "var(--color-secondary)",
              // background: "#F3F4F6",
              borderRadius: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              "@media (max-width:600px)": {
                px: 1,
                py: 0.5,
              },
            },
          // "& .css-piust8": {
          //   background: "#F3F4F6",
          // },
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
