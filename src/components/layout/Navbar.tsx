"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <header className="bg-gradient-to-r from-pink-50/90 via-white/90 to-pink-50/90 dark:from-pink-950/90 dark:via-gray-950/90 dark:to-pink-950/90 backdrop-blur-md sticky top-0 z-50 border-b border-pink-100 dark:border-pink-900 shadow-sm">
      <motion.div 
        className="container mx-auto flex items-center justify-center h-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-[#FFA1B1] text-2xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0, -10, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            💖
          </motion.span>
          <Link href="/" className="text-xl font-medium text-[#FFA1B1] dark:text-[#FFA1B1]">
            청솔공주 생일
          </Link>
          <motion.span 
            className="text-[#FFA1B1] text-2xl"
            animate={{ 
              scale: [1, 1.1, 1, 1.2, 1],
              y: [0, -3, 0, -2, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          >
            🎂
          </motion.span>
        </motion.div>
      </motion.div>
    </header>
  );
} 