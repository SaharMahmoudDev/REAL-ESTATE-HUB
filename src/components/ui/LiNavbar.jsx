import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const LiNavbar = ({item,href}) => {
  return (
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
                        href={href}
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
                    </motion.li>  )
}

export default LiNavbar