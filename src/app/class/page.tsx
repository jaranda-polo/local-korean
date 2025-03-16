'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ClassScreen = () => {
  const router = useRouter();
  
  const handleBackClick = () => {
    router.back();
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-teal-600 text-white py-3 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-3" onClick={handleBackClick}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </button>
            <div>
              <h1 className="text-lg font-medium">서울에서 집 구하기</h1>
              <p className="text-sm opacity-90">김민지 선생님 · 초급</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-teal-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-teal-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 - 생략 (길이 제한으로 인해) */}
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* 여기에 수업 컨텐츠 구현 */}
        <div className="text-center flex-grow flex items-center justify-center">
          <p>화상 수업 화면 및 학습 콘텐츠가 표시됩니다.</p>
        </div>
      </div>
    </div>
  );
};

export default ClassScreen;
