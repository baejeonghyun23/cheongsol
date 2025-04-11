"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
  rotate: number;
  emoji: string;
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);
  
  useEffect(() => {
    // 하트 이모지 종류
    const heartEmojis = ["❤️", "💕", "💗", "💓", "💖", "💘", "💝", "💞"];
    
    // 12개의 랜덤한 하트 생성
    const newHearts = Array.from({ length: 12 }, (_, index) => ({
      id: index,
      x: Math.random() * 100, // 화면 너비의 랜덤한 위치 (%)
      size: Math.random() * 15 + 15, // 15px ~ 30px 사이의 랜덤한 크기
      delay: Math.random() * 10, // 0 ~ 10초 사이의 랜덤한 딜레이
      duration: Math.random() * 10 + 15, // 15 ~ 25초 사이의 랜덤한 애니메이션 시간
      opacity: Math.random() * 0.4 + 0.2, // 0.2 ~ 0.6 사이의 랜덤한 투명도 (더 투명하게)
      rotate: Math.random() * 360, // 0 ~ 360도 사이의 랜덤한 회전
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
    }));
    
    setHearts(newHearts);
  }, []);
  
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-0"
          style={{
            left: `${heart.x}%`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            filter: 'blur(0.3px)'
          }}
          initial={{ y: "100vh", rotate: heart.rotate }}
          animate={{ 
            y: "-100vh", 
            x: [
              heart.x > 50 ? "2%" : "-2%", 
              heart.x > 50 ? "-2%" : "2%", 
              heart.x > 50 ? "2%" : "-2%"
            ],
            rotate: heart.rotate + 20
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              repeat: Infinity,
              duration: 5,
              repeatType: 'mirror'
            }
          }}
        >
          {heart.emoji}
        </motion.div>
      ))}
    </div>
  );
} 