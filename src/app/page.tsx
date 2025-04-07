import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "청솔이의 꽃밭 | 홈",
  description: "우리의 소중한 추억과 이야기를 담은 공간입니다.",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">청솔이의 꽃밭</h1>
        <p className="text-gray-600 dark:text-gray-400">우리만의 소중한 공간</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Link href="/memories" passHref>
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>추억</CardTitle>
              <CardDescription>우리가 함께한 소중한 추억들</CardDescription>
            </CardHeader>
            <CardContent>
              <p>함께 만든 특별한 순간들을 기록해요</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">추억 보기</Button>
            </CardFooter>
          </Card>
        </Link>
        
        <Link href="/gallery" passHref>
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>갤러리</CardTitle>
              <CardDescription>우리의 아름다운 사진들</CardDescription>
            </CardHeader>
            <CardContent>
              <p>소중한 순간들을 사진으로 간직해요</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">갤러리 보기</Button>
            </CardFooter>
          </Card>
        </Link>
        
        <Link href="/letters" passHref>
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>편지</CardTitle>
              <CardDescription>서로에게 전하는 마음</CardDescription>
            </CardHeader>
            <CardContent>
              <p>말로 표현하지 못한 마음을 편지로 전해요</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">편지 보기</Button>
            </CardFooter>
          </Card>
        </Link>
        
        <Link href="/calendar" passHref>
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle>캘린더</CardTitle>
              <CardDescription>우리의 특별한 날들</CardDescription>
            </CardHeader>
            <CardContent>
              <p>기념일과 약속, 추억의 날짜를 기록해요</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">캘린더 보기</Button>
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
}
