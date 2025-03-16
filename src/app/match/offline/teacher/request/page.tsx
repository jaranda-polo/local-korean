"use client";

import React from "react";
import { useRouter } from "next/navigation";

const OfflineRequestFormScreen = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleSubmit = () => {
    // 실제 구현에서는 폼 데이터를 검증하고 API에 전송해야 합니다
    router.push("/schedule");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <button className="mr-3" onClick={handleBackClick}>
              <svg
                className="w-6 h-6 text-gray-700"
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
            <div className="text-xl font-bold text-gray-800">
              김현우 선생님에게 요청하기
            </div>
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {/* 선생님 정보 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-gray-300 mr-3 flex-shrink-0"></div>
            <div>
              <h3 className="font-medium text-gray-800">김현우 선생님</h3>
              <p className="text-sm text-gray-600">서울 강남, 서초, 송파구</p>
              <div className="flex items-center text-sm mt-1">
                <span className="text-yellow-500 flex items-center">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  4.8
                </span>
                <span className="text-gray-500 ml-1">(24 리뷰)</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-sm text-gray-600">
              강남, 서초 지역 전문입니다. 부동산 계약, 휴대폰 개통, 쇼핑 등
              실용적인 도움을 드릴 수 있습니다.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-orange-100 text-orange-700 text-xs py-1 px-2 rounded">
                부동산
              </span>
              <span className="bg-orange-100 text-orange-700 text-xs py-1 px-2 rounded">
                휴대폰
              </span>
              <span className="bg-orange-100 text-orange-700 text-xs py-1 px-2 rounded">
                쇼핑
              </span>
            </div>
          </div>
        </div>

        {/* 동행 요청서 */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            동행 요청서 작성
          </h3>

          <div className="space-y-4">
            {/* 동행 목적 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                동행 목적*
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                defaultValue="phone"
              >
                <option value="">동행 목적을 선택해주세요</option>
                <option value="phone">휴대폰 개통</option>
                <option value="real_estate">부동산/집 구하기</option>
                <option value="shopping">쇼핑 도움</option>
                <option value="other">기타 (직접 입력)</option>
              </select>
            </div>

            {/* 만남 장소 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                만남 장소*
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="예: 강남역 2번 출구"
                defaultValue="강남역 11번 출구"
              />
            </div>

            {/* 날짜 및 시간 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                희망 날짜*
              </label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                defaultValue="2025-03-19"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                희망 시간*
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="time"
                  placeholder="시작 시간"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  defaultValue="14:00"
                />
                <input
                  type="time"
                  placeholder="종료 시간"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  defaultValue="16:00"
                />
              </div>
            </div>

            {/* 예상 소요 시간 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                예상 소요 시간
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                defaultValue="2"
              >
                <option value="1">1시간</option>
                <option value="2">2시간</option>
                <option value="3">3시간</option>
                <option value="4">4시간</option>
                <option value="5">5시간 이상</option>
              </select>
            </div>

            {/* 상세 요청 사항 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                상세 요청 사항
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="선생님에게 알려주고 싶은 구체적인 사항을 적어주세요."
                defaultValue="처음으로 한국에서 휴대폰을 개통하려고 합니다. 외국인 등록증은 갖고 있습니다. 어떤 통신사가 좋을지, 요금제는 어떤 것이 적합할지 조언해주시면 좋겠습니다. 영어로 소통 가능하신가요?"
              ></textarea>
            </div>

            {/* 선호하는 언어 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                선호하는 의사소통 언어
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="language"
                    className="w-4 h-4 text-teal-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">한국어</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="language"
                    className="w-4 h-4 text-teal-600"
                    defaultChecked
                  />
                  <span className="ml-2 text-sm text-gray-700">영어</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="language"
                    className="w-4 h-4 text-teal-600"
                  />
                  <span className="ml-2 text-sm text-gray-700">혼합</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* 비용 정보 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
          <h4 className="font-medium text-gray-800 mb-3">예상 비용</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>기본 요금 (2시간)</span>
              <span>90,000원</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>교통비 (예상)</span>
              <span>10,000원</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>서비스 수수료</span>
              <span>10,000원</span>
            </div>
            <div className="pt-2 mt-2 border-t border-gray-200 flex justify-between font-medium">
              <span>총 예상 비용</span>
              <span className="text-teal-600">110,000원</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            * 최종 비용은 실제 소요된 시간과 교통비에 따라 조정될 수 있습니다.
          </p>
        </div>
      </main>

      {/* 하단 버튼 */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
        <button
          className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium"
          onClick={handleSubmit}
        >
          요청서 보내기
        </button>
      </div>
    </div>
  );
};

export default OfflineRequestFormScreen;
