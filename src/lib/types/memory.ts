export interface Memory {
  id: string;
  title: string;
  date: string; // ISO 형식의 날짜 문자열 (예: "2023-04-15")
  description: string;
  location?: string;
  imageUrls: string[];
  tags?: string[];
  isSpecial?: boolean; // 특별한 추억인지 여부
  createdAt: string;
  updatedAt: string;
}

export interface MemoryForm {
  title: string;
  date: string;
  description: string;
  location?: string;
  imageUrls: string[];
  tags?: string[];
  isSpecial?: boolean;
} 