import React, { useCallback, useContext } from 'react'
import { BaramsContext } from '../context/ParamsProvider';


 function useBarams() {
  const { params, setParams } = useContext(BaramsContext);

 const handleKeyParams = useCallback(
    (key, value) => {
      setParams((prev) => ({ ...prev, [key]: value }));
    },
    [setParams]
  
 )
  return { params, setParams, handleKeyParams };
  }

export default useBarams;