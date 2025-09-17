import React from "react";

const Button = ({
  as = "button",
  variant = "",
  children,
  isActive = true,
  ...props
}) => {
  const Component = as || "button";
  return (
    <Component
      className={`py-2 px-3 text-center rounded-lg capitalize font-medium leading-6 cursor-pointer transition ${variant} ${
        isActive ? "!bg-primary text-white" : "!bg-secondary text-[#4B5563]"
      }`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
