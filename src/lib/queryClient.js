// import { QueryClient } from './../../node_modules/@tanstack/query-core/src/queryClient';
import { QueryClient } from "@tanstack/react-query";


export const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      // staleTime:30_000,
        staleTime:1000 * 60,
    cachTime:1000 * 60 * 5,
      refetchOnWindowFocus:false,
      retry:1
    }
  }
})