"use client";

import React from "react";
import BottomNavigation from "@/components/common/BottomNavigation";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              LocalKorean
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="p-2 rounded-full text-gray-500 hover:bg-purple-100 transition-colors duration-200"
              onClick={() => window.open("/", "_blank")}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
            </button>
            <button className="p-2 rounded-full text-gray-500 hover:bg-purple-100 transition-colors duration-200">
              <svg
                className="w-6 h-6"
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
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Welcome Message */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Hello, John!</h1>
          <p className="text-gray-600">What would you like to learn today?</p>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-white rounded-xl shadow-sm p-5 mb-8 border border-purple-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Upcoming Classes
            </h2>
            <button className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
              View All
            </button>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 mb-3 border border-purple-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center mr-3 shadow-sm">
                  <span className="text-purple-700 font-medium">Today</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    Finding an Apartment in Seoul
                  </h3>
                  <p className="text-sm text-gray-600">
                    With Minji Kim • 16:00 (30 min left)
                  </p>
                </div>
              </div>
              <Link
                href="/class"
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                Join Now
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-100 hover:border-purple-100 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <span className="text-gray-700 font-medium">Tomorrow</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">
                    Ordering at a Cafe
                  </h3>
                  <p className="text-sm text-gray-600">
                    With Junho Park • 14:30
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                Details
              </button>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link
            href="/match/online"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-sm p-6 text-center flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-200"
          >
            <svg
              className="w-8 h-8 mb-2"
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
            <span className="font-medium">Start Online Learning</span>
          </Link>
          <Link
            href="/match/offline"
            className="bg-white border-2 border-purple-200 text-purple-600 rounded-xl shadow-sm p-6 text-center flex flex-col items-center justify-center hover:border-purple-300 hover:shadow-md transition-all duration-200"
          >
            <svg
              className="w-8 h-8 mb-2"
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
            <span className="font-medium">Request In-Person Guide</span>
          </Link>
        </div>

        {/* Recommended Content Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Recommended for You
            </h2>
            <button className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity">
              View All
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-purple-100 hover:shadow-md transition-shadow duration-200">
              <div className="h-32 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-purple-700 font-medium">
                  K-pop Vocabulary
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">
                  Learn K-pop Terminology
                </h3>
                <p className="text-sm text-gray-600">
                  Essential words for K-pop fans
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-purple-100 hover:shadow-md transition-shadow duration-200">
              <div className="h-32 bg-gradient-to-r from-purple-200 to-pink-200 flex items-center justify-center">
                <span className="text-purple-700 font-medium">
                  Daily Conversations
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-1">
                  Everyday Korean Phrases
                </h3>
                <p className="text-sm text-gray-600">
                  Useful expressions for daily life
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
