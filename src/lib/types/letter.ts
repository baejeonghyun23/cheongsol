export interface Letter {
  id: string;
  title: string;
  content: string;
  sender: string;
  receiver: string;
  date: string; // ISO 형식의 날짜 문자열
  isRead: boolean;
  isSpecial?: boolean;
  mood?: string; // 편지 작성 시 감정 (예: "행복", "그리움" 등)
  bgColor?: string; // 편지 배경 색상
  fontStyle?: string; // 편지 폰트 스타일
  createdAt: string;
  updatedAt: string;
}

export interface LetterForm {
  title: string;
  content: string;
  sender: string;
  receiver: string;
  date: string;
  isSpecial?: boolean;
  mood?: string;
  bgColor?: string;
  fontStyle?: string;
} 