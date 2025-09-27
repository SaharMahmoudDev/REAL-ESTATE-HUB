import React from "react";
//  EXTARNAL COMPONENTS
import { Box, Slider, Typography } from "@mui/material";

const RangeOption = ({ onChange, handleCommit, valueSlider }) => {
  return (
    <Box className="w-screen sm:w-md py-1 px-2 ">
      <Typography gutterBottom>Area (m²)</Typography>
      <Slider
        value={valueSlider}
        onChange={onChange}
        onChangeCommitted={handleCommit}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        step={10}
      />
      <Typography variant="body2">
        Selected: {valueSlider[0]} m² - {valueSlider[1]} m²
      </Typography>
    </Box>
  );
};

export default RangeOption;
