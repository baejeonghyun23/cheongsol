"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "홈", path: "/" },
  { name: "추억", path: "/memories" },
  { name: "갤러리", path: "/gallery" },
  { name: "편지", path: "/letters" },
  { name: "캘린더", path: "/calendar" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-white dark:bg-gray-950 border-b sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-lg font-bold">청솔이의 꽃밭</Link>
        
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === item.path
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <Button variant="outline" size="sm" className="md:hidden">
          메뉴
        </Button>
      </div>
    </header>
  );
} 