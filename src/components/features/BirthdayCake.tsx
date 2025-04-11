"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export function BirthdayCake() {
  const [candlesLit, setCandlesLit] = useState<boolean[]>([true, true, true]);
  const [blowing, setBlowing] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  // 모바일 터치 또는 마우스 클릭으로 불기 동작
  const handleBlow = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // 클릭 이벤트가 상위로 전파되지 않도록 방지
    e.stopPropagation();
    
    if (candlesLit.some(lit => lit)) {
      setBlowing(true);
      
      // 각 초마다 시간차를 두고 꺼지는 효과
      setTimeout(() => {
        setCandlesLit([false, true, true]);
      }, 300);
      
      setTimeout(() => {
        setCandlesLit([false, false, true]);
      }, 600);
      
      setTimeout(() => {
        setCandlesLit([false, false, false]);
        setShowMessage(true);
      }, 900);
      
      // 불기 동작 초기화
      setTimeout(() => {
        setBlowing(false);
      }, 1500);
      
      // 10초 후에 초 다시 켜기
      setTimeout(() => {
        setCandlesLit([true, true, true]);
        setShowMessage(false);
      }, 10000);
    }
  }, [candlesLit]);
  
  // 장치 흔들기 감지 (모바일)
  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastZ = 0;
    let lastTime = 0;
    const threshold = 25; // 흔들기 감도 조절 (값을 높여서 감도를 낮춤)
    
    const handleMotion = (event: DeviceMotionEvent) => {
      const acceleration = event.accelerationIncludingGravity;
      if (!acceleration) return;
      
      const currentTime = new Date().getTime();
      
      if ((currentTime - lastTime) > 100) { // 100ms마다 체크
        const diffTime = currentTime - lastTime;
        lastTime = currentTime;
        
        const x = acceleration.x || 0;
        const y = acceleration.y || 0;
        const z = acceleration.z || 0;
        
        const speed = Math.abs((x + y + z - lastX - lastY - lastZ) / diffTime) * 10000;
        
        if (speed > threshold && candlesLit.some(lit => lit)) {
          // 디바이스 모션에서는 이벤트 객체 없이 호출
          if (candlesLit.some(lit => lit)) {
            setBlowing(true);
            
            // 각 초마다 시간차를 두고 꺼지는 효과
            setTimeout(() => {
              setCandlesLit([false, true, true]);
            }, 300);
            
            setTimeout(() => {
              setCandlesLit([false, false, true]);
            }, 600);
            
            setTimeout(() => {
              setCandlesLit([false, false, false]);
              setShowMessage(true);
            }, 900);
            
            // 불기 동작 초기화
            setTimeout(() => {
              setBlowing(false);
            }, 1500);
            
            // 10초 후에 초 다시 켜기
            setTimeout(() => {
              setCandlesLit([true, true, true]);
              setShowMessage(false);
            }, 10000);
          }
        }
        
        lastX = x;
        lastY = y;
        lastZ = z;
      }
    };
    
    // 권한 요청 함수
    const requestMotionPermission = async () => {
      // iOS 13+ 디바이스에서 권한 요청이 필요함
      // @ts-expect-error - 일부 브라우저에서만 존재하는 API
      if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
        try {
          // @ts-expect-error - iOS에서 사용되는 API
          const permissionState = await DeviceMotionEvent.requestPermission();
          if (permissionState === 'granted') {
            window.addEventListener('devicemotion', handleMotion);
          }
        } catch (error) {
          console.error('모션 권한 요청 오류:', error);
        }
      } else {
        // 권한 요청이 필요없는 브라우저나 기기
        window.addEventListener('devicemotion', handleMotion);
      }
    };
    
    // 페이지 로드 시 자동으로 권한 요청
    requestMotionPermission();
    
    return () => {
      window.removeEventListener('devicemotion', handleMotion);
    };
  }, [candlesLit]);
  
  return (
    <div 
      className="relative w-full max-w-xl h-64 my-6 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-pink-100 dark:border-pink-900 z-[10] cake-container"
      onClick={handleBlow}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-pink-100/50 to-pink-300/20 dark:from-pink-900/30 dark:to-pink-700/10 z-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      ></motion.div>
      <div className="flex justify-center items-center h-full relative">
        {/* 케이크 */}
        <div className="relative">
          {/* 케이크 몸체 */}
          <motion.div 
            className="text-7xl mb-2"
            animate={{ scale: blowing ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
          >
            🎂
          </motion.div>
          
          {/* 초 3개 */}
          <div className="absolute top-[-30px] left-0 right-0 flex justify-center gap-4">
            {candlesLit.map((isLit, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* 초 */}
                <div className="w-1.5 h-10 bg-gradient-to-t from-blue-300 to-blue-200 rounded-full z-20"></div>
                
                {/* 불꽃 */}
                {isLit && (
                  <motion.div 
                    className="absolute top-[-20px] left-0 right-0 flex justify-center"
                    animate={{ 
                      y: [0, -3, 0, -2, 0],
                      scale: [1, 1.1, 1, 1.2, 1]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1,
                      repeatType: "reverse"
                    }}
                  >
                    <div className="text-xl">🔥</div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* 불기 시각적 효과 */}
        {blowing && (
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 2, 3] }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-white/20 rounded-full z-5"
          />
        )}
      </div>
      
      {/* 메시지 - 위치를 위로 조정 */}
      {showMessage && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-10 left-0 right-0 text-center text-[#FFA1B1] dark:text-[#FFA1B1] font-medium text-lg z-20"
        >
          청솔이의 소원이 이루어질거야 🎉
        </motion.div>
      )}
      
      {/* 안내 메시지 */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-[#FFA1B1] dark:text-[#FFA1B1] text-sm z-20">
        {candlesLit.some(lit => lit) 
          ? "소원을 말해봐 💕" 
          : "생일 축하합니다! 💕"}
      </div>
    </div>
  );
} 