"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-r from-pink-50/90 via-white/90 to-pink-50/90 dark:from-pink-950/90 dark:via-gray-950/90 dark:to-pink-950/90 backdrop-blur-md border-t border-pink-100 dark:border-pink-900 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <motion.div 
            className="flex items-center gap-2 mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#FFA1B1] dark:text-[#FFA1B1]">•</span>
            <span className="text-[#FFA1B1] dark:text-[#FFA1B1]">•</span>
            <span className="text-[#FFA1B1] dark:text-[#FFA1B1]">•</span>
          </motion.div>
          <p className="text-sm text-[#FFA1B1] dark:text-[#FFA1B1] font-medium">
            {currentYear} 청솔공주의 특별한 생일
          </p>
        </div>
      </div>
    </footer>
  );
} 