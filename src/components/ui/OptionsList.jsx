// import React from "react";
// //  EXTARNAL COMPONENTS
// import { MenuItem } from "@mui/material";

// const OptionsList = ({ list = [], personName, getStyles, theme }) => {
//   //  GROUBED LIST
//   const isGrouped = list.length > 0 && list[0].options;

//   if (isGrouped) {
//     return (
//       <>
//         {list.map((group, gIdx) => (
//           <optgroup key={gIdx} label={group.group}>
//             {group.options.map((opt, idx) => (
//               <option key={idx} value={opt.value || opt}>
//                 {opt.label || opt}
//               </option>
//             ))}
//           </optgroup>
//         ))}
//       </>
//     );
//   }

//   //  FLAT LIST
//   return (
//     <>
//       {list.map((item, idx) => (
//         <MenuItem
//           key={`${item}${idx}`}
//           value={item.value || item}
//           style={getStyles(item, personName, theme)}
//         >
//           {item.value}
//         </MenuItem>
//       ))}
//     </>
//   );
// };

// export default OptionsList;
