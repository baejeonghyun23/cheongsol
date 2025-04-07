import { Metadata } from "next";

export const metadata: Metadata = {
  title: "편지 | 우리의 이야기",
  description: "서로에게 전하는 마음을 담은 편지 공간입니다.",
};

export default function LettersPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">마음의 편지</h1>
      <div className="space-y-6">
        {/* 편지 아이템들이 여기에 표시됩니다 */}
        <p>편지 콘텐츠가 여기에 표시됩니다.</p>
      </div>
    </div>
  );
} 