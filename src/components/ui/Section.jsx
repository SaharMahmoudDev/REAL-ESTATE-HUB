import React from "react";

const Section = ({ children, variant = "", ...props }) => {
  return (
    <section
      className={`w-full  py-3 sm:py-8 text-white bg-white  border-b border-b-[#E5E7EB]
   ${variant}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-2 lg:px-5">{children}</div>
    </section>
  );
};

export default Section;
