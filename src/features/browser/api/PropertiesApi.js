import axios from "axios";
const isDev = process.env.NODE_ENV === "development";
export const API_URL = isDev
  ? "http://localhost:5174"
  : "https://real-estate-hub-data-api.onrender.com";

function buildPropertyParams(filters = {}) {
  const p = new URLSearchParams();

  const setIf = (key, val) => {
    if (val !== "" && val !== null && val !== undefined)
      p.set(key, String(val));
  };
  // BUY & RENT
  setIf("status", filters.status);
  // FILTERS
  setIf("bedrooms", filters.bedrooms);
  setIf("bathrooms", filters.bathrooms);
  setIf("area_sqm_gte", filters.area_sqm_gte);
  setIf("area_sqm_lte", filters.area_sqm_lte);

  // SORT
  setIf("_sort", filters._sort);
  setIf("_order", filters._order && String(filters._order).toLowerCase());
  //  SEARCH
  setIf("type", filters.type && filters.type.toUpperCase());
  setIf("price_gte", filters.price_lte);
  setIf("price_lte", filters.price_gte);
  setIf("city_like", filters.city_like);
  // PAGINATION
  setIf("_limit", filters._limit);
  setIf("_page", filters._page);

  return p;
}

 async function fetchProperties({ signal, filters = {} }) {
  const params = buildPropertyParams(filters);
  const res = await axios.get(`${API_URL}/properties`, { signal, params });
  return res;
}
export default fetchProperties