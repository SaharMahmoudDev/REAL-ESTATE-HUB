import React, { useCallback, useContext } from 'react'
import { BaramsContext } from '../context/ParamsProvider';


 function useBarams() {
  const { params, setBarams } = useContext(BaramsContext);

 const handleKeyParams = useCallback(
    (key, value) => {
      setBarams((prev) => ({ ...prev, [key]: value }));
    },
    [setBarams]
  
 )
  return { params, setBarams, handleKeyParams };
  }

export default useBarams;