"use client";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-950 border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} 청솔공주 꽃밭
          </p>
        </div>
      </div>
    </footer>
  );
} 