"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// This is a redirect component to maintain backward compatibility
export default function SearchRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/discover");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-600 mb-4"></div>
        <p className="text-gray-600">Redirecting to Discover...</p>
      </div>
    </div>
  );
}
