"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function EasterEgg() {
  const [keys, setKeys] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [message, setMessage] = useState("");
  const [tapCount, setTapCount] = useState(0);
  const tapTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [showHint, setShowHint] = useState(false);
  
  // 감지할 키워드들
  const keywords = {
    "cheongsol": "청솔이 사랑해! 💕",
    "love": "너를 사랑해 💘",
    "birthday": "생일 축하해! 🎉",
    "saranghae": "아이패드! 💖",
    "1102": "우리가 처음 만난 날! ❤️",
    "0414": "내년 생일은 더 기대해! 🎂"
  };
  
  useEffect(() => {
    // 키보드 이벤트 처리
    const handleKeyDown = (e: KeyboardEvent) => {
      // 최대 20개 키까지만 저장
      setKeys(prev => {
        const newKeys = [...prev, e.key.toLowerCase()];
        if (newKeys.length > 20) {
          return newKeys.slice(-20);
        }
        return newKeys;
      });
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // 30초 후에 힌트 표시
    const hintTimer = setTimeout(() => {
      setShowHint(true);
      // 10초 후에 힌트 숨기기
      setTimeout(() => {
        setShowHint(false);
      }, 10000);
    }, 30000);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(hintTimer);
    };
  }, []);
  
  // keys 배열이 변경될 때마다 키워드 체크
  useEffect(() => {
    if (keys.length === 0) return;
    
    // 모든 키워드 체크
    const keysString = keys.join('');
    
    Object.entries(keywords).forEach(([keyword, msg]) => {
      if (keysString.includes(keyword)) {
        showMessage(msg);
      }
    });
  }, [keys]);
  
  // 빠른 탭 감지 (모바일)
  const handleSecretTap = () => {
    setTapCount(prev => prev + 1);
    
    // 이전 타이머가 있으면 취소
    if (tapTimerRef.current) {
      clearTimeout(tapTimerRef.current);
    }
    
    // 1.5초 안에 5번 탭하면 이스터에그 실행
    if (tapCount >= 4) {
      showMessage("평생 나랑<br/>함께하자 ! 💫");
      setTapCount(0);
    } else {
      // 1.5초 타이머 설정 - 시간 내에 탭 횟수가 부족하면 초기화
      tapTimerRef.current = setTimeout(() => {
        setTapCount(0);
      }, 1500);
    }
  };
  
  // 키워드별 메시지 표시
  const showKeywordMessage = (keyword: keyof typeof keywords) => {
    showMessage(keywords[keyword]);
  };
  
  // 메시지 표시 공통 함수
  const showMessage = (msg: string) => {
    setMessage(msg);
    setShowEasterEgg(true);
    
    // 5초 후 이스터에그 숨기기
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 5000);
    
    // 입력된 키 초기화
    setKeys([]);
  };
  
  return (
    <>
      <AnimatePresence>
        {showEasterEgg && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-gradient-to-r from-[#FFA1B1]/90 to-[#FFB0BD]/90 backdrop-blur-md p-8 rounded-2xl shadow-lg text-white text-center max-w-md"
              initial={{ scale: 0.5, y: 50 }}
              animate={{ 
                scale: [0.5, 1.1, 1],
                y: [50, -20, 0],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ 
                duration: 1,
                times: [0, 0.6, 1],
                ease: "easeOut"
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <h2 className="text-4xl font-bold mb-4">
                  {message.split('<br/>').map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h2>
                <p className="text-white/80 text-lg">비밀 메시지를 발견했어요!</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
        
        {showHint && (
          <motion.div
            className="fixed bottom-20 left-0 right-0 mx-auto z-40 flex justify-center pointer-events-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-md">
              화면 아래쪽 하트를 연속으로 탭해보세요 ♡
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 모바일용 숨겨진 버튼들 - 화면 아래쪽에 작게 배치 */}
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center gap-6">
        <motion.button
          className="w-12 h-12 rounded-full bg-transparent text-[#FFA1B1]/50 flex items-center justify-center text-2xl"
          whileTap={{ scale: 0.9 }}
          onClick={() => showKeywordMessage("cheongsol")}
        >
          ♡
        </motion.button>
        
        <motion.button
          className="w-12 h-12 rounded-full bg-transparent text-[#FFA1B1]/50 flex items-center justify-center text-2xl"
          whileTap={{ scale: 0.9 }}
          onClick={handleSecretTap}
        >
          ♡
        </motion.button>
        
        <motion.button
          className="w-12 h-12 rounded-full bg-transparent text-[#FFA1B1]/50 flex items-center justify-center text-2xl"
          whileTap={{ scale: 0.9 }}
          onClick={() => showKeywordMessage("saranghae")}
        >
          ♡
        </motion.button>
      </div>
    </>
  );
} 