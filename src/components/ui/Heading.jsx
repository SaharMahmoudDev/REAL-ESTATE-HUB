import React from "react";

export const Heading = ({ label, text, variant = "" }) => {
  return (
    <div className="capitalize ">
      <h4
        className={`font-bold text-2xl text-[#111827]  leading-8 mb-2 ${variant}`}
      >
        {label}
      </h4>
      <p className={`text-[#4B5563] font-normal leading-6 `}>{text}</p>
    </div>
  );
};
