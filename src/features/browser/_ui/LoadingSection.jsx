import React from 'react'
// LOCAL COMPONENTS
import {Section,Heading} from '@/components'

// EXTERNAL COMPONENTS
import { CircularProgress } from '@mui/material'

const LoadingSection = ({saleOrRent,isAllPage,variant}) => {
  return (
  <Section variant='!border-b-0'>
    {!isAllPage&&
        <Heading
          label={`Properties for ${saleOrRent}`}
          variant="!font-semibold !text-xl !leading-7 "
        />
    }
        <div className={`min-h-[500px] flex justify-center items-center ${variant}`}>
          <CircularProgress/>
        </div>
      </Section>  )
}

export default LoadingSection