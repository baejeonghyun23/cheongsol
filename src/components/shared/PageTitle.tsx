import { cn } from "@/lib/utils";

interface PageTitleProps {
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
}

export function PageTitle({
  title,
  description,
  className,
  descriptionClassName,
}: PageTitleProps) {
  return (
    <div className={cn("mb-6", className)}>
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && (
        <p className={cn("text-gray-600 dark:text-gray-400 mt-2", descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
} 