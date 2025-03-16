"use client";

import React from "react";
import { useRouter } from "next/navigation";

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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            </button>
            <div>
              <h1 className="text-lg font-medium">서울에서 집 구하기</h1>
              <p className="text-sm opacity-90">김민지 선생님 · 초급</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-teal-700">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-teal-700">
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
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* 비디오 섹션 */}
        <div className="h-1/2 md:h-auto md:w-3/5 bg-gray-900 relative">
          {/* 주요 비디오 */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full max-w-3xl max-h-96">
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800"></div>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                김민지 선생님
              </div>
            </div>
          </div>

          {/* 내 비디오 (모바일에서는 상단 오른쪽 코너에 작게 표시) */}
          <div className="absolute top-4 right-4 w-24 h-32 bg-gray-700 rounded-lg border-2 border-teal-500">
            <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white px-1 rounded text-xs">
              나
            </div>
          </div>

          {/* 비디오 컨트롤 */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 flex justify-center space-x-6">
            <button className="flex flex-col items-center justify-center">
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
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                ></path>
              </svg>
              <span className="text-xs mt-1">음소거</span>
            </button>
            <button className="flex flex-col items-center justify-center">
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
              <span className="text-xs mt-1">비디오</span>
            </button>
            <button className="flex flex-col items-center justify-center">
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                ></path>
              </svg>
              <span className="text-xs mt-1">채팅</span>
            </button>
            <button
              className="flex flex-col items-center justify-center text-red-500"
              onClick={handleBackClick}
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              <span className="text-xs mt-1">종료</span>
            </button>
          </div>
        </div>

        {/* 학습 콘텐츠 섹션 */}
        <div className="h-1/2 md:h-auto md:w-2/5 bg-white flex flex-col">
          {/* 탭 네비게이션 */}
          <div className="flex border-b">
            <button className="flex-1 py-3 px-4 text-center text-teal-600 border-b-2 border-teal-600 font-medium">
              학습 내용
            </button>
            <button className="flex-1 py-3 px-4 text-center text-gray-500">
              단어/표현
            </button>
            <button className="flex-1 py-3 px-4 text-center text-gray-500">
              메모
            </button>
          </div>

          {/* 콘텐츠 영역 */}
          <div className="flex-grow overflow-y-auto p-4">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                서울에서 집 구하기
              </h2>
              <p className="text-gray-600 mb-4">
                서울에서 월세나 전세로 집을 구할 때 필요한 표현과 절차를
                배워봅시다.
              </p>

              <div className="bg-teal-50 p-4 rounded-lg mb-4">
                <h3 className="font-medium text-teal-800 mb-2">
                  주요 대화 (상황: 부동산 방문)
                </h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="font-medium text-teal-700 w-24">
                      부동산 직원:
                    </span>
                    <p className="text-gray-800">
                      어서오세요. 무엇을 도와드릴까요?
                    </p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-teal-700 w-24">
                      손님:
                    </span>
                    <p className="text-gray-800">
                      안녕하세요. 이 동네에{" "}
                      <span className="bg-yellow-100 px-1">월세</span> 방을
                      구하고 있어요.
                    </p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-teal-700 w-24">
                      부동산 직원:
                    </span>
                    <p className="text-gray-800">
                      네, 어떤 방을 찾으세요?{" "}
                      <span className="bg-yellow-100 px-1">원룸</span>이나{" "}
                      <span className="bg-yellow-100 px-1">투룸</span> 중에 어떤
                      걸 원하세요?
                    </p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-teal-700 w-24">
                      손님:
                    </span>
                    <p className="text-gray-800">
                      원룸이면 좋겠어요.{" "}
                      <span className="bg-yellow-100 px-1">보증금</span>은
                      얼마인가요?
                    </p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-teal-700 w-24">
                      부동산 직원:
                    </span>
                    <p className="text-gray-800">
                      보통 1천만 원 정도고, 월세는 50-60만 원 사이예요.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-2">중요 용어</h3>
              <div className="space-y-2">
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-medium">월세 (wolse)</p>
                  <p className="text-gray-600 text-sm">
                    월마다 내는 집세. 보증금을 내고 매달 일정 금액을 지불합니다.
                  </p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-medium">전세 (jeonse)</p>
                  <p className="text-gray-600 text-sm">
                    큰 보증금을 내고 월세 없이 살 수 있는 한국 특유의 임대
                    방식입니다.
                  </p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-medium">보증금 (bojungeum)</p>
                  <p className="text-gray-600 text-sm">
                    계약할 때 내는 돈으로, 계약이 끝나면 돌려받습니다.
                  </p>
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-medium">원룸 (oneroom)</p>
                  <p className="text-gray-600 text-sm">
                    주방, 욕실, 침실이 하나로 되어 있는 작은 아파트입니다.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium text-gray-800 mb-2">유용한 표현</h3>
              <div className="space-y-2">
                <div className="border border-gray-200 p-3 rounded-lg">
                  <p className="font-medium">집을 구하고 있어요.</p>
                  <p className="text-gray-600 text-sm">
                    I'm looking for a place to live.
                  </p>
                </div>
                <div className="border border-gray-200 p-3 rounded-lg">
                  <p className="font-medium">보증금은 얼마인가요?</p>
                  <p className="text-gray-600 text-sm">
                    How much is the deposit?
                  </p>
                </div>
                <div className="border border-gray-200 p-3 rounded-lg">
                  <p className="font-medium">계약 기간은 어떻게 되나요?</p>
                  <p className="text-gray-600 text-sm">
                    What is the contract period?
                  </p>
                </div>
                <div className="border border-gray-200 p-3 rounded-lg">
                  <p className="font-medium">공과금은 별도인가요?</p>
                  <p className="text-gray-600 text-sm">
                    Are utilities charged separately?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 액션 버튼 */}
          <div className="border-t border-gray-200 p-3 flex justify-between items-center">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 flex items-center">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                ></path>
              </svg>
              저장하기
            </button>
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg flex items-center">
              <svg
                className="w-5 h-5 mr-1"
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
              다음 섹션
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassScreen;
