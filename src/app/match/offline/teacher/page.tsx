'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const TeacherSelectionScreen = () => {
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
            <div className="text-xl font-bold text-gray-800">오프라인 동행 선생님</div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">오프라인 동행 가능한 선생님</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex">
              <div className="w-20 h-20 rounded-full bg-gray-300 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="font-medium text-gray-800">김현우 선생님</h3>
                <p className="text-sm text-gray-600 mb-1">서울 강남, 서초, 송파구</p>
                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                  <span className="bg-orange-100 text-orange-700 text-xs py-1 px-2 rounded">부동산</span>
                  <span className="bg-orange-100 text-orange-700 text-xs py-1 px-2 rounded">휴대폰</span>
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
              <div className="text-sm">
                <span className="text-gray-700 font-medium">45,000원/시간</span>
              </div>
              <Link href="/match/offline/teacher/request" className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium">
                선택하기
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeacherSelectionScreen;
