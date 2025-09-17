import React from "react";

const IconLabel = ({
  icon,
  label,
  iconProps = {},
  variant = "",
  variantDiv = "",
  variantSpan = "",
}) => {
  const Icon = icon;
  const defaultSx = { fontSize: 19, color: "#4B5563" };
  const mergedSx = { ...defaultSx, ...iconProps.sx };
  return (
    <div className={`flex  items-center ${variantDiv}`}>
      <Icon
        {...iconProps}
        sx={mergedSx}
        className={`text-xs font-bold text-[#4B5563]  me-1 ${variant}`}
      />
      <span
        className={`inline-block text-[#4B5563] text-sm font-normal leading-5 ${variantSpan}`}
      >
        {label}
      </span>
    </div>
  );
};

export default IconLabel;
