"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const TeacherSelectionScreen = () => {
  const router = useRouter();
  const { t } = useLanguage();

  const handleBackClick = () => {
    router.back();
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
              {t("teacher.title")}
            </div>
          </div>
          <div></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          {t("teacher.availableTeachers")}
        </h2>

        {/* Teacher List */}
        <div className="space-y-4">
          {/* Teacher 1 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4">
              <div className="flex">
                <div className="w-20 h-20 rounded-full bg-gray-300 mr-4 flex-shrink-0"></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        이지영 선생님
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        서울 종로, 중구, 용산구
                      </p>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-yellow-500 flex items-center">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        4.9
                      </span>
                      <span className="text-gray-500 ml-1">(32)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 mb-2">
                    <span className="bg-purple-100 text-purple-700 text-xs py-1 px-2 rounded">
                      {t("teacher.hospital")}
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs py-1 px-2 rounded">
                      {t("teacher.transportation")}
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs py-1 px-2 rounded">
                      {t("teacher.tourism")}
                    </span>
                    <span className="bg-pink-100 text-pink-700 text-xs py-1 px-2 rounded">
                      {t("teacher.englishAvailable")}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    서울 토박이로서 종로, 중구 지역에 대해 잘 알고 있습니다.
                    병원 통역, 지하철 이용 등 실생활에 필요한 도움을 드립니다.
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-gray-700 font-medium">
                    40,000원{t("teacher.hourly")}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {t("teacher.availableIn3Days")}
                  </span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:shadow-md transition-shadow duration-200">
                  {t("teacher.select")}
                </button>
              </div>
            </div>
          </div>

          {/* Teacher 2 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4">
              <div className="flex">
                <div className="w-20 h-20 rounded-full bg-gray-300 mr-4 flex-shrink-0"></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        김현우 선생님
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        서울 강남, 서초, 송파구
                      </p>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-yellow-500 flex items-center">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        4.8
                      </span>
                      <span className="text-gray-500 ml-1">(24)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 mb-2">
                    <span className="bg-purple-100 text-purple-700 text-xs py-1 px-2 rounded">
                      {t("teacher.realEstate")}
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs py-1 px-2 rounded">
                      휴대폰
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs py-1 px-2 rounded">
                      쇼핑
                    </span>
                    <span className="bg-pink-100 text-pink-700 text-xs py-1 px-2 rounded">
                      {t("teacher.englishAvailable")}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    강남, 서초 지역 전문입니다. 부동산 계약, 휴대폰 개통, 쇼핑
                    등 실용적인 도움을 드릴 수 있습니다.
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-gray-700 font-medium">
                    45,000원{t("teacher.hourly")}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {t("teacher.availableToday")}
                  </span>
                </div>
                <Link
                  href="/match/offline/teacher/request"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:shadow-md transition-shadow duration-200"
                >
                  {t("teacher.select")}
                </Link>
              </div>
            </div>
          </div>

          {/* Teacher 3 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4">
              <div className="flex">
                <div className="w-20 h-20 rounded-full bg-gray-300 mr-4 flex-shrink-0"></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        박소연 선생님
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        서울 마포, 용산, 은평구
                      </p>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-yellow-500 flex items-center">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        4.7
                      </span>
                      <span className="text-gray-500 ml-1">(19)</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2 mb-2">
                    <span className="bg-purple-100 text-purple-700 text-xs py-1 px-2 rounded">
                      {t("teacher.restaurants")}
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs py-1 px-2 rounded">
                      카페
                    </span>
                    <span className="bg-purple-100 text-purple-700 text-xs py-1 px-2 rounded">
                      문화
                    </span>
                    <span className="bg-pink-100 text-pink-700 text-xs py-1 px-2 rounded">
                      {t("teacher.chineseAvailable")}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    홍대, 연남동, 이태원 등 트렌디한 지역의 맛집, 카페, 문화
                    공간을 소개해 드립니다. 로컬처럼 즐길 수 있는 곳들을 안내해
                    드려요.
                  </p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
                <div className="text-sm">
                  <span className="text-gray-700 font-medium">
                    35,000원{t("teacher.hourly")}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {t("teacher.availableTomorrow")}
                  </span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium hover:shadow-md transition-shadow duration-200">
                  {t("teacher.select")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Filter Buttons */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 flex justify-between">
        <button className="w-1/2 py-3 mr-2 border border-purple-600 text-purple-600 rounded-lg font-medium flex items-center justify-center hover:bg-purple-50 transition-colors duration-200">
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            ></path>
          </svg>
          {t("teacher.filter")}
        </button>
        <button className="w-1/2 py-3 ml-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium flex items-center justify-center hover:shadow-md transition-shadow duration-200">
          <svg
            className="w-5 h-5 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            ></path>
          </svg>
          {t("teacher.sort")}
        </button>
      </div>
    </div>
  );
};

export default TeacherSelectionScreen;
