'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const OfflineRequestFormScreen = () => {
  const router = useRouter();
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-3" onClick={() => router.back()}>
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </button>
            <div className="text-xl font-bold text-gray-800">김현우 선생님에게 요청하기</div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="text-center py-10">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">동행 요청서 작성</h3>
          <p>요청서 작성 폼이 표시됩니다.</p>
        </div>
      </main>
      
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <button 
          className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium"
          onClick={() => router.push('/schedule')}
        >
          요청서 보내기
        </button>
      </div>
    </div>
  );
};

export default OfflineRequestFormScreen;
