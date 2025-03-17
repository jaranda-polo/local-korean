"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const ClassScreen = () => {
  const router = useRouter();
  const { t } = useLanguage();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-4">
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
              <h1 className="text-lg font-medium">
                {t("home.findingApartment") || "서울에서 집 구하기"}
              </h1>
              <p className="text-sm opacity-90">
                김민지 선생님 · {t("schedule.beginner") || "초급"}
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
        {/* 비디오 섹션 */}
        <div className="h-1/2 md:h-auto md:w-3/5 bg-gray-900 relative">
          {/* 메인 비디오 */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full max-w-3xl max-h-96">
              <div className="absolute top-0 left-0 w-full h-full bg-gray-800"></div>
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                김민지 선생님
              </div>
            </div>
          </div>

          {/* 내 비디오 (모바일에서는 오른쪽 상단 작은 화면) */}
          <div className="absolute top-4 right-4 w-24 h-32 bg-gray-700 rounded-lg border-2 border-purple-500">
            <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white px-1 rounded text-xs">
              {t("class.me") || "나"}
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
              <span className="text-xs mt-1">
                {t("class.mute") || "음소거"}
              </span>
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
              <span className="text-xs mt-1">
                {t("class.video") || "비디오"}
              </span>
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
              <span className="text-xs mt-1">{t("class.chat") || "채팅"}</span>
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
              <span className="text-xs mt-1">{t("class.end") || "종료"}</span>
            </button>
          </div>
        </div>

        {/* 학습 콘텐츠 섹션 */}
        <div className="h-1/2 md:h-auto md:w-2/5 bg-white flex flex-col">
          {/* 탭 네비게이션 */}
          <div className="flex border-b">
            <button className="flex-1 py-3 px-4 text-center text-purple-600 border-b-2 border-purple-600 font-medium">
              {t("class.learningContent") || "학습 내용"}
            </button>
            <button className="flex-1 py-3 px-4 text-center text-gray-500">
              {t("class.vocabulary") || "단어/표현"}
            </button>
            <button className="flex-1 py-3 px-4 text-center text-gray-500">
              {t("class.notes") || "메모"}
            </button>
          </div>

          {/* 콘텐츠 영역 */}
          <div className="flex-grow overflow-y-auto p-4">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {t("home.findingApartment") || "서울에서 집 구하기"}
              </h2>
              <p className="text-gray-600 mb-4">
                서울에서 월세나 전세로 집을 구할 때 필요한 표현과 절차를
                배워봅시다.
              </p>

              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h3 className="font-medium text-purple-800 mb-2">
                  {t("class.mainDialog") || "주요 대화 (상황: 부동산 방문)"}
                </h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="font-medium text-purple-700 w-24">
                      {t("class.agent") || "부동산 직원:"}
                    </span>
                    <p className="text-gray-800">
                      어서오세요. 무엇을 도와드릴까요?
                    </p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-purple-700 w-24">
                      {t("class.customer") || "손님:"}
                    </span>
                    <p className="text-gray-800">
                      안녕하세요. 이 동네에{" "}
                      <span className="bg-yellow-100 px-1">월세</span> 방을
                      구하고 있어요.
                    </p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-purple-700 w-24">
                      {t("class.agent") || "부동산 직원:"}
                    </span>
                    <p className="text-gray-800">
                      네, 어떤 방을 찾으세요?{" "}
                      <span className="bg-yellow-100 px-1">원룸</span>이나{" "}
                      <span className="bg-yellow-100 px-1">투룸</span> 중에 어떤
                      걸 원하세요?
                    </p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-purple-700 w-24">
                      {t("class.customer") || "손님:"}
                    </span>
                    <p className="text-gray-800">
                      원룸이면 좋겠어요.{" "}
                      <span className="bg-yellow-100 px-1">보증금</span>은
                      얼마인가요?
                    </p>
                  </div>
                  <div className="flex">
                    <span className="font-medium text-purple-700 w-24">
                      {t("class.agent") || "부동산 직원:"}
                    </span>
                    <p className="text-gray-800">
                      보통 1천만 원 정도고, 월세는 50-60만 원 사이예요.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium text-gray-800 mb-2">
                {t("class.keyTerms") || "중요 용어"}
              </h3>
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
              <h3 className="font-medium text-gray-800 mb-2">
                {t("class.usefulExpressions") || "유용한 표현"}
              </h3>
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
            <button className="px-4 py-2 border border-purple-300 rounded-lg text-purple-600 flex items-center">
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
              {t("class.save") || "저장하기"}
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg flex items-center">
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
              {t("class.nextSection") || "다음 섹션"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassScreen;
