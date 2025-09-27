import React from 'react'
import { motion } from 'framer-motion'

const LiFooter = ({item,href,variant,props}) => {
  return (
  <motion.li key={item} variants={variant}>
                  <motion.a 
                    href={href} 
                    className="text-gray-400 hover:text-white transition-colors text-sm md:text-base relative group"
                    whileHover={{ 
                      x: 5,
                      color: "#ffffff"
                    }}
                    transition={{ duration: 0.2 }}
                    {...props}
                  >
                    <motion.span
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: -15, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="group-hover:ml-6 transition-all duration-200">
                      {item}
                    </span>
                  </motion.a>
                </motion.li>  )
}

export default LiFooter