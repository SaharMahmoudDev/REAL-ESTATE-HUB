import React from 'react'
import { motion } from 'framer-motion'

const LiNavbarMobile = ({item ,href,closeSidebar,props}) => {
  return (
                      <motion.li
                        key={item}
                        variants={{
                          hidden: { x: 50, opacity: 0 },
                          visible: { x: 0, opacity: 1 }
                        }}
                      >
                        <motion.a 
                          href={href} 
                          className="flex items-center gap-3 p-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors font-medium"
                          onClick={closeSidebar}
                          whileHover={{ 
                            x: 10,
                            backgroundColor: "#eef2ff",
                            color: "#4f46e5"
                          }}
                          whileTap={{ scale: 0.95 }}
                          {...props}
                        >
                          <motion.div
                            className="w-2 h-2 bg-indigo-600 rounded-full opacity-0"
                            whileHover={{ opacity: 1, scale: 1.2 }}
                          />
                          {item}
                        </motion.a>
                      </motion.li>
                   )
}

export default LiNavbarMobile