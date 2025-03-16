"use client";

import React from "react";
import BottomNavigation from "@/components/common/BottomNavigation";
import Link from "next/link";

const ScheduleScreen = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm w-full">
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">내 일정</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* 뷰 선택 탭 */}
      <div className="bg-white border-b border-gray-200 w-full">
        <div className="w-full px-4">
          <div className="flex">
            <button className="py-3 px-4 border-b-2 border-teal-600 text-teal-600 font-medium">
              일정
            </button>
            <button className="py-3 px-4 text-gray-500">지난 수업</button>
          </div>
        </div>
      </div>

      {/* 캘린더 헤더 */}
      <div className="bg-white border-b border-gray-200 shadow-sm w-full">
        <div className="w-full px-4 py-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">3월 2025</h2>
            <div className="flex space-x-2">
              <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100">
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
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100">
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
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* 요일 헤더 */}
          <div className="grid grid-cols-7 mb-2">
            <div className="text-center text-gray-500 text-sm">일</div>
            <div className="text-center text-gray-500 text-sm">월</div>
            <div className="text-center text-gray-500 text-sm">화</div>
            <div className="text-center text-gray-500 text-sm">수</div>
            <div className="text-center text-gray-500 text-sm">목</div>
            <div className="text-center text-gray-500 text-sm">금</div>
            <div className="text-center text-gray-500 text-sm">토</div>
          </div>

          {/* 날짜 그리드 */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            <div className="text-center py-2 text-gray-400 text-sm">23</div>
            <div className="text-center py-2 text-gray-400 text-sm">24</div>
            <div className="text-center py-2 text-gray-400 text-sm">25</div>
            <div className="text-center py-2 text-gray-400 text-sm">26</div>
            <div className="text-center py-2 text-gray-400 text-sm">27</div>
            <div className="text-center py-2 text-gray-400 text-sm">28</div>
            <div className="text-center py-2 text-gray-700 text-sm">1</div>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-1">
            <div className="text-center py-2 text-gray-700 text-sm">2</div>
            <div className="text-center py-2 text-gray-700 text-sm">3</div>
            <div className="text-center py-2 text-gray-700 text-sm">4</div>
            <div className="text-center py-2 text-gray-700 text-sm">5</div>
            <div className="text-center py-2 text-gray-700 text-sm">6</div>
            <div className="text-center py-2 text-gray-700 text-sm">7</div>
            <div className="text-center py-2 text-gray-700 text-sm">8</div>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-1">
            <div className="text-center py-2 text-gray-700 text-sm">9</div>
            <div className="text-center py-2 text-gray-700 text-sm">10</div>
            <div className="text-center py-2 text-gray-700 text-sm">11</div>
            <div className="text-center py-2 text-gray-700 text-sm">12</div>
            <div className="text-center py-2 text-gray-700 text-sm">13</div>
            <div className="text-center py-2 text-gray-700 text-sm">14</div>
            <div className="text-center py-2 text-gray-700 text-sm">15</div>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-1">
            <div className="text-center py-2 text-white text-sm bg-teal-600 rounded-full">
              16
            </div>
            <div className="text-center py-2 text-gray-700 text-sm relative">
              17
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-600 rounded-full"></div>
            </div>
            <div className="text-center py-2 text-gray-700 text-sm">18</div>
            <div className="text-center py-2 text-gray-700 text-sm relative">
              19
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-600 rounded-full"></div>
            </div>
            <div className="text-center py-2 text-gray-700 text-sm">20</div>
            <div className="text-center py-2 text-gray-700 text-sm">21</div>
            <div className="text-center py-2 text-gray-700 text-sm">22</div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow w-full px-4 py-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          오늘 (3월 16일)
        </h2>

        {/* 오늘 일정 */}
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 w-full">
          <div className="flex mb-2">
            <div className="w-2 h-full bg-teal-600 rounded-full mr-3"></div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-gray-800">
                  서울에서 집 구하기
                </h3>
                <span className="text-xs sm:text-sm text-teal-700">
                  16:00 - 16:30
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                김민지 선생님과 온라인 수업
              </p>
              <div className="flex items-center">
                <span className="mr-3 px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs">
                  온라인
                </span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                  초급
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-teal-200 flex justify-end space-x-2">
            <button className="px-3 py-1.5 border border-gray-300 text-gray-600 rounded text-sm">
              취소
            </button>
            <Link
              href="/class"
              className="px-3 py-1.5 bg-teal-600 text-white rounded text-sm"
            >
              입장하기
            </Link>
          </div>
        </div>

        {/* 내일 일정 */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          내일 (3월 17일)
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 w-full">
          <div className="flex mb-2">
            <div className="w-2 h-full bg-teal-600 rounded-full mr-3"></div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-gray-800">카페에서 주문하기</h3>
                <span className="text-xs sm:text-sm text-gray-600">
                  14:30 - 15:00
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                박준호 선생님과 온라인 수업
              </p>
              <div className="flex items-center">
                <span className="mr-3 px-2 py-0.5 bg-teal-100 text-teal-700 rounded text-xs">
                  온라인
                </span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs">
                  초급
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 추가 일정 */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          수요일 (3월 19일)
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 w-full">
          <div className="flex mb-2">
            <div className="w-2 h-full bg-orange-500 rounded-full mr-3"></div>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-medium text-gray-800">서울 지하철 투어</h3>
                <span className="text-xs sm:text-sm text-gray-600">
                  10:00 - 12:00
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mb-2">
                이지영 선생님과 오프라인 동행
              </p>
              <div className="flex items-center">
                <span className="mr-3 px-2 py-0.5 bg-orange-100 text-orange-700 rounded text-xs">
                  오프라인
                </span>
                <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded text-xs">
                  종로구
                </span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200 flex justify-end space-x-2">
            <button className="px-3 py-1.5 border border-gray-300 text-gray-600 rounded text-sm">
              취소
            </button>
            <button className="px-3 py-1.5 bg-gray-800 text-white rounded text-sm">
              상세정보
            </button>
          </div>
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <BottomNavigation />
    </div>
  );
};

export default ScheduleScreen;
