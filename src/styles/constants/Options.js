export const PRICE_RANGE_OPTIONS = [
  {value:{ min: 0, max: 20000 },label:"0 - 20,000"},
  {value:{ min: 20000, max: 1000000 },label:"20,000 - 1,000,000"},
  {value:{ min: 1000000, max: 3000000 },label:"1,000,000 - 3,000,000"},
  {value:{ min: 3000000, max: 10000000 },label:"3,000,000 - 10,000,000"},
    {value:{ min: 10000000, max: 'M10+' },label:"10,000,000 +"}

  
];

export const PROPERTY_TYPES = [
  {
    group: "Residential",
    options: [
      { value: "apartment", label: "Apartment" },
      { value: "studio", label: "Studio" },
      { value: "duplex", label: "Duplex" },
      { value: "penthouse", label: "Penthouse" },
      { value: "villa", label: "Villa" },
      { value: "twin-house", label: "Twin House" },
      { value: "townhouse", label: "Townhouse" },
      { value: "house", label: "House" },
      { value: "chalet", label: "Chalet" },
      { value: "roof-unit", label: "Roof Unit" },
      { value: "room", label: "Room" },
      { value: "shared", label: "Shared Accommodation" },
    ],
  },
  {
    group: "Commercial",
    options: [
      { value: "office", label: "Office" },
      { value: "cowork", label: "Coworking Space" },
      { value: "shop", label: "Retail Shop" },
      { value: "restaurant", label: "Restaurant/Café" },
      { value: "clinic", label: "Clinic" },
      { value: "medical", label: "Medical Center" },
      { value: "showroom", label: "Showroom" },
      { value: "hotel", label: "Hotel/Hostel" },
      { value: "warehouse", label: "Warehouse" },
    ],
  },
  {
    group: "Industrial",
    options: [
      { value: "factory", label: "Factory" },
      { value: "workshop", label: "Workshop" },
      { value: "yard", label: "Storage Yard" },
    ],
  },
  {
    group: "Land",
    options: [
      { value: "residential-land", label: "Residential Land" },
      { value: "commercial-land", label: "Commercial Land" },
      { value: "industrial-land", label: "Industrial Land" },
      { value: "agricultural-land", label: "Agricultural Land" },
      { value: "coastal-land", label: "Coastal Land" },
    ],
  },
  {
    group: "Investment",
    options: [
      { value: "building", label: "Whole Building" },
      { value: "portfolio", label: "Real Estate Portfolio" },
      { value: "land-bank", label: "Land Bank" },
    ],
  },
  {
    group: "Ancillaries",
    options: [
      { value: "garage", label: "Garage/Parking" },
      { value: "basement", label: "Basement" },
      { value: "storage", label: "Storage Unit" },
    ],
  },
];

export const SORT_OPTIONS = [
    // { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "area_sqm-asc", label: "Area: Small to Large" },
  { value: "area_sqm-desc", label: "Area: Large to Small" },
  { value: "listed_at-desc", label: "Newest" },
  { value: "listed_at-asc", label: "Oldest" },
];
