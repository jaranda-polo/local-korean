"use client";

import React from "react";
import BottomNavigation from "@/components/common/BottomNavigation";

const MessagesScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">메시지</h1>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 뷰 선택 탭 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex">
            <button className="py-3 px-4 border-b-2 border-teal-600 text-teal-600 font-medium">
              모든 대화
            </button>
            <button className="py-3 px-4 text-gray-500">선생님</button>
            <button className="py-3 px-4 text-gray-500">시스템 알림</button>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 메시지 목록 */}
        <div className="space-y-3">
          {/* 읽지 않은 메시지 있는 대화 */}
          <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-teal-600">
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 flex-shrink-0 relative">
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-teal-600 rounded-full text-white flex items-center justify-center text-xs">
                  2
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">김민지 선생님</h3>
                  <span className="text-xs text-gray-500">오전 10:25</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                  안녕하세요! 오늘 수업에서 배울 '서울에서 집 구하기' 콘텐츠에
                  대해 미리 알려드릴게요. 월세와 전세의 차이점에 대해 중점적으로
                  다룰 예정입니다.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">
                    오늘 수업
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 일반 대화 */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">박준호 선생님</h3>
                  <span className="text-xs text-gray-500">어제</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                  네, 내일 수업에서 뵙겠습니다! 혹시 카페에서 주문할 때 특별히
                  배우고 싶은 표현이 있으신가요?
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    내일 수업
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 시스템 메시지 */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-gray-200 mr-3 flex-shrink-0 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">시스템 알림</h3>
                  <span className="text-xs text-gray-500">3일 전</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  이지영 선생님과의 오프라인 동행이 확정되었습니다. 3월 19일
                  오전 10시, 종로3가역 1번 출구에서 만나실 예정입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 오래된 대화 */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">최영호 선생님</h3>
                  <span className="text-xs text-gray-500">1주일 전</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                  수업 잘 들으셨나요? 다음에 또 만나뵙길 바랍니다. 혹시 궁금한
                  점이 있으시면 언제든지 메시지 주세요.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                    지난 수업
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 이지영 선생님 */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">이지영 선생님</h3>
                  <span className="text-xs text-gray-500">1주일 전</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                  서울 지하철 투어 오프라인 동행 신청 감사합니다! 편안한 신발을
                  준비해 오시면 좋을 것 같아요. 지하철 노선도를 미리 첨부해
                  드립니다.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                    오프라인 동행
                  </span>
                  <span className="text-xs text-teal-600">첨부파일 1개</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 하단 네비게이션 */}
      <BottomNavigation />
    </div>
  );
};

export default MessagesScreen;
