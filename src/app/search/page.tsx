"use client";

import React from "react";
import BottomNavigation from "@/components/common/BottomNavigation";

const SearchScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="선생님, 콘텐츠, 주제 검색"
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 최근 검색어 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-800">
              최근 검색어
            </h2>
            <button className="text-sm text-gray-500">전체 삭제</button>
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
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-800 mb-3">
            카테고리
          </h2>
          <div className="grid grid-cols-3 gap-2">
            <button className="bg-teal-600 text-white py-2 px-3 rounded-lg text-sm font-medium">
              전체
            </button>
            <button className="bg-white text-gray-700 py-2 px-3 rounded-lg text-sm font-medium border border-gray-200">
              선생님
            </button>
            <button className="bg-white text-gray-700 py-2 px-3 rounded-lg text-sm font-medium border border-gray-200">
              콘텐츠
            </button>
          </div>
        </div>

        {/* 추천 검색어 */}
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-800 mb-3">
            인기 검색어
          </h2>
          <div className="bg-white rounded-xl shadow-sm p-4">
            <ol className="space-y-2">
              <li className="flex items-center">
                <span className="w-5 h-5 bg-teal-600 text-white rounded flex items-center justify-center text-xs mr-3">
                  1
                </span>
                <span className="text-gray-800">대중교통 이용하기</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-teal-500 text-white rounded flex items-center justify-center text-xs mr-3">
                  2
                </span>
                <span className="text-gray-800">병원 방문</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-teal-400 text-white rounded flex items-center justify-center text-xs mr-3">
                  3
                </span>
                <span className="text-gray-800">음식점에서 주문하기</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-gray-200 text-gray-600 rounded flex items-center justify-center text-xs mr-3">
                  4
                </span>
                <span className="text-gray-800">카페 회화</span>
              </li>
              <li className="flex items-center">
                <span className="w-5 h-5 bg-gray-200 text-gray-600 rounded flex items-center justify-center text-xs mr-3">
                  5
                </span>
                <span className="text-gray-800">TOPIK 준비</span>
              </li>
            </ol>
          </div>
        </div>

        {/* 추천 탐색 */}
        <div>
          <h2 className="text-base font-semibold text-gray-800 mb-3">
            추천 탐색
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-40 bg-gray-300 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-medium">
                    서울 생활 정착 가이드
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-40 bg-gray-300 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-medium">
                    K-Pop 팬을 위한 한국어
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-40 bg-gray-300 relative">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-medium">한국 문화와 예절</h3>
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
