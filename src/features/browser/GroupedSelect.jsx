import * as React from "react";
// LOCAL COMPONENTS
import { BaramsContext } from "../../context/ParamsProvider";

// EXTARNAL COMPONENTS
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function MyListSubheader(props) {
  return <ListSubheader {...props} />;
}
MyListSubheader.muiSkipListHighlight = true;

export default function GroupedSelect({
  list = [],
  isGroup,
  selectProps = {},
  defaultValue = "",
  defaultLabel,
  sort,
  order,
  // sortSelect,
  // onchange,
  isSort,
  onChangee,
  variant
  // setValueSearch,
  // locationChange,
}) {
  const { setBarams} = React.useContext(BaramsContext);

  const updateKeySortOrder = (sort, order, e) => {
    if (isSort == true) {
      setValue(e.target.value);
                    setBarams((prev) => ({ ...prev, [sort]: e.target.value.split("-")[0], 
                      [order]: e.target.value.split("-")[1].trim().toLowerCase()
                    }))

    }
  };
  const defaultSx = {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E5E7EB",
      borderRadius: "8px",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",

      boxShadow: 3,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E5E7EB",
      borderWidth: 1.5,
    },
    "& .css-18jp67o-MuiNativeSelect-root-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
      {
        // py: 1.75,
        "@media (max-width:640px)": {
          // py: 1.1,
        },
      },
       "& .MuiSelect-select": {
        p:1,
        // height:"1rem"
       }
  };
  const mergedSx = { ...defaultSx, ...selectProps.sx };

  const [value, setValue] = React.useState(defaultValue ?? "");

  return (
    <div>
      <FormControl
        fullWidth
        sx={{ minWidth: 150, background: "white", fontStyle: "normal"}}
      >
        <Select
        className={`h-12.5 ${variant}`}
          displayEmpty
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
onChangee?.(e.target.value)
            updateKeySortOrder(sort, order, e);
          
          }}
          id="grouped-select"
          SelectDisplayProps={{
            "aria-labelledby": "grouped-select-label",
          }}
          sx={mergedSx}
        >
          
          <MenuItem value={isSort ? defaultValue : ""} className="capitalize">
            {defaultLabel}
          </MenuItem>
          {isGroup &&
            list.flatMap((group, gIdx) => [
              <MyListSubheader key={`hdr-${gIdx}`}>
                {group.group}
              </MyListSubheader>,
              ...group.options.map((opt, idx) => (
                <MenuItem
                  key={`opt-${gIdx}-${idx}`}
                  value={opt.value ?? opt}
                  sx={{ textTransform: "capitalize" }}
                >
                  {opt.label ?? opt}
                </MenuItem>
              )),
            ])}

          {!isGroup &&
            list.map((item, idx) => (
              <MenuItem 
                key={`hdr-${idx}`}
                value={item.value ?? item}
                sx={{ textTransform: "capitalize" }}
              >
                {item.label ?? item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}

