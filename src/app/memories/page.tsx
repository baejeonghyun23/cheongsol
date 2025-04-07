import { Metadata } from "next";

export const metadata: Metadata = {
  title: "추억 | 우리의 이야기",
  description: "우리가 함께한 소중한 추억들을 기록하는 공간입니다.",
};

export default function MemoriesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">우리의 추억</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 추억 아이템들이 여기에 표시됩니다 */}
        <p>추억 콘텐츠가 여기에 표시됩니다.</p>
      </div>
    </div>
  );
} 