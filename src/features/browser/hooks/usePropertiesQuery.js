
// LOCAL COMPONENTS
import { fetchProperties } from "@/features/browser";

// EXTERNAL COMPONENTS
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  useQuery,
  keepPreviousData,
  useInfiniteQuery,
} from "@tanstack/react-query";

 function usePropertiesQuery(params) {
  const limitItems = Number(params?._limit || 12);
  const isMobile = useMediaQuery("(max-width:768px)");
  const queryKey = ["properties", "page", { ...params, _limit: limitItems }];

  const pageQuery = useQuery({
    queryKey,
    queryFn: ({ signal }) => fetchProperties({ signal, filters: params }),
    select: (res) => {
      const totalCount = Number(res.headers["x-total-count"] || 0);
      const totalPages = Math.max(1, Math.ceil(totalCount / limitItems));
      const items = Array.isArray(res?.data) ? res.data : [];
      const page = Number(params?._page ?? 1);

      return { items, totalPages, page, limitItems, totalCount };
    },

    placeholderData: keepPreviousData,
    keepPreviousData: true,

    enabled: !isMobile,
  });

  const infiniteQuery = useInfiniteQuery({
    queryKey: ["propirties", "infinite", { ...params, _limit: limitItems }],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1, signal }) =>
      fetchProperties({
        signal,
        filters: { ...params, _page: pageParam, _limit: limitItems },
      }), 
    getNextPageParam: (lastPage, allPages) => {
      const totalCount = Number(lastPage?.headers?.["x-total-count"] ?? 0);

      const totalPages = Math.max(1, Math.ceil(totalCount / limitItems));

      const next = allPages.length + 1;
      return next <= totalPages ? next : undefined;
    },
    select: (data) => {
      const pages = data?.pages ?? [];
      const items = pages.flatMap((p) => p?.data ?? []);
      const lastHeaders = pages.at(-1)?.headers;
      const totalCount = Number(lastHeaders?.["x-total-count"] ?? 0);
      const totalPages = Math.max(1, Math.ceil(totalCount / limitItems));
      return {
        items,
        totalPages,
        limitItems,
        totalCount,
        headers: lastHeaders,
      };
    },

    placeholderData: keepPreviousData,
    keepPreviousData: true,
    enabled: isMobile,
  });
  if (isMobile) {
    return {
      ...infiniteQuery,
      isInfinite: true,
      items: infiniteQuery.data?.items ?? [],
      hasMore: infiniteQuery.hasNextPage,
      loadMore: infiniteQuery.fetchNextPage,
      isLoadingMore: infiniteQuery.isFetchingNextPage,
      totalPages: infiniteQuery.data?.totalPages ?? 1,
      totalCount: infiniteQuery.data?.totalCount ?? 0,
      limitItems,
    };
  }

  return {
    ...pageQuery,
    isInfinite: false,
    items: pageQuery.data?.items ?? [],
    page: pageQuery.data?.page ?? Number(params?._page ?? 1),
    totalPages: pageQuery.data?.totalPages ?? 1,
    totalCount: pageQuery.data?.totalCount ?? 0,
    limitItems,
  };
}
export default usePropertiesQuery