import { useMemo } from "react";

 function useMinMaxValue(arrayInput, key) {
  return useMemo(() => {
    const array=Array.isArray(arrayInput) ?arrayInput:[]
    if (array.length === 0||!key) {
      return { min: null, max: null, minObj: null, maxObj: null };
    }

    const minObj = array.reduce((min, item) =>
      item[key] < min[key] ? item : min
    );
    const maxObj = array.reduce((max, item) =>
      item[key] > max[key] ? item : max
    );

    return {
      min: minObj[key],
      max: maxObj[key],
      minObj,
      maxObj,
    };
  }, [key,arrayInput]);
}
export default useMinMaxValue