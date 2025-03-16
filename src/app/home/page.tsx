"use client";

import React from "react";
import BottomNavigation from "@/components/common/BottomNavigation";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative pb-16 max-w-[390px] mx-auto">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm w-full">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">
              {t("home.title") || "Home"}
            </h1>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full bg-gray-100 text-gray-600">
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
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 py-6 w-full">
        {/* Welcome Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {t("home.welcome") || "Welcome back!"}
          </h2>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium mb-1">
                  {t("home.streak") || "Your learning streak"}
                </p>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-1 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"></path>
                  </svg>
                  <span className="font-bold text-xl">14</span>
                  <span className="ml-1 text-sm opacity-80">
                    {t("home.days") || "days"}
                  </span>
                </div>
              </div>
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors duration-200 px-3 py-1.5 rounded-lg text-sm font-medium">
                {t("home.practice") || "Practice Now"}
              </button>
            </div>
          </div>
        </div>

        {/* Today's Classes */}
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              {t("home.todayClasses") || "Today's Classes"}
            </h2>
            <Link
              href="/schedule"
              className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            >
              {t("home.viewAll") || "View All"}
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-purple-100">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {t("home.conversationClass") || "Conversation Practice"}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {t("home.withTeacher") || "with"} 김민지 선생님
                      </p>
                    </div>
                    <div className="bg-green-100 text-green-700 text-xs py-0.5 px-2 rounded">
                      {t("home.upcoming") || "Upcoming"}
                    </div>
                  </div>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <svg
                      className="w-4 h-4 mr-1"
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
                    3:00 PM - 4:00 PM
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end space-x-2">
                <button className="px-3 py-1.5 border border-gray-300 text-gray-600 rounded text-sm">
                  {t("home.reschedule") || "Reschedule"}
                </button>
                <button className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded text-sm">
                  {t("home.joinClass") || "Join Class"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Leaderboard */}
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
              {t("home.recommended") || "Recommended for You"}
            </h2>
            <button className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
              {t("home.viewAll") || "View All"}
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-purple-100 hover:shadow-md transition-shadow duration-200">
              <div className="h-24 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-purple-700 font-medium">
                  {t("home.kpopVocab") || "K-pop Vocabulary"}
                </span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium text-gray-800 text-sm">
                    {t("home.learnKpop") || "Learn K-pop Korean"}
                  </h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    +50 pts
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  {t("home.kpopWords") || "Essential words for K-pop fans"}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-purple-100 hover:shadow-md transition-shadow duration-200">
              <div className="h-24 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-purple-700 font-medium">
                  {t("home.dailyConvo") || "Daily Conversation"}
                </span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-medium text-gray-800 text-sm">
                    {t("home.everydayPhrases") || "Everyday Phrases"}
                  </h3>
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                    +35 pts
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  {t("home.usefulExpressions") ||
                    "Useful expressions for daily life"}
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
