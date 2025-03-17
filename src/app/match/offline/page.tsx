"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const OfflineMatchingScreen = () => {
  const router = useRouter();
  const { t } = useLanguage();

  const handleBackClick = () => {
    router.back();
  };

  const handleSubmit = () => {
    router.push("/match/offline/teacher");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-3" onClick={handleBackClick}>
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </button>
            <div className="text-xl font-bold text-gray-800">
              {t("offline.title")}
            </div>
          </div>
          <div></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="text-center py-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            {t("offline.selectMethod")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-white border-2 border-purple-600 rounded-xl shadow-sm p-6">
              <h3 className="font-medium text-gray-800 mb-2">
                {t("offline.fillForm")}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {t("offline.formDescription")}
              </p>
            </div>
            <Link
              href="/match/offline/teacher"
              className="block bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:border-purple-300 transition-colors duration-200"
            >
              <h3 className="font-medium text-gray-800 mb-2">
                {t("offline.selectTeacher")}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {t("offline.teacherDescription")}
              </p>
            </Link>
          </div>
        </div>
      </main>

      {/* Bottom Button */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <button
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-md transition-shadow duration-200"
          onClick={handleSubmit}
        >
          {t("offline.submit")}
        </button>
      </div>
    </div>
  );
};

export default OfflineMatchingScreen;
