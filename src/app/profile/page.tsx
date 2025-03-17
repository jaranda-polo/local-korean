"use client";

import React from "react";
import BottomNavigation from "@/components/common/BottomNavigation";
import { useLanguage } from "@/contexts/LanguageContext";

const ProfileScreen = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm w-full">
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">
              {t("profile.title") || "Profile"}
            </h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow w-full px-4 py-6">
        {/* 프로필 카드 */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 w-full">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-300 mb-4"></div>
              <div className="absolute bottom-3 right-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1 border-2 border-white">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">
              John Davis
            </h2>
            <div className="flex items-center mb-2">
              <p className="text-gray-600">USA · Beginner Level</p>
              <div className="ml-2 px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                Level 5
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
            <div className="flex items-center justify-between w-full mb-3 px-2">
              <span className="text-xs text-gray-500">845 points</span>
              <span className="text-xs text-gray-500">
                1,200 points to Level 6
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                Travel
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                Daily Life
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                K-Pop
              </span>
            </div>
            <button className="w-full py-2 border border-purple-600 text-purple-600 rounded-lg font-medium">
              {t("profile.editProfile") || "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                ></path>
              </svg>
              My Achievements
            </h3>
            <span className="text-sm text-purple-600 font-medium">
              5 of 24 earned
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 text-center border border-purple-100">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="text-xs font-medium text-gray-800">
                14-Day Streak
              </div>
              <div className="text-xs text-purple-600">+140 pts</div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 text-center border border-purple-100">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  ></path>
                </svg>
              </div>
              <div className="text-xs font-medium text-gray-800">
                Multilingual
              </div>
              <div className="text-xs text-purple-600">+200 pts</div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 text-center border border-purple-100">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-2">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  ></path>
                </svg>
              </div>
              <div className="text-xs font-medium text-gray-800">K-Pop Fan</div>
              <div className="text-xs text-purple-600">+150 pts</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-100 rounded-lg p-3 text-center border border-gray-200">
              <div className="w-12 h-12 mx-auto bg-gray-300 rounded-full flex items-center justify-center mb-2 opacity-50">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <div className="text-xs font-medium text-gray-500">
                Seoul Explorer
              </div>
              <div className="text-xs text-gray-500">Locked</div>
            </div>

            <div className="bg-gray-100 rounded-lg p-3 text-center border border-gray-200">
              <div className="w-12 h-12 mx-auto bg-gray-300 rounded-full flex items-center justify-center mb-2 opacity-50">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div className="text-xs font-medium text-gray-500">
                30-Day Streak
              </div>
              <div className="text-xs text-gray-500">Locked</div>
            </div>

            <div className="bg-gray-100 rounded-lg p-3 text-center border border-gray-200">
              <div className="w-12 h-12 mx-auto bg-gray-300 rounded-full flex items-center justify-center mb-2 opacity-50">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <div className="text-xs font-medium text-gray-500">
                Travel Ready
              </div>
              <div className="text-xs text-gray-500">Locked</div>
            </div>
          </div>

          <button className="w-full mt-4 py-2 text-sm text-purple-600 font-medium bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200">
            View All Achievements
          </button>
        </div>

        {/* 학습 현황 */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 w-full">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
            {t("profile.learningStatus") || "Learning Status"}
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base text-gray-600">
                  {t("profile.totalClassTime") || "Total Class Time"}
                </span>
                <span className="font-medium text-sm sm:text-base text-gray-800">
                  12h 30m
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full w-1/2"></div>
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-xs text-purple-600">+250 pts earned</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base text-gray-600">
                  {t("profile.completedClasses") || "Completed Classes"}
                </span>
                <span className="font-medium text-sm sm:text-base text-gray-800">
                  8 / 20
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full w-2/5"></div>
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-xs text-purple-600">+160 pts earned</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base text-gray-600">
                  {t("profile.savedWords") || "Saved Words"}
                </span>
                <span className="font-medium text-sm sm:text-base text-gray-800">
                  47 words
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 h-2.5 rounded-full w-3/5"></div>
              </div>
              <div className="flex justify-end mt-1">
                <span className="text-xs text-purple-600">+94 pts earned</span>
              </div>
            </div>
          </div>
        </div>

        {/* 저장된 단어 */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                ></path>
              </svg>
              {t("profile.savedWords") || "Saved Words"}
            </h3>
            <button className="text-sm text-purple-600">
              {t("profile.viewAll") || "View All"}
            </button>
          </div>
          <div className="space-y-2 sm:space-y-3 w-full">
            <div className="flex justify-between items-center p-2 sm:p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <div>
                <div className="flex items-center">
                  <p className="font-medium text-gray-800">월세 (wolse)</p>
                  <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    +2 pts
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">Monthly rent</p>
              </div>
              <div className="flex items-center">
                <button className="text-purple-500 mr-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
                <button className="text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 sm:p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <div>
                <div className="flex items-center">
                  <p className="font-medium text-gray-800">
                    보증금 (bojungeum)
                  </p>
                  <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    +2 pts
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Security deposit
                </p>
              </div>
              <div className="flex items-center">
                <button className="text-purple-500 mr-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
                <button className="text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 sm:p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <div>
                <div className="flex items-center">
                  <p className="font-medium text-gray-800">원룸 (oneroom)</p>
                  <span className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    +2 pts
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                  Studio apartment
                </p>
              </div>
              <div className="flex items-center">
                <button className="text-purple-500 mr-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
                <button className="text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-purple-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
                <span className="text-sm font-medium text-gray-700">
                  Word Learning Streak
                </span>
              </div>
              <div className="text-sm font-bold text-purple-600">7 days</div>
            </div>
            <div className="mt-2 flex justify-between">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <div
                    key={day}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs"
                  >
                    {day}
                  </div>
                ))}
                {[8, 9, 10].map((day) => (
                  <div
                    key={day}
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="text-xs text-purple-600 self-end">+70 pts</div>
            </div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              Community Stats
            </h3>
            <span className="text-sm text-purple-600 font-medium">
              Rank #5 in your area
            </span>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-3">
                  5
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Your Ranking</h4>
                  <p className="text-xs text-gray-600">
                    Top 65% of learners in Seoul
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-purple-600">845 pts</div>
                <div className="text-xs text-gray-500">14 day streak</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
              <span>Your points</span>
              <span>Leader: 1,245 pts</span>
            </div>
            <div className="w-full bg-white rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                style={{ width: "68%" }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-purple-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h4 className="text-sm font-medium text-gray-800">
                  Study Time
                </h4>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-xl font-bold text-purple-600">12.5h</div>
                <div className="text-xs text-green-600 flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    ></path>
                  </svg>
                  +2.3h this week
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 border border-gray-200">
              <div className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 text-purple-600 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
                <h4 className="text-sm font-medium text-gray-800">
                  Words Learned
                </h4>
              </div>
              <div className="flex justify-between items-end">
                <div className="text-xl font-bold text-purple-600">47</div>
                <div className="text-xs text-green-600 flex items-center">
                  <svg
                    className="w-3 h-3 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    ></path>
                  </svg>
                  +12 this week
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 설정 메뉴 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden w-full">
          <div className="divide-y divide-gray-200">
            <button className="w-full text-left p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-purple-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  ></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-800">
                  {t("profile.paymentSubscription") || "Payment & Subscription"}
                </span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            <button className="w-full text-left p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-purple-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-800">
                  {t("profile.notificationSettings") || "Notification Settings"}
                </span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            <button className="w-full text-left p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-purple-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-800">
                  {t("profile.helpSupport") || "Help & Support"}
                </span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            <button className="w-full text-left p-3 sm:p-4 flex items-center justify-between">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-purple-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
                <span className="text-sm sm:text-base text-gray-800">
                  {t("profile.logout") || "Logout"}
                </span>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <BottomNavigation />
    </div>
  );
};

export default ProfileScreen;
