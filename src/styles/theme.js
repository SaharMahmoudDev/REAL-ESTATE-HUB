import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#4F46E5" },
    secondary: { main: "#F3F4F6" },
  },
  components: {
  MuiCssBaseline: {
    styleOverrides: {
      ".purple-interactive": {
        backgroundColor: "var(--color-primary)",
        color: "#fff",
        // borderRadius: 8,
        transition:
          "transform 120ms ease, box-shadow 120ms ease, background 120ms ease",
        "&:hover": {
          // backgroundColor: "var(--color-hover-pri)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
        },
        "&:active": {
          backgroundColor: "var(--color-active-pri)",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
          transform: "scale(0.97)",
        },
      },

      ".gray-interactive": {
        backgroundColor: "var(--color-secondary)",
        color: "#111", 
        // borderRadius: 8,
        transition:
          "transform 120ms ease, box-shadow 120ms ease, background 120ms ease",
        "&:hover": {
          backgroundColor: "var(--color-hover-sec)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
        },
        "&:active": {
          backgroundColor: "var(--color-active-sec)",
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2)",
          transform: "scale(0.97)",
        },
      },
    },
  },
}

});
// sx={{
//   bgcolor: "#6D28D9",
//   "&:hover": {
//     bgcolor: "#7C3AED",
//     boxShadow: 4,
//   },
//   "&:active": {
//     bgcolor: "#5B21B6",
//     boxShadow: "inset 0px 2px 4px rgba(0,0,0,0.3)",
//     transform: "scale(0.97)",
//   },
// }}
