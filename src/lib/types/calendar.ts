export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // ISO 형식의 날짜 문자열
  endDate?: string; // 종료 날짜 (선택 사항)
  description?: string;
  location?: string;
  type: EventType;
  isAllDay: boolean;
  repeatType?: RepeatType;
  color?: string; // 이벤트 색상
  notification?: boolean; // 알림 여부
  createdAt: string;
  updatedAt: string;
}

export enum EventType {
  ANNIVERSARY = "anniversary", // 기념일
  DATE = "date", // 데이트
  BIRTHDAY = "birthday", // 생일
  SPECIAL = "special", // 특별한 날
  OTHER = "other" // 기타
}

export enum RepeatType {
  NONE = "none", // 반복 없음
  DAILY = "daily", // 매일
  WEEKLY = "weekly", // 매주
  MONTHLY = "monthly", // 매월
  YEARLY = "yearly" // 매년
}

export interface CalendarEventForm {
  title: string;
  date: string;
  endDate?: string;
  description?: string;
  location?: string;
  type: EventType;
  isAllDay: boolean;
  repeatType?: RepeatType;
  color?: string;
  notification?: boolean;
} 