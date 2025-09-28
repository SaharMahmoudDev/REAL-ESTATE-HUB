import React from "react";
// LOCAL COMPONENTS
import { useResponsiveMenuProps} from "@/features/browser";

// EXTARNAL COMPONENTS
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function MyListSubheader(props) {
  return <ListSubheader {...props} />;
}
MyListSubheader.muiSkipListHighlight = true;

const GroupedSelect = React.memo(
  ({
    list = [],
    selectProps = {},
    defaultValue = "",
    defaultLabel,
    updateParams,
    variant,
  }) => {
    const [value, setValue] = React.useState( defaultValue??"");

    const menuProps = useResponsiveMenuProps();

    const itemOption = (item, idx) => {
      return (
        <MenuItem
          key={`hdr-${idx}`}
          value={item.value ?? item}
          sx={{ textTransform: "capitalize" }}
        >
          {item.label ?? item}
        </MenuItem>
      );
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

      "& .MuiSelect-select": {
        p: 1,
      },
    };
    const mergedSx = { ...defaultSx, ...selectProps.sx };

    return (
      <div>
        <FormControl
          fullWidth
          sx={{ minWidth: 150, background: "white", fontStyle: "normal" }}
        >
          <Select
            className={`h-12.5 ${variant}`}
            displayEmpty
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              updateParams?.(e.target.value);
            }}
            id="grouped-select"
            SelectDisplayProps={{
              "aria-labelledby": "grouped-select-label",
            }}
            sx={mergedSx}
            MenuProps={menuProps}
          >
            <MenuItem value={defaultValue} className="capitalize">
              {defaultLabel}
            </MenuItem>
            {list[0]?.group &&
              list.flatMap((group, gIdx) => [
                <MyListSubheader
                  key={`hdr-${gIdx}`}
                  sx={{ fontWeight: "900", color: "black" }}
                >
                  {`.${group.group}`}
                </MyListSubheader>,
                ...group.options.map((opt, idx) =>
                  itemOption(opt, `opt-${gIdx}-${idx}`)
                ),
              ])}

            {!list[0]?.group && list?.map((item, idx) => itemOption(item, idx))}
          </Select>
        </FormControl>
      </div>
    );
  }
);

export default GroupedSelect;
