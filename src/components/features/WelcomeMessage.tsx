"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WelcomeMessage() {
  const [show, setShow] = useState(false);
  const [showHint, setShowHint] = useState(false);
  
  useEffect(() => {
    // 페이지 로드 후 0.5초 후에 메시지 표시
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);
    
    // 메시지 표시 후 6초 후에 힌트 메시지 표시
    const hintTimer = setTimeout(() => {
      setShowHint(true);
    }, 6500);
    
    // 10초 후에 메시지 숨기기
    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 10000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(hintTimer);
      clearTimeout(hideTimer);
    };
  }, []);
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center px-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-[#FFA1B1]"
              animate={{ 
                y: [0, -20, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity, 
                repeatType: "reverse"
              }}
            >
              청솔이의 생일을 축하해!
            </motion.h1>
            
            <motion.div
              className="text-white text-xl md:text-2xl mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              사랑하는 청솔이에게 준비한 특별한 선물이에요
            </motion.div>
            
            <AnimatePresence>
              {showHint && (
                <motion.div
                  className="text-[#FFA1B1]/80 text-sm mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  💫 화면을 클릭하면 깜짝 폭죽이 터져요!<br/>
                  💕 특별한 단어를 입력하면 숨겨진 메시지도 있어요!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 