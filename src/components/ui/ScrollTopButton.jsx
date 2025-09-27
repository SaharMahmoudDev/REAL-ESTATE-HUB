import React, { useEffect, useState } from "react";
// EXTERNAL COMPONENTS
import { Fab, Zoom } from "@mui/material";

// EXTERNAL ICONS
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <Zoom in={visible}>
      <Fab
        className="bg-gradient-to-r from-blue-500 to-purple-700 !text-white hover:bg-gradient-to-l
      transition"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 50,
          right: 16,
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
