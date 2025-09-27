import React, { useCallback, useContext } from 'react'
import { BaramsContext } from '../../../context/ParamsProvider';


 function useBarams() {
  const { params, setParams } = useContext(BaramsContext);

 const handleKeyParams = useCallback(
    (newKeyParams) => {
      setParams((prev) => ({ ...prev, ...newKeyParams }));
    },
    [setParams]
  
 )
  return { params, setParams, handleKeyParams };
  }

export default useBarams;

