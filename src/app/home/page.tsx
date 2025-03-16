'use client';

import React from 'react';
import BottomNavigation from '@/components/common/BottomNavigation';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-teal-600">로컬한국어</div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 환영 메시지 */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">안녕하세요, John님!</h1>
          <p className="text-gray-600">오늘은 어떤 한국어를 배워볼까요?</p>
        </div>

        {/* 예정된 수업 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">다가오는 수업</h2>
            <button className="text-sm text-teal-600 font-medium">모두 보기</button>
          </div>
          
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal-200 flex items-center justify-center mr-3">
                  <span className="text-teal-700 font-medium">오늘</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">서울에서 집 구하기</h3>
                  <p className="text-sm text-gray-600">김민지 선생님과 16:00 (30분 후)</p>
                </div>
              </div>
              <Link href="/class" className="px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium">
                입장하기
              </Link>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <span className="text-gray-700 font-medium">내일</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">카페에서 주문하기</h3>
                  <p className="text-sm text-gray-600">박준호 선생님과 14:30</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm font-medium">
                상세보기
              </button>
            </div>
          </div>
        </div>

        {/* 빠른 액션 버튼 */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link href="/match/online" className="bg-teal-600 text-white rounded-xl shadow-sm p-6 text-center flex flex-col items-center justify-center">
            <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
            <span className="font-medium">온라인 학습 시작하기</span>
          </Link>
          <Link href="/match/offline" className="bg-white border-2 border-teal-500 text-teal-600 rounded-xl shadow-sm p-6 text-center flex flex-col items-center justify-center">
            <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="font-medium">오프라인 동행 신청하기</span>
          </Link>
        </div>

        {/* 추천 콘텐츠와 인기 선생님 섹션 생략 - 길이 제한으로 인해 */}
      </main>

      {/* 하단 네비게이션 */}
      <BottomNavigation />
    </div>
  );
};

export default HomePage;
