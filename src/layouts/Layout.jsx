import React from "react";
// LOCAL COMPONENTS
import Navbar from "./../components/common/Navbar";
import { layoutVariants } from "../animations/BrowserAnimation";
import Footer from "./../components/common/Footer";

// EXTARNAL COMPONENTS
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import ScrollTopButton from "../components/ui/ScrollTopButton";

const Layout = () => {
  const locatin = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          // key={locatin.pathname}
          variants={layoutVariants}
          initial="hidden"
          whileInView="show"
          // animate='show'
          // exit="exit"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <ScrollTopButton/>
      <Footer />
    </>
  );
};

export default Layout;
