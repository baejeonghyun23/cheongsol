"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 파티클 하나의 속성
interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
}

// 폭죽 하나의 정보
interface Fireworks {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
}

export function Firework() {
  const [fireworks, setFireworks] = useState<Fireworks[]>([]);
  const maxFireworks = 3; // 최대 폭죽 개수 제한
  
  // 전체 문서에 클릭 이벤트 핸들러 추가
  useEffect(() => {
    // 페이지 로드 후 글로벌 이벤트 추가
    const handleDocumentClick = (e: MouseEvent) => {
      // 케이크 컨테이너는 무시 - BirthdayCake에서 stopPropagation을 하고 있어서 실제로는 호출안됨
      const target = e.target as HTMLElement;
      if (target.closest('.cake-container')) {
        return;
      }
      
      // 최대 개수를 초과하면 새 폭죽을 만들지 않음
      if (fireworks.length >= maxFireworks) {
        return;
      }
      
      createFirework(e.clientX, e.clientY);
    };
    
    document.addEventListener('click', handleDocumentClick);
    
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [fireworks.length, maxFireworks]);
  
  // 폭죽 만들기 함수
  const createFirework = (x: number, y: number) => {
    const colors = ['#FFA1B1', '#FFB0BD', '#FFCAD4', '#FFEA70', '#FFD700', '#FFFFFF'];
    const particles: Particle[] = [];
    
    // 파티클 개수 줄임 (20-30개)
    const particleCount = Math.floor(Math.random() * 10) + 20;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: 0,
        y: 0,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 6 + 2, // 크기도 약간 줄임
      });
    }
    
    const newFirework: Fireworks = {
      id: Date.now(),
      x,
      y,
      particles,
    };
    
    setFireworks((prev) => [...prev, newFirework]);
    
    // 3초 후에 폭죽 제거
    setTimeout(() => {
      setFireworks((prev) => prev.filter((fw) => fw.id !== newFirework.id));
    }, 2000);
  };
  
  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <AnimatePresence>
        {fireworks.map((firework) => (
          <div key={firework.id} className="absolute top-0 left-0 w-full h-full">
            {/* 중심 빛 효과 */}
            <motion.div
              className="absolute rounded-full bg-white"
              style={{
                width: 15,
                height: 15,
                top: firework.y - 7.5,
                left: firework.x - 7.5,
                boxShadow: '0 0 10px 3px rgba(255, 255, 255, 0.6), 0 0 20px 10px rgba(255, 161, 177, 0.4)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 0], 
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 0.6 }}
            />
            
            {firework.particles.map((particle, index) => {
              // 360도를 파티클 수로 나누어 고르게 분포
              const angle = (index / firework.particles.length) * Math.PI * 2;
              // 화면을 벗어나지 않도록 거리 제한
              const maxDistance = Math.min(window.innerWidth, window.innerHeight) * 0.25;
              const distance = Math.random() * 60 + 40;
              
              return (
                <motion.div
                  key={`${firework.id}-${particle.id}`}
                  className="absolute rounded-full"
                  style={{
                    width: particle.size,
                    height: particle.size,
                    backgroundColor: particle.color,
                    top: firework.y,
                    left: firework.x,
                    boxShadow: `0 0 ${particle.size/2}px ${particle.color}`,
                  }}
                  initial={{ scale: 0 }}
                  animate={{
                    x: Math.cos(angle) * Math.min(distance, maxDistance),
                    y: Math.sin(angle) * Math.min(distance, maxDistance),
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1 + Math.random() * 0.5,
                    ease: "easeOut",
                  }}
                />
              );
            })}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}