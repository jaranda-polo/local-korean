'use client';
import React from 'react';
import BottomNavigation from '@/components/common/BottomNavigation';

const ScheduleScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">내 일정</h1>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="text-center py-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">일정 화면</h2>
          <p>일정 관리 기능이 구현될 예정입니다.</p>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default ScheduleScreen;
