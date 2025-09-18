
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding } from "react-icons/fa6";
import { FaRegHeart, FaTimes } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import LiNavbar from "../ui/LiNavbar";
import LiNavbarMobile from "../ui/LiNavbarMobile";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // const navItems = ['Buy', 'Rent', 'Sell', 'Regions'];

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
        }`}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo with hover animation */}
            <motion.div 
              className="flex md:items-center md:gap-12"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.a 
                className="flex items-center gap-1" 
                href="/"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="sr-only">Home</span>
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  <FaBuilding className="h-8 w-10 text-indigo-600" />
                </motion.div>
                <motion.h2 
                  className="font-inter font-bold text-[20px] leading-[28px] tracking-normal"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Hub Estate Real
                </motion.h2>
              </motion.a>
            </motion.div>

            {/* Desktop Navigation with stagger animation */}
            <div className="hidden md:block">
              <nav aria-label="Global">
                <motion.ul 
                  className="flex items-center gap-6 text-xl"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >

<LiNavbar item='Buy' href='/buy'/>
<LiNavbar item='Rent' href='/rent'/>
<LiNavbar item='Sell' href='#'/>
<LiNavbar item='Regions' href='#'/>




                  {/* {navItems.map((item, index) => (
                    <motion.li
                      key={item}
                      variants={{
                        hidden: { y: -20, opacity: 0 },
                        visible: { y: 0, opacity: 1 }
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        color: "#4f46e5",
                        transition: { type: "spring", stiffness: 300 }
                      }}
                    >
                      <motion.a 
                        className="relative text-gray-700 font-inter font-medium text-base leading-6 tracking-normal hover:text-indigo-600 transition-colors" 
                        href="#"
                        whileHover="hover"
                      >
                        {item}
                        <motion.div
                          className="absolute bottom-0 left-0 h-0.5 bg-indigo-600"
                          initial={{ width: 0 }}
                          variants={{
                            hover: { width: "100%" }
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.a>
                    </motion.li>
                  ))} */}
                </motion.ul>
              </nav>
            </div>

            {/* Right Side Icons with animations */}
            <motion.div 
              className="flex items-center gap-2 sm:gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {/* Heart Icon with pulse animation */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  scale: { duration: 2, repeat: Infinity, repeatDelay: 3 }
                }}
              >
                <FaRegHeart className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 hover:text-red-500 transition-colors cursor-pointer" />
              </motion.div>
              
              {/* Profile Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <BsPerson className="w-7 h-7 sm:w-9 sm:h-9 text-gray-700 hover:text-indigo-600 transition-colors cursor-pointer" />
              </motion.div>

              {/* Login Button with gradient animation */}
              <div className="hidden sm:flex sm:gap-4">
                <motion.a
                  className="relative overflow-hidden rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base text-white shadow-lg font-inter font-normal leading-[100%] tracking-normal text-center"
                  href="#"
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  initial={{ backgroundPosition: "0% 50%" }}
                  variants={{
                    hover: {
                      backgroundPosition: "100% 50%",
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)"
                    }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0"
                    variants={{
                      hover: { opacity: 1 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Login / Sign Up</span>
                </motion.a>
              </div>

              {/* Mobile Menu Button with rotation */}
              <motion.button
                onClick={toggleSidebar}
                className="md:hidden p-2 text-gray-700 hover:text-indigo-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ rotate: isSidebarOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <HiMenuAlt3 className="w-6 h-6" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Sidebar with enhanced animations */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Overlay */}
            <motion.div 
              className="fixed inset-0  bg-opacity-50 backdrop-blur-sm"
              onClick={closeSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Sidebar with slide and scale animation */}
            <motion.div 
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl"
              initial={{ x: "100%", scale: 0.95 }}
              animate={{ x: 0, scale: 1 }}
              exit={{ x: "100%", scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
            >
              <div className="flex flex-col h-full">
                {/* Sidebar Header */}
                <motion.div 
                  className="flex items-center justify-between p-4 border-b border-gray-200"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 1, delay: 0.3 }}
                    >
                      <FaBuilding className="h-6 w-6 text-indigo-600" />
                    </motion.div>
                    <h3 className="font-inter font-bold text-lg">Hub Estate Real</h3>
                  </div>
                  <motion.button
                    onClick={closeSidebar}
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors rounded-full hover:bg-gray-100"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 90,
                      backgroundColor: "#fee2e2",
                      color: "#dc2626"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTimes className="w-5 h-5" />
                  </motion.button>
                </motion.div>

                {/* Navigation Links with stagger */}
                <nav className="flex-1 p-4">
                  <motion.ul 
                    className="space-y-4"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.3
                        }
                      }
                    }}
                  >
<LiNavbarMobile item='buy' href='/buy' closeSidebar={closeSidebar} />
<LiNavbarMobile item='rent' href='/rent' closeSidebar={closeSidebar} />
<LiNavbarMobile item='sell' href='#' closeSidebar={closeSidebar} />
<LiNavbarMobile item='Regions' href='#' closeSidebar={closeSidebar} />


                    {/* {navItems.map((item, index) => (
                      <motion.li
                        key={item}
                        variants={{
                          hidden: { x: 50, opacity: 0 },
                          visible: { x: 0, opacity: 1 }
                        }}
                      >
                        <motion.a 
                          href="#" 
                          className="flex items-center gap-3 p-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors font-medium"
                          onClick={closeSidebar}
                          whileHover={{ 
                            x: 10,
                            backgroundColor: "#eef2ff",
                            color: "#4f46e5"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-indigo-600 rounded-full opacity-0"
                            whileHover={{ opacity: 1, scale: 1.2 }}
                          />
                          {item}
                        </motion.a>
                      </motion.li>
                    ))} */}
                  </motion.ul>
                </nav>

                {/* Sidebar Footer with animations */}
                <motion.div 
                  className="p-4 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="space-y-3">
                    <motion.div 
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                      whileHover={{ 
                        x: 5,
                        backgroundColor: "#fef2f2",
                        color: "#dc2626"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <FaRegHeart className="w-5 h-5" />
                      </motion.div>
                      <span className="font-medium">Favorites</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                      whileHover={{ 
                        x: 5,
                        backgroundColor: "#f0f9ff",
                        color: "#0369a1"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: -10 }}
                      >
                        <BsPerson className="w-5 h-5" />
                      </motion.div>
                      <span className="font-medium">Profile</span>
                    </motion.div>
                    <motion.a
                      href="#"
                      className="block w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-center text-white font-medium shadow-lg"
                      onClick={closeSidebar}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 25px rgba(79, 70, 229, 0.3)",
                        backgroundPosition: "right center"
                      }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        backgroundSize: "200% auto"
                      }}
                    >
                      Login / Sign Up
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;
