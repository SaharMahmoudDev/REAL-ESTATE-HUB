import React from 'react'

// LOCAL COMPONENTS
import {IconLabel} from "@/features/browser";

// LOCAL ICONS
import   Icon from '../../../assets/photos/Vector (1).svg?react'

// EXTERNAL ICONS
import {FaExpandArrowsAlt } from "react-icons/fa";
import HotelIcon from "@mui/icons-material/Hotel";

const DetailsRooms=({bedrooms,bathrooms,areaSqm})=> {
  return (
  <div className="flex  items-center gap-3 flex-wrap">
          <IconLabel label={`${bedrooms} beds`} icon={HotelIcon} />
          <IconLabel
            label={`${bathrooms} bath`}
            icon={Icon} 
            iconProps={{ sx: { fontSize: 16 } }}
            variant='mb-1'
          />
          <IconLabel
            label={`${areaSqm} sqft`}
            icon={FaExpandArrowsAlt}
            variant="font-bold"
          />
        </div>  )
}

export default DetailsRooms