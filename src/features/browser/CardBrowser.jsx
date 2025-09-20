import React, { useMemo } from "react";

//  LOCAL COMPONENTS
import Button from "../../components/ui/Button";
import IconLabel from "../../components/ui/IconLabel";
import DetailsRooms from "./DetailsRooms";
import { cardVariants } from "../../animations/BrowserAnimation";

//EXTERNAL COMPONENTS
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";

// LOCAL Icons
import { MdLocationOn } from "react-icons/md";
import { Heart } from "lucide-react";

const CardBrowser = ({ view, data, i }) => {
  const stylePrimum = useMemo(() => {
    const pp = data.badge.toLowerCase();
    return pp == "new"
      ? "bg-[#EF4444]"
      : pp == "primum"
      ? "bg-[#D4AF37]"
      : "bg-primary";
  }, [data]);

  return (
    <motion.div
      variants={cardVariants(i)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      exit="exit"
      layout="position"
      className={`max-w-2xl bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm ${
        !view && "md:w-2xl"
      }`}
    >
      {/*IMGE CONTAINIER  */}
      <div className="relative rounded-t-xl ">
        {/* FEATURED & HEART ICON*/}
        <div className=" absolute top-3 left-3 right-3  flex justify-between items-center flex-wrap">
          <span
            className={`block px-3 py-1 text-white text-sm font-medium leading-5 capitalize  ${stylePrimum} rounded-4xl`}
          >
            {data.badge}
          </span>

          <button className="flex items-center  justify-center w-8 h-8 text-[#9CA3AF] rounded-full bg-white hover:bg-gray-100 focus:bg-gray-100 shadow-sm cursor-pointer hover:text-red-500 focus:text-red-500">
            <Heart className="h-4 w-4   text-inherit" />
          </button>
        </div>
        {/* IMAGE */}
        <img
          src={data.images[0]}
          alt="title"
          className=" w-full object-cover rounded-t-xl rounded-b-none"
          loading="lazy"
        />
      </div>

      {/*DETAILS CONTAINIER */}
      <div className="p-3 sm:p-6 text-black capitalize">
        {/* FOR SALE */}
        <div className="flex justify-between items-center flex-wrap">
          <span className="block text-[#111827] text-xl font-bold leading-7">
            ${data.price}
          </span>
          <span className="text-[#6B7280] text-sm font-normal leading-5 ">
            {data.status.toLowerCase() == "FOR_SALE".toLowerCase()
              ? "for sale"
              : "for rent"}
          </span>
        </div>

        {/* HEADING */}
        <h3 className="text-[#111827] text-base leading-6 font-medium mt-3 mb-2">
          {data.title}
        </h3>

        {/* LOCATION*/}

        <IconLabel
          label={data.address}
          icon={MdLocationOn}
          variantDiv="mb-3 gap-2"
          variant="!text-lg -ms-1 !me-0"
        />

        {/* BED & BATH & SIZE */}

        <DetailsRooms
          bedrooms={data.bedrooms}
          bathrooms={data.bathrooms}
          areaSqm={data.area_sqm}
        />

        <Button as={Link} to="/" variant=" w-full block  text-white mt-3">
          view details
        </Button>
      </div>
    </motion.div>
  );
};

export default CardBrowser;
