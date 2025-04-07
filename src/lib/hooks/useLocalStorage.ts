import { useState, useEffect } from 'react';

// 로컬 스토리지에 데이터를 저장하고 불러오는 커스텀 훅
export function useLocalStorage<T>(key: string, initialValue: T) {
  // 로컬 스토리지에서 값을 가져오는 상태 초기화 함수
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // 브라우저 환경인지 확인
      if (typeof window === 'undefined') {
        return initialValue;
      }
      
      // 로컬 스토리지에서 값 가져오기
      const item = window.localStorage.getItem(key);
      // 값이 있으면 JSON으로 파싱, 없으면 초기값 반환
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // 에러 발생 시 초기값 반환
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // 로컬 스토리지에 값을 저장하는 함수
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 함수형 업데이트를 지원하도록 처리
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // 상태 업데이트
      setStoredValue(valueToStore);
      
      // 브라우저 환경인지 확인
      if (typeof window !== 'undefined') {
        // 로컬 스토리지에 저장
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // 에러 처리
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // 다른 탭에서 로컬 스토리지가 변경될 때 동기화
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue) {
        setStoredValue(JSON.parse(event.newValue));
      }
    };

    // 스토리지 이벤트 리스너 등록
    window.addEventListener('storage', handleStorageChange);
    
    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  return [storedValue, setValue] as const;
} 