import { useQuery, keepPreviousData } from "@tanstack/react-query";
// LOCAL COMPONENTS
import { fetchProperties } from "../services/Api";

export function usePropertiesQuery(params) {
  const limitItems = Number(params?._limit || 12);

  const queryKey = ["properties", params];
  const query = useQuery({
    queryKey,
    queryFn: ({ signal }) => fetchProperties({ signal, filters: params }),
    select: (res) => {
      const totalCount = Number(res.headers["x-total-count"] || 0);
      const totalPages = Math.max(1, Math.ceil(totalCount / limitItems));
      return { ...res, totalPages, limitItems, totalCount };
    },

    placeholderData: keepPreviousData,
    keepPreviousData: true,
  });
  return query;
}
