import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaBuilding } from 'react-icons/fa';
import ScrollTopButton from '../ui/ScrollTopButton';

const Footer = () => {
  const services = [
    "Buy Property",
    "Rent Property", 
    "Sell Property",
    "Property Management"
  ];

  const regions = [
    "Egypt",
    "Dubai & UAE",
    "Europe",
    "Africa"
  ];

  const socialLinks = [
    { icon: FaFacebookF, color: "hover:bg-blue-600", href: "#" },
    { icon: FaTwitter, color: "hover:bg-blue-400", href: "#" },
    { icon: FaLinkedinIn, color: "hover:bg-blue-700", href: "#" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
              <ScrollTopButton/>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-indigo-500 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-24 h-24 bg-purple-500 rounded-full"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-blue-500 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <motion.div 
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                animate={{
                  rotateY: [0, 10, -10, 0],
                }}
                style={{
                  rotateY: 0,
                  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <FaBuilding className="text-indigo-400 text-lg" />
              </motion.div>
              <motion.span 
                className="text-xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Hub Estate Real
              </motion.span>
            </motion.div>
            <motion.p 
              className="text-gray-400 leading-relaxed text-sm md:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Your global partner in premium real estate discovery and transactions.
            </motion.p>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold mb-6 relative"
              whileHover={{ color: "#818cf8" }}
              transition={{ duration: 0.3 }}
            >
              Services
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-indigo-400"
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </motion.h3>
            <motion.ul 
              className="space-y-3"
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.li key={index} variants={listItemVariants}>
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base relative group"
                    whileHover={{ 
                      x: 5,
                      color: "#ffffff"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: -15, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:ml-6 transition-all duration-200">
                      {service}
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Regions Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold mb-6 relative"
              whileHover={{ color: "#a78bfa" }}
              transition={{ duration: 0.3 }}
            >
              Regions
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-purple-400"
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </motion.h3>
            <motion.ul 
              className="space-y-3"
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {regions.map((region, index) => (
                <motion.li key={index} variants={listItemVariants}>
                  <motion.a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base relative group"
                    whileHover={{ 
                      x: 5,
                      color: "#ffffff"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: -15, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:ml-6 transition-all duration-200">
                      {region}
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-lg font-semibold mb-6 relative"
              whileHover={{ color: "#60a5fa" }}
              transition={{ duration: 0.3 }}
            >
              Contact
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </motion.h3>
            <div className="space-y-4">
              {/* Phone */}
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: `0.4s` }}
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaPhone className="text-gray-400 text-sm flex-shrink-0" />
                </motion.div>
                <span className="text-gray-400 text-sm md:text-base hover:text-white transition-colors cursor-pointer">
                  +1 234 567 8900
                </span>
              </motion.div>
              
              {/* Email */}
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                style={{ transitionDelay: `0.5s` }}
              >
                <motion.div
                  whileHover={{ rotateY: 180, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaEnvelope className="text-gray-400 text-sm flex-shrink-0" />
                </motion.div>
                <motion.a 
                  href="mailto:info@hubstatereal.com" 
                  className="text-gray-400 hover:text-white transition-colors text-sm md:text-base"
                  whileHover={{ color: "#ffffff" }}
                >
                  info@hubstatereal.com
                </motion.a>
              </motion.div>
              
              {/* Social Media Icons */}
              <motion.div 
                className="flex items-center gap-4 pt-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.6
                    }
                  }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a 
                      key={index}
                      href={social.href}
                      className={`w-8 h-8 bg-gray-800 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300 relative overflow-hidden group`}
                      variants={socialIconVariants}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        y: -2
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <IconComponent className="text-sm relative z-10" />
                      
                      {/* Ripple effect */}
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        initial={{ scale: 0, opacity: 0 }}
                        whileTap={{ 
                          scale: 2, 
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{ duration: 0.6 }}
                        style={{
                          backgroundColor: "rgba(255,255,255,0.2)"
                        }}
                      />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div 
            className="text-center relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p 
              className="text-gray-400 text-sm md:text-base relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              © 2024 Hub Estate Real. All rights reserved.
            </motion.p>
            
            {/* Animated underline */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              viewport={{ once: true }}
              transition={{ delay: 1.4, duration: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;