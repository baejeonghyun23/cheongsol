"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BirthdayCake } from "@/components/features/BirthdayCake";
import { ConfettiEffect } from "@/components/features/ConfettiEffect";
import { FloatingHearts } from "@/components/features/FloatingHearts";
import { Firework } from "@/components/features/Firework";
import { EasterEgg } from "@/components/features/EasterEgg";
import { WelcomeMessage } from "@/components/features/WelcomeMessage";
import { motion } from "framer-motion";

export default function Home() {
  // 슬라이드쇼를 위한 상태
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 예시 이미지들 - 실제 이미지 경로로 교체 필요
  const memorySlides = [
    "/images/memory (36).jpg",
    "/images/memory (27).jpg",
    "/images/memory (26).jpg",
    "/images/memory (30).jpg",
    "/images/memory (24).jpg",
    "/images/memory (41).jpg",
    "/images/memory (42).jpg",
    "/images/memory (43).jpg",
    "/images/memory (44).jpg",
    "/images/memory (45).jpg",
    "/images/memory (19).jpg",
    "/images/memory (23).jpg",
  ];
  
  // 특별한 순간에 사용할, 다음번호부터 시작하는 이미지
  const specialImages = [
    "/images/memory (2).jpg",
    "/images/memory (3).jpg", 
    "/images/memory (4).jpg",
    "/images/memory (5).jpg",
    "/images/memory (6).jpg",
    "/images/memory (7).jpg",
    "/images/memory (8).jpg",
    "/images/memory (9).jpg",
    "/images/memory (10).jpg",
    "/images/memory (11).jpg",
    "/images/memory (12).jpg",
    "/images/memory (13).jpg",
    "/images/memory (14).jpg",
    "/images/memory (15).jpg",
    "/images/memory (16).jpg",
    "/images/memory (17).jpg",
    "/images/memory (18).jpg",
    "/images/memory (21).jpg",
    "/images/memory (22).jpg",
    "/images/memory (28).jpg",
    "/images/memory (29).jpg",
    "/images/memory (31).jpg",
    "/images/memory (32).jpg",
    "/images/memory (33).jpg",
    "/images/memory (34).jpg",
    "/images/memory (35).jpg",
    "/images/memory (37).jpg",
    "/images/memory (39).jpg",
  ];
  
  // 자동 슬라이드 효과
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % memorySlides.length);
    }, 3000); // 3초마다 슬라이드 변경
    
    return () => clearInterval(interval);
  }, [memorySlides.length]);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gradient-to-b from-pink-50 to-white dark:from-gray-950 dark:to-gray-900 relative">
      {/* 초기 환영 메시지 */}
      <WelcomeMessage />
      
      {/* 축하 색종이 효과 - 항상 표시 */}
      <ConfettiEffect duration={8000} />
      
      {/* 떠다니는 하트 */}
      <FloatingHearts />
      
      {/* 클릭하면 폭죽이 터지는 효과 */}
      <Firework />
      
      {/* 키보드 입력 감지하는 이스터에그 */}
      <EasterEgg />
      
      {/* 배경 이미지 */}
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: `url('/images/memory (38).jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* 인사말 */}
      <motion.div 
        className="relative z-20 w-full text-center mt-4 mb-8 animate-fade-in backdrop-blur-sm p-4 rounded-xl bg-white/50 dark:bg-gray-900/50 shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="text-2xl font-bold text-[#FFA1B1] mt-2 drop-shadow-md"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 3, 0, -3, 0]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          🎂 생일 축하해! 🎉
        </motion.div>
      </motion.div>
      
      {/* 콘텐츠 오버레이 */}
      <div className="relative z-5 w-full flex flex-col items-center pt-4 max-w-5xl mx-auto">
        {/* 케이크 섹션 - 인터랙티브 버전으로 교체 */}
        <BirthdayCake />
        
        {/* 자동 슬라이드 사진 캐러셀 */}
        <div className="w-full my-10 relative rounded-2xl overflow-hidden shadow-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
          {/* 비율 유지를 위한 패딩 트릭 사용 (4:3) */}
          <div className="w-full pb-[75%] relative">
            {memorySlides.map((slide, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image 
                    src={slide}
                    alt={`추억 ${index + 1}`}
                    fill
                    className="object-contain" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const textDiv = document.createElement('div');
                        textDiv.className = "text-xl text-[#FFA1B1] dark:text-[#FFA1B1]";
                        textDiv.innerText = `추억 사진 ${index + 1}\n(이미지를 추가해주세요)`;
                        parent.appendChild(textDiv);
                      }
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/30 flex items-end p-4">
                </div>
              </div>
            ))}
            
            {/* 슬라이드 인디케이터 */}
            <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
              {memorySlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-[#FFA1B1] scale-110' : 'bg-[#FFA1B1]/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* 특별한 순간들 */}
        <div className="w-full my-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {specialImages.map((imagePath, index) => (
              <motion.div 
                key={index} 
                className="aspect-square rounded-xl overflow-hidden relative shadow-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image 
                    src={imagePath}
                    alt={`특별한 순간 ${index + 1}`}
                    fill
                    className="object-contain" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const textDiv = document.createElement('div');
                        textDiv.className = "text-sm text-[#FFA1B1] dark:text-[#FFA1B1] text-center p-2";
                        textDiv.innerText = `추억 ${index + 6}\n(이미지를 추가해주세요)`;
                        parent.appendChild(textDiv);
                      }
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/30 flex items-end p-3">
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* 생일 메시지 */}
        <motion.div 
          className="text-center my-10 p-8 max-w-2xl rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg border border-pink-100 dark:border-pink-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-base text-[#FFA1B1] dark:text-[#FFA1B1] leading-relaxed">
            항상 곁에 있어줘서 고마워<br/>
            오늘도, 내일도, 그리고 앞으로도<br/> 
            행복한 순간들을 함께 만들어가자!<br/>
            태어나줘서 고마워 청솔공주 ❤️
          </p>
        </motion.div>
        
        {/* 바닥 장식 */}
        <div className="w-full flex justify-center mt-4 mb-8">
          <div className="flex gap-2">
            <span className="text-[#FFA1B1] dark:text-[#FFA1B1] opacity-70">•</span>
            <span className="text-[#FFA1B1] dark:text-[#FFA1B1] opacity-80">•</span>
            <span className="text-[#FFA1B1] dark:text-[#FFA1B1] opacity-90">•</span>
            <span className="text-[#FFA1B1] dark:text-[#FFA1B1]">•</span>
            <span className="text-[#FFA1B1] dark:text-[#FFA1B1] opacity-90">•</span>
            <span className="text-[#FFA1B1] dark:text-[#FFA1B1] opacity-80">•</span>
            <span className="text-[#FFA1B1] dark:text-[#FFA1B1] opacity-70">•</span>
          </div>
        </div>
      </div>
    </div>
  );
}
