import React from "react";

const Button = ({
  as = "button",
  variant = "",
  children,
  isActive,
  ...props
}) => {
  const Component = as || "button";
  return (
    <Component
      className={`${
        isActive == true ? "gray-interactive" : "purple-interactive"
      } py-2 px-3 text-center rounded-lg capitalize font-medium leading-6 cursor-pointer  ${variant}
        
      `}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
