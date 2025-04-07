import { Metadata } from "next";

export const metadata: Metadata = {
  title: "캘린더 | 우리의 이야기",
  description: "우리의 특별한 날들을 기록하는 캘린더 공간입니다.",
};

export default function CalendarPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">우리의 캘린더</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        {/* 캘린더 컴포넌트가 여기에 표시됩니다 */}
        <p>캘린더 콘텐츠가 여기에 표시됩니다.</p>
      </div>
    </div>
  );
} 