"use client";

import React from "react";
import BottomNavigation from "@/components/common/BottomNavigation";
import { useLanguage } from "@/contexts/LanguageContext";

const SearchScreen = () => {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm w-full">
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">
              {t("search.all") || "Search"}
            </h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow w-full px-4 py-6">
        {/* 최근 검색어 */}
        <div className="mb-4 sm:mb-6 w-full">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-800">
              {t("search.recentSearches") || "Recent Searches"}
            </h2>
            <button className="text-sm text-gray-500">
              {t("search.clearAll") || "Clear All"}
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5">
              <span className="text-sm text-gray-700 mr-2">부동산</span>
              <button className="text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5">
              <span className="text-sm text-gray-700 mr-2">K-pop</span>
              <button className="text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-3 py-1.5">
              <span className="text-sm text-gray-700 mr-2">김민지 선생님</span>
              <button className="text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className="mb-4 sm:mb-6 w-full">
          <h2 className="text-base font-semibold text-gray-800 mb-3">
            {t("search.categories") || "Categories"}
          </h2>
          <div className="grid grid-cols-3 gap-2 w-full">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-3 rounded-lg text-sm font-medium">
              {t("search.all") || "All"}
            </button>
            <button className="bg-white text-gray-700 py-2 px-3 rounded-lg text-sm font-medium border border-gray-200">
              {t("search.teachers") || "Teachers"}
            </button>
            <button className="bg-white text-gray-700 py-2 px-3 rounded-lg text-sm font-medium border border-gray-200">
              {t("search.content") || "Content"}
            </button>
          </div>
        </div>

        {/* 추천 검색어 */}
        <div className="mb-4 sm:mb-6 w-full">
          <h2 className="text-base font-semibold text-gray-800 mb-3">
            {t("search.popularSearches") || "Popular Searches"}
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4 w-full">
            <ol className="space-y-2">
              <li className="flex items-center">
                <span className="w-5 h-5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded flex items-center justify-center text-xs mr-3">
                  1
                </span>
                <span className="text-gray-800">
                  {t("search.publicTransport") || "Using Public Transport"}
                </span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-purple-500 text-white rounded flex items-center justify-center text-xs mr-3">
                  2
                </span>
                <span className="text-gray-800">
                  {t("search.hospitalVisit") || "Hospital Visit"}
                </span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-purple-400 text-white rounded flex items-center justify-center text-xs mr-3">
                  3
                </span>
                <span className="text-gray-800">
                  {t("search.orderingRestaurant") || "Ordering at Restaurants"}
                </span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-gray-200 text-gray-600 rounded flex items-center justify-center text-xs mr-3">
                  4
                </span>
                <span className="text-gray-800">
                  {t("search.cafeConversation") || "Cafe Conversation"}
                </span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-gray-200 text-gray-600 rounded flex items-center justify-center text-xs mr-3">
                  5
                </span>
                <span className="text-gray-800">
                  {t("search.topikPrep") || "TOPIK Preparation"}
                </span>
              </li>
            </ol>
          </div>
        </div>

        {/* 추천 탐색 */}
        <div className="w-full">
          <h2 className="text-base font-semibold text-gray-800 mb-3">
            {t("search.recommended") || "Recommended Exploration"}
          </h2>
          <div className="space-y-4 w-full">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden w-full">
              <div className="h-40 bg-gray-300 relative w-full">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-medium">
                    {t("search.seoulGuide") || "Seoul Living Guide"}
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden w-full">
              <div className="h-40 bg-gray-300 relative w-full">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-medium">
                    {t("search.kpopKorean") || "Korean for K-Pop Fans"}
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden w-full">
              <div className="h-40 bg-gray-300 relative w-full">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-medium">
                    {t("search.cultureEtiquette") ||
                      "Korean Culture and Etiquette"}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <BottomNavigation />
    </div>
  );
};

export default SearchScreen;
