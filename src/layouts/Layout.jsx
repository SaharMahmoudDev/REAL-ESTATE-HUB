import React from "react";
// LOCAL COMPONENTS
import {Footer,Navbar,ScrollTopButton} from'@/components'
import { layoutVariants } from "../animations/BrowserAnimation";

// EXTARNAL COMPONENTS
import { Outlet } from "react-router-dom";
import { AnimatePresence,motion } from "framer-motion";

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
