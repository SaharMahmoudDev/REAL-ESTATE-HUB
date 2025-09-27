import React, { useMemo } from "react";

//  LOCAL COMPONENTS
import {Button} from "@/components";
import {IconLabel,DetailsRooms} from "@/features/browser";
import { cardVariants } from "../../../animations/BrowserAnimation";

//EXTERNAL COMPONENTS
import { Link } from "react-router-dom";
import { delay, motion } from "framer-motion";

// EXTERNAL Icons
import { MdLocationOn } from "react-icons/md";
import { Heart } from "lucide-react";

// EXTERNAL HOOKS
import { useSnackbar } from "notistack";

const CardBrowser = React.memo(({ view, data, i }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [liked, setLiked] = React.useState(false);

  const handleClickVariant = (message, variant) => () => {
    setLiked(perv => !perv);
    enqueueSnackbar(message, { variant });

  };
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
      className={`max-w-2xl bg-white border border-[#E5E7EB] rounded-xl overflow-y-hidden shadow-sm ${
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
          <button
            className={`flex items-center  justify-center w-8 h-8 text-[#9CA3AF] rounded-full bg-white hover:bg-gray-100 ${
              liked && "bg-gray-100 text-red-500"
            } shadow-sm cursor-pointer hover:text-red-500 `}
            onClick={
              handleClickVariant(
                liked
                  ? `${data.title} removed from wishlist!`
                  : `${data.title} added to wishlist`,

                liked ? 'info' : "success"
              )
            }
          >
            <Heart className="h-4 w-4 text-inherit" />
          </button>
        </div>
        {/* IMAGE */}
        <img
          src={data.images[0]}
          alt={data.title}
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

        <Button as={Link} to="#" variant=" w-full block purple-interactive  mt-3">
          view details
        </Button>
      </div>
    </motion.div>
  );
})

export default CardBrowser;
