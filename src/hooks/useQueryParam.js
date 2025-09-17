// import { useSearchParams } from "react-router-dom";

// export function useQueryParam(key, defaultValue = "") {
//   const [params, setParams] = useSearchParams();
//   const value = params.get(key) ?? defaultValue;

//   function setValue(v) {
//     const next = new URLSearchParams(params);
//     if (v == null || v === "") next.delete(key);
//     else next.set(key, v);
//     setParams(next, { replace: true });
//   }
//   return [value, setValue];
// }