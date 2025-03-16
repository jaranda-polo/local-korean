"use client";

import React, { useState } from "react";
import BottomNavigation from "@/components/common/BottomNavigation";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

// Sample data for popular teachers
const popularTeachers = [
  {
    id: 1,
    name: "김민지",
    specialty: "일상 회화, 여행 한국어",
    rating: 4.9,
    reviews: 124,
    languages: ["영어"],
    availability: "Today",
  },
  {
    id: 2,
    name: "박준호",
    specialty: "K-Pop, 문화, TOPIK",
    rating: 4.8,
    reviews: 98,
    languages: ["영어", "중국어"],
    availability: "Tomorrow",
  },
  {
    id: 3,
    name: "이지영",
    specialty: "비즈니스 한국어, 이메일 작성",
    rating: 4.7,
    reviews: 56,
    languages: ["영어", "일본어"],
    availability: "In 2 days",
  },
];

// Sample data for helpful expressions
const helpfulExpressions = [
  {
    id: 1,
    korean: "이것 주세요",
    romanized: "igeos juseyo",
    english: "Please give me this",
    category: "Shopping",
  },
  {
    id: 2,
    korean: "얼마예요?",
    romanized: "eolmayeyo?",
    english: "How much is it?",
    category: "Shopping",
  },
  {
    id: 3,
    korean: "화장실이 어디예요?",
    romanized: "hwajangsil-i eodiyeyo?",
    english: "Where is the bathroom?",
    category: "Public Places",
  },
  {
    id: 4,
    korean: "메뉴 주세요",
    romanized: "menyu juseyo",
    english: "Please give me the menu",
    category: "Restaurant",
  },
];

// Sample data for conversation topics
const conversationTopics = [
  {
    id: 1,
    title: "한국 음식 소개하기",
    english: "Introducing Korean Food",
    difficulty: "Beginner",
    popularity: 2500,
  },
  {
    id: 2,
    title: "주말 계획 이야기하기",
    english: "Talking about Weekend Plans",
    difficulty: "Beginner",
    popularity: 2100,
  },
  {
    id: 3,
    title: "한국 드라마 추천하기",
    english: "Recommending Korean Dramas",
    difficulty: "Intermediate",
    popularity: 1800,
  },
  {
    id: 4,
    title: "여행 경험 공유하기",
    english: "Sharing Travel Experiences",
    difficulty: "Intermediate",
    popularity: 1500,
  },
];

const DiscoverScreen = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 relative pb-16 max-w-[390px] mx-auto">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm w-full">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">
              {t("discover.title") || "Discover"}
            </h1>
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-3 relative">
            <input
              type="text"
              placeholder={
                t("discover.placeholder") ||
                "Search for teachers, content, topics"
              }
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
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

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-10 w-full">
        <div className="px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button
              className={`py-3 px-4 whitespace-nowrap ${activeTab === "all" ? "text-purple-600 border-b-2 border-purple-600 font-medium" : "text-gray-500"}`}
              onClick={() => setActiveTab("all")}
            >
              {t("discover.all") || "All"}
            </button>
            <button
              className={`py-3 px-4 whitespace-nowrap ${activeTab === "teachers" ? "text-purple-600 border-b-2 border-purple-600 font-medium" : "text-gray-500"}`}
              onClick={() => setActiveTab("teachers")}
            >
              {t("discover.teachers") || "Teachers"}
            </button>
            <button
              className={`py-3 px-4 whitespace-nowrap ${activeTab === "expressions" ? "text-purple-600 border-b-2 border-purple-600 font-medium" : "text-gray-500"}`}
              onClick={() => setActiveTab("expressions")}
            >
              {t("discover.helpfulExpressions") || "Helpful Expressions"}
            </button>
            <button
              className={`py-3 px-4 whitespace-nowrap ${activeTab === "topics" ? "text-purple-600 border-b-2 border-purple-600 font-medium" : "text-gray-500"}`}
              onClick={() => setActiveTab("topics")}
            >
              {t("discover.conversationTopics") || "Conversation Topics"}
            </button>
            <button
              className={`py-3 px-4 whitespace-nowrap ${activeTab === "trending" ? "text-purple-600 border-b-2 border-purple-600 font-medium" : "text-gray-500"}`}
              onClick={() => setActiveTab("trending")}
            >
              {t("discover.trending") || "Trending Now"}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow px-4 py-6 w-full">
        {/* Daily Korean Tip */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-6 border border-purple-100">
          <div className="flex items-start">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-2 mr-3">
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">
                {t("discover.expressionOfTheDay") || "Expression of the Day"}
              </h3>
              <p className="text-lg font-bold text-purple-700 mb-1">
                잘 먹겠습니다 (jal meokgetseumnida)
              </p>
              <p className="text-sm text-gray-600">
                "I will eat well" - Said before starting a meal
              </p>
            </div>
          </div>
        </div>

        {/* Popular Teachers Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {t("discover.popularTeachers") || "Popular Teachers"}
            </h2>
            <button className="text-sm font-medium text-purple-600">
              {t("discover.seeAll") || "See All"}
            </button>
          </div>

          <div className="space-y-4">
            {popularTeachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex">
                    <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-800">
                          {teacher.name} 선생님
                        </h3>
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
                            {teacher.rating}
                          </span>
                          <span className="text-gray-500 ml-1">
                            ({teacher.reviews})
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {teacher.specialty}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-1 mb-2">
                        {teacher.languages.map((lang) => (
                          <span
                            key={lang}
                            className="bg-purple-100 text-purple-700 text-xs py-0.5 px-2 rounded"
                          >
                            {lang}
                          </span>
                        ))}
                        <span className="bg-green-100 text-green-700 text-xs py-0.5 px-2 rounded">
                          {teacher.availability}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end space-x-2">
                    <button className="px-3 py-1.5 border border-gray-300 text-gray-600 rounded text-sm">
                      {t("discover.viewProfile") || "View Profile"}
                    </button>
                    <button className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded text-sm">
                      {t("discover.requestClass") || "Request Class"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Helpful Expressions Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {t("discover.helpfulExpressions") || "Helpful Expressions"}
            </h2>
            <button className="text-sm font-medium text-purple-600">
              {t("discover.seeAll") || "See All"}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {helpfulExpressions.map((expression) => (
              <div
                key={expression.id}
                className="bg-white rounded-lg p-3 border border-gray-200"
              >
                <div className="flex items-start">
                  <div className="bg-purple-100 text-purple-700 rounded-full px-2 py-1 text-xs mr-2">
                    {expression.category}
                  </div>
                  <button className="ml-auto text-gray-400">
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
                <p className="font-medium text-gray-800 mt-2">
                  {expression.korean}
                </p>
                <p className="text-sm text-gray-500 italic">
                  {expression.romanized}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {expression.english}
                </p>
                <div className="mt-2 flex justify-between">
                  <button className="text-purple-600 text-sm flex items-center">
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
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m0 0l-2.828 2.828-3.536-3.536 2.828-2.828m13.86 5.656l2.828 2.828-3.536 3.536-2.828-2.828"
                      ></path>
                    </svg>
                    Listen
                  </button>
                  <button className="text-purple-600 text-sm flex items-center">
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
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      ></path>
                    </svg>
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversation Topics Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {t("discover.conversationTopics") || "Conversation Topics"}
            </h2>
            <button className="text-sm font-medium text-purple-600">
              {t("discover.seeAll") || "See All"}
            </button>
          </div>

          <div className="space-y-3">
            {conversationTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white rounded-lg p-4 border border-gray-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">{topic.title}</h3>
                    <p className="text-sm text-gray-600">{topic.english}</p>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 text-xs py-0.5 px-2 rounded mr-2">
                      {topic.difficulty}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {topic.popularity.toLocaleString()}
                    </span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                  <button className="px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded text-sm">
                    Practice with Teacher
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Content Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {t("discover.recommended") || "Recommended Exploration"}
            </h2>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-purple-700 font-medium">
                  {t("discover.seoulGuide") || "Seoul Living Guide"}
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-purple-700 font-medium">
                  {t("discover.kpopKorean") || "Korean for K-Pop Fans"}
                </span>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-purple-700 font-medium">
                  {t("discover.cultureEtiquette") ||
                    "Korean Culture and Etiquette"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-20 max-w-[390px] mx-auto">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default DiscoverScreen;
