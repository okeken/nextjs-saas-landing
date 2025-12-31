"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function BackButton({
  className,
  children,
}: React.PropsWithChildren<{
  className?: string;
}>) {
  const router = useRouter();
  return (
    <button
      className={`flex space-x-2 items-center ${className}`}
      onClick={() => router.back()}
    >
      <ChevronLeft className="w-5 h-5" />
      {children}
    </button>
  );
}

export default BackButton;
