'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const OfflineMatchingScreen = () => {
  const router = useRouter();
  
  const handleBackClick = () => {
    router.back();
  };
  
  const handleSubmit = () => {
    router.push('/match/offline/teacher');
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-3" onClick={handleBackClick}>
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </button>
            <div className="text-xl font-bold text-gray-800">오프라인 동행 신청</div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 - 생략 (길이 제한으로 인해) */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="text-center py-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">매칭 방법을 선택하세요</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-white border-2 border-teal-600 rounded-xl shadow-sm p-6">
              <h3 className="font-medium text-gray-800 mb-2">신청서 작성하기</h3>
              <p className="text-gray-600 text-sm mb-3">나의 요구사항과 상황을 설명하는 신청서를 작성하고, 적합한 선생님이 지원하면 선택합니다.</p>
            </div>
            <Link href="/match/offline/teacher" className="block bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="font-medium text-gray-800 mb-2">선생님 먼저 선택하기</h3>
              <p className="text-gray-600 text-sm mb-3">선생님의 프로필을 직접 확인하고 선택한 후, 동행 요청서를 작성합니다.</p>
            </Link>
          </div>
        </div>
      </main>

      {/* 하단 버튼 */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <button 
          className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium"
          onClick={handleSubmit}
        >
          신청서 제출하기
        </button>
      </div>
    </div>
  );
};

export default OfflineMatchingScreen;
