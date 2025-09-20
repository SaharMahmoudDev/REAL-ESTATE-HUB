import React from "react";
// LOCAL COMPONENTS
import Navbar from "./../components/common/Navbar";
import { layoutVariants } from "../animations/BrowserAnimation";
import Footer from "./../components/common/Footer";
import ScrollTopButton from "../components/ui/ScrollTopButton";

// EXTARNAL COMPONENTS
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Layout = () => {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          variants={layoutVariants}
          initial="hidden"
          whileInView="show"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <ScrollTopButton />
      <Footer />
    </>
  );
};

export default Layout;
