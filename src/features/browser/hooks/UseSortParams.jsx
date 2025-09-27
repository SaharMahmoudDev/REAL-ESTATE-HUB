import React from "react";
import { ScrollInTo } from "@/components";
import { useParams } from "@/features/browser";

const useSortParams=(isSort) =>{
  const { handleKeyParams } = useParams();

  const updateKeySortOrder = React.useCallback(
    (sort, order, e) => {
      if (!isSort) return;
handleKeyParams({[sort]: e.target.value.split("-")[0],
        [order]: e.target.value.split("-")[1].trim().toLowerCase(),
        _page: 1,})
      ScrollInTo("result-section");
    },
    [isSort,handleKeyParams]
  );

  return updateKeySortOrder;
}
export default useSortParams