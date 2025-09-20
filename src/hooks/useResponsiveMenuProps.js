import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

export function useResponsiveMenuProps() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const mobileMenuProps = {
    anchorReference: "none",
    slotProps: {
      backdrop: {
        sx: {
          backgroundColor: "rgba(0, 0, 0, 0.35)", 
        },
      },
    },
    PaperProps: {
      sx: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) !important",
        width: "90% !important",
        maxHeight: "70vh",
        borderRadius: 2,
        boxShadow: 6,

          "& .MuiMenuItem-root": {
            width:'100%',
            // borderBottom:'1px solid #f5f5f5'
        
        },
      },
    },
  };
 
  

  return isMobile&& mobileMenuProps ;
}
