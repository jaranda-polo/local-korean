"use client";

import React, { useState } from "react";
import BottomNavigation from "@/components/common/BottomNavigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const HomePage = () => {
  const { t } = useLanguage();
  const [languageOpen, setLanguageOpen] = useState(false);

  // LanguageSelector 컴포넌트
  const LanguageSelector = ({ onSelect }) => {
    const { language, changeLanguage } = useLanguage();

    const languages = [
      { code: "en", name: "English" },
      { code: "ko", name: "한국어" },
      { code: "ja", name: "日本語" },
    ];

    const handleLanguageChange = (langCode) => {
      changeLanguage(langCode);
      if (onSelect) onSelect();
    };

    return (
      <div className="py-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`w-full text-left px-4 py-2 text-sm ${
              language === lang.code
                ? "bg-purple-50 text-purple-600 font-medium"
                : "text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white max-w-[390px] mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm w-full">
        <div className="px-3 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              LocalKorean
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {/* 언어 선택 드롭다운 */}
            <div className="relative">
              <button
                className="p-1.5 rounded-full text-gray-500 hover:bg-purple-100 transition-colors duration-200 flex items-center"
                onClick={() => setLanguageOpen(!languageOpen)}
              >
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
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  ></path>
                </svg>
              </button>

              {languageOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg overflow-hidden z-20">
                  <LanguageSelector onSelect={() => setLanguageOpen(false)} />
                </div>
              )}
            </div>

            {/* 알림 버튼 */}
            <button className="p-1.5 rounded-full text-gray-500 hover:bg-purple-100 transition-colors duration-200">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>

            {/* 사용자 프로필 */}
            <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md text-xs">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 py-6">
        {/* Welcome Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            {t("home.greeting")}, John!
          </h1>
          <p className="text-gray-600">{t("home.learn.question")}</p>
        </div>

        {/* Community Stats - Motivation Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-sm p-5 mb-6 border border-purple-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
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
            Community Achievements
          </h2>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-purple-600">12,458</div>
              <div className="text-xs text-gray-600">Active Learners</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-purple-600">3.2M</div>
              <div className="text-xs text-gray-600">Words Learned</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-purple-600">85%</div>
              <div className="text-xs text-gray-600">Travel Ready</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xs font-medium mr-2">
                  5
                </div>
                <div>
                  <div className="text-sm font-medium">Your Korean Karma</div>
                  <div className="text-xs text-gray-500">
                    Level: Beginner Explorer
                  </div>
                </div>
              </div>
              <div className="text-xs text-purple-600 font-medium">Top 65%</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>0</span>
              <span>Next level: 120 points</span>
            </div>
          </div>
        </div>

        {/* Popular Teachers Section */}
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6 border border-purple-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {t("discover.popularTeachers") || "Popular Teachers"}
            </h2>
            <Link
              href="/discover"
              className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            >
              {t("discover.seeAll") || "See All"}
            </Link>
          </div>

          <div className="space-y-4">
            {/* Teacher 1 */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors duration-200 cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h3 className="font-medium text-gray-800">김민지 선생님</h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="flex items-center text-yellow-500 mr-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      4.9
                    </span>
                    <span className="mr-2">(124)</span>
                    <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">
                      Available Today
                    </span>
                  </div>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
                {t("discover.requestClass") || "Request Class"}
              </button>
            </div>

            {/* Teacher 2 */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors duration-200 cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h3 className="font-medium text-gray-800">박준호 선생님</h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="flex items-center text-yellow-500 mr-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      4.8
                    </span>
                    <span className="mr-2">(98)</span>
                    <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs">
                      Available Tomorrow
                    </span>
                  </div>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
                {t("discover.requestClass") || "Request Class"}
              </button>
            </div>

            {/* Teacher 3 */}
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors duration-200 cursor-pointer">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <h3 className="font-medium text-gray-800">이지영 선생님</h3>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="flex items-center text-yellow-500 mr-1">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      4.7
                    </span>
                    <span className="mr-2">(56)</span>
                    <span className="bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded text-xs">
                      Available in 2 days
                    </span>
                  </div>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
                {t("discover.requestClass") || "Request Class"}
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-white rounded-xl shadow-sm p-5 mb-8 border border-purple-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {t("home.upcoming")}
            </h2>
            <button className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
              {t("home.viewAll")}
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-3 border border-purple-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center mr-3 shadow-sm">
                  <span className="text-purple-700 font-medium text-xs">
                    {t("schedule.today")}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">
                    {t("home.findingApartment")}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {t("home.with")} Minji Kim • 16:00 (30 {t("home.timeLeft")})
                  </p>
                </div>
              </div>
              <Link
                href="/class"
                className="px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-xs font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {t("home.joinNow")}
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-100 hover:border-purple-100 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <span className="text-gray-700 font-medium text-xs">
                    {t("schedule.tomorrow")}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 text-sm">
                    {t("home.orderingCafe")}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {t("home.with")} Junho Park • 14:30
                  </p>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors duration-200">
                {t("home.details")}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link
            href="/match/online"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-sm p-4 text-center flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-200"
          >
            <svg
              className="w-6 h-6 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>
            <span className="font-medium text-sm">{t("home.startOnline")}</span>
          </Link>
          <Link
            href="/match/offline"
            className="bg-white border-2 border-purple-200 text-purple-600 rounded-xl shadow-sm p-4 text-center flex flex-col items-center justify-center hover:border-purple-300 hover:shadow-md transition-all duration-200"
          >
            <svg
              className="w-6 h-6 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span className="font-medium text-sm">
              {t("home.requestGuide")}
            </span>
          </Link>
        </div>

        {/* Leaderboard Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              Weekly Leaderboard
            </h2>
            <button className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
              View All
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-purple-100">
            <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-pink-50">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-yellow-100 border-2 border-yellow-400 flex items-center justify-center mr-3">
                  <span className="text-yellow-600 font-bold">1</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">Sarah K.</h3>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">
                          Seoul Explorer
                        </span>
                        <div className="flex">
                          <span className="inline-block w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></span>
                          <span className="inline-block w-4 h-4 bg-pink-500 rounded-full border-2 border-white -ml-1"></span>
                          <span className="inline-block w-4 h-4 bg-blue-500 rounded-full border-2 border-white -ml-1"></span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-purple-600">
                        1,245 pts
                      </div>
                      <div className="text-xs text-gray-500">32 day streak</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-gray-300 flex items-center justify-center mr-3">
                  <span className="text-gray-600 font-bold">2</span>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">Alex T.</h3>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">
                          K-pop Enthusiast
                        </span>
                        <div className="flex">
                          <span className="inline-block w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></span>
                          <span className="inline-block w-4 h-4 bg-green-500 rounded-full border-2 border-white -ml-1"></span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-purple-600">
                        1,118 pts
                      </div>
                      <div className="text-xs text-gray-500">28 day streak</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-b border-gray-100 bg-purple-50">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-3 text-white font-bold">
                  5
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-gray-800">You</h3>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">
                          Beginner Explorer
                        </span>
                        <div className="flex">
                          <span className="inline-block w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-purple-600">
                        845 pts
                      </div>
                      <div className="text-xs text-gray-500">14 day streak</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 bg-gray-50">
              <button className="w-full py-2 text-sm text-purple-600 font-medium hover:bg-purple-50 rounded-lg transition-colors duration-200">
                See how to earn more points
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Content Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                ></path>
              </svg>
              {t("home.recommended")}
            </h2>
            <button className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
              {t("home.viewAll")}
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-purple-100 hover:shadow-md transition-shadow duration-200">
              <div className="h-24 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-purple-700 font-medium">
                  {t("home.kpopVocab")}
                </span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium text-gray-800 text-sm">
                    {t("home.learnKpop")}
                  </h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    +50 pts
                  </span>
                </div>
                <p className="text-xs text-gray-600">{t("home.kpopWords")}</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-purple-100 hover:shadow-md transition-shadow duration-200">
              <div className="h-24 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-purple-700 font-medium">
                  {t("home.dailyConvo")}
                </span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium text-gray-800 text-sm">
                    {t("home.everydayPhrases")}
                  </h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    +35 pts
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  {t("home.usefulExpressions")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
