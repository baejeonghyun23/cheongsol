"use client";

import { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

interface ConfettiEffectProps {
  duration?: number; // 효과가 지속되는 시간(ms)
}

export function ConfettiEffect({ duration = 5000 }: ConfettiEffectProps) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  });
  const [showConfetti, setShowConfetti] = useState(true);
  
  useEffect(() => {
    // 창 크기 설정
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // 초기 창 크기 설정
    updateDimensions();
    
    // 창 크기 변경 감지
    window.addEventListener("resize", updateDimensions);
    
    // 지정된 시간 후 색종이 효과 숨기기
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, duration);
    
    return () => {
      window.removeEventListener("resize", updateDimensions);
      clearTimeout(timer);
    };
  }, [duration]);
  
  if (!showConfetti) return null;
  
  return (
    <ReactConfetti
      width={dimensions.width}
      height={dimensions.height}
      recycle={false}
      numberOfPieces={150}
      tweenDuration={duration}
      colors={[
        "#FFA1B1", // 메인 색상
        "#FFB0BD", // 약간 밝은 버전
        "#FF92A3", // 약간 어두운 버전
        "#FFCAD4", // 더 밝은 버전
        "#FF83A0", // 더 어두운 버전
        "#FFD8DE", // 매우 밝은 버전
        "#FFFFFF", // 화이트
      ]}
      gravity={0.08}
      initialVelocityY={8}
      opacity={0.8}
      className="fixed inset-0 z-40 pointer-events-none"
    />
  );
} 