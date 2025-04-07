export interface Photo {
  id: string;
  url: string;
  title?: string;
  description?: string;
  date: string; // ISO 형식의 날짜 문자열
  location?: string;
  tags?: string[];
  isFavorite?: boolean;
  album?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Album {
  id: string;
  name: string;
  description?: string;
  coverImageUrl?: string;
  photoCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface PhotoForm {
  url: string;
  title?: string;
  description?: string;
  date: string;
  location?: string;
  tags?: string[];
  isFavorite?: boolean;
  album?: string;
} 