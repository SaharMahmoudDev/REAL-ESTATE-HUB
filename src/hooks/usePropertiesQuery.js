import { useQuery, keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
// LOCAL COMPONENTS
import { fetchProperties } from "../services/Api";
import useMediaQuery from "@mui/material/useMediaQuery";

export function usePropertiesQuery(params) {
  const limitItems = Number(params?._limit || 12);
const isMobile=useMediaQuery('(max-width:768px)')
  // const queryKey = ["properties", params];
    const queryKey = ["properties",'page', {...params,_limit:limitItems}];

//   const query = useQuery({
//     queryKey,
//     queryFn: ({ signal }) => fetchProperties({ signal, filters: params }),
//     select: (res) => {
//       const totalCount = Number(res.headers["x-total-count"] || 0);
//       const totalPages = Math.max(1, Math.ceil(totalCount / limitItems));
//       return { ...res, totalPages, limitItems, totalCount };
//     },

//     placeholderData: keepPreviousData,
//     keepPreviousData: true,
//     enabled:!isMobile
//   });
//   return query;

// }










const pageQuery = useQuery({
    queryKey,
    queryFn: ({ signal }) => fetchProperties({ signal, filters: params }),
    select: (res) => {
      const totalCount = Number(res.headers["x-total-count"] || 0);
      const totalPages = Math.max(1, Math.ceil(totalCount / limitItems));
            const items = Array.isArray(res?.data) ? res.data : [];
      const page = Number(params?._page ?? 1);

      return {items, totalPages, page,limitItems, totalCount };
    },

    placeholderData: keepPreviousData,
    keepPreviousData: true,
  
    enabled:!isMobile
  });


const infiniteQuery = useInfiniteQuery({
// queryKey:['infinit',params],
queryKey:['propirties',"infinite", {...params,_limit:limitItems}],
initialPageParam: 1,
 queryFn: ({ pageParam = 1, signal }) =>
      fetchProperties({ signal, filters: { ...params, _page: pageParam, _limit: limitItems } }),    // select: (res) => {
    //   const totalCount = Number(res.headers["x-total-count"] || 0);
    //   const totalPages = Math.max(1, Math.ceil(totalCount / limitItems));
    //   return { ...res, totalPages, limitItems, totalCount };
    // },
// getNextPageParam:(lastPage,allPages)=>{
//   if(lastPage.hasMore)
//     return allPages.length+1;
//   return undefined;
// },

 getNextPageParam: (lastPage, allPages) => {
      const totalCount = Number(lastPage?.headers?.["x-total-count"] ?? 0);
      console.log(totalCount)

      const totalPages = Math.max(1, Math.ceil(totalCount / limitItems));
      console.log(totalPages)

      const next = allPages.length + 1;
      console.log(next)
      return next <= totalPages ? next : undefined;
    },
 select: (data) => {
      const pages = data?.pages ?? [];
      const items = pages.flatMap((p) => p?.data ?? []);
      const lastHeaders = pages.at(-1)?.headers;
      const totalCount = Number(lastHeaders?.["x-total-count"] ?? 0);
      const totalPages = Math.max(1, Math.ceil(totalCount / limitItems));
      // return { items, limit, totalCount, totalPages, headers: lastHeaders };
      console.log({items})
            return { items, totalPages, limitItems, totalCount, headers: lastHeaders};

    },

    placeholderData: keepPreviousData,
    keepPreviousData: true,
    enabled:isMobile
  });

  // console.log(queryMobile)


  // return isMobile?queryMobile:query;




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



// import { useQuery, useInfiniteQuery, keepPreviousData } from "@tanstack/react-query";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { fetchProperties } from "../services/Api";

// // ملاحظة: لازم الـAPI يدعم _page و _limit وبيبعث X-Total-Count في الـheaders

// export function usePropertiesQuery(params) {
//   const limit = Number(params?._limit ?? 12);
//   const isMobile = useMediaQuery("(max-width:768px)");

//   // مفتاح موحّد عشان الكاش
//   const key = ["properties", { ...params, _limit: limit }];

//   // 1) صفحات على الشاشات الكبيرة
//   const pageQuery = useQuery({
//     queryKey: key,
//     queryFn: ({ signal }) => fetchProperties({ signal, filters: params }),
//     select: (res) => {
//       const totalCount = Number(res?.headers?.["x-total-count"] ?? 0);
//       const totalPages = Math.max(1, Math.ceil(totalCount / limit));
//       return {
//       items:res?.data ?? [],
//         page: Number(params?._page ?? 1),
//         limit,
//         totalCount,
//         totalPages,
//         headers: res?.headers,
//       };
//     },
//     placeholderData: keepPreviousData,
//     keepPreviousData: true,
//     enabled: !isMobile, // فعّل ده بس على الديسكتوب/التابلت الكبيرة
//   });

//   // 2) Infinite Scroll على الموبايل
//   const infiniteQuery = useInfiniteQuery({
//     queryKey: key,
//     initialPageParam: 1,
//     queryFn: ({ pageParam = 1, signal }) =>
//       fetchProperties({ signal, filters: { ...params, _page: pageParam, _limit: limit } }),
//     getNextPageParam: (lastPage, allPages) => {
//       const totalCount = Number(lastPage?.headers?.["x-total-count"] ?? 0);
//       const totalPages = Math.max(1, Math.ceil(totalCount / limit));
//       const next = allPages.length + 1;
//       return next <= totalPages ? next : undefined;
//     },
//     select: (data) => {
//       const pages = data?.pages ?? [];
//       const items = pages.flatMap((p) => p?.data ?? []);
//       console.log(items)
      
//       const lastHeaders = pages.at(-1)?.headers;
//       const totalCount = Number(lastHeaders?.["x-total-count"] ?? 0);
//       const totalPages = Math.max(1, Math.ceil(totalCount / limit));
//       return { items, limit, totalCount, totalPages, headers: lastHeaders };
//     },
//     enabled: isMobile, // فعّال فقط على الموبايل
//   });

//   // واجهة موحّدة للاتنين
//   if (isMobile) {
//     return {
//       ...infiniteQuery,
//       isInfinite: true,
//       items: infiniteQuery.data?.items ?? [],
//       hasMore: infiniteQuery.hasNextPage,
//       loadMore: infiniteQuery.fetchNextPage,
//       isLoadingMore: infiniteQuery.isFetchingNextPage,
//       totalPages: infiniteQuery.data?.totalPages ?? 1,
//       totalCount: infiniteQuery.data?.totalCount ?? 0,
//       limit,
//     };
//   }

//   return {
//     ...pageQuery,
//     isInfinite: false,
//     items: pageQuery.data?.items ?? [],
    
//     page: pageQuery.data?.page ?? Number(params?._page ?? 1),
//     totalPages: pageQuery.data?.totalPages ?? 1,
//     totalCount: pageQuery.data?.totalCount ?? 0,
//     limit,
//   };
  
// }
