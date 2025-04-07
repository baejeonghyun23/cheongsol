import { Metadata } from "next";

export const metadata: Metadata = {
  title: "갤러리 | 우리의 이야기",
  description: "우리의 소중한 순간들을 담은 사진 갤러리입니다.",
};

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">사진 갤러리</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* 갤러리 아이템들이 여기에 표시됩니다 */}
        <p>갤러리 콘텐츠가 여기에 표시됩니다.</p>
      </div>
    </div>
  );
} 