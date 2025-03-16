'use client';
import React from 'react';
import BottomNavigation from '@/components/common/BottomNavigation';

const SearchScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="선생님, 콘텐츠, 주제 검색"
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="text-center py-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">검색 화면</h2>
          <p>검색 기능이 구현될 예정입니다.</p>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default SearchScreen;
