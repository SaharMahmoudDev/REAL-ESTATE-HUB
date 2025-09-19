import { createContext, useState } from "react";

export const BaramsContext = createContext();
export const ParamsProvider = ({ children }) => {
  const [params, setBarams] = useState({
    status: null,
    bedrooms: null,
    bathrooms: null,
    area_sqm_gte: null,
    area_sqm_lte: null,
    _sort:'price',
    _order:'asc',
    type:null,
    price_gte:null,
    price_lte:null,
    city_like:null,
    _page:1,
    _limit:2

  });

  return (
    <BaramsContext.Provider value={{ params, setBarams }}>
      {children}
    </BaramsContext.Provider>
  );
};
