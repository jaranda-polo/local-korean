"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// 선생님 데이터 (실제 구현에서는 API로 가져올 것)
const teachers = [
  {
    id: 1,
    name: "김민지",
    imageUrl: "/placeholder.jpg",
    specialty: "일상 회화, 여행 한국어",
    languages: ["영어"],
    level: ["초급", "중급"],
    location: "서울 강남",
    rating: 4.9,
    reviews: 124,
    price: 25000,
    intro:
      "한국 생활 10년차 외국인들을 위한 맞춤 한국어를 가르칩니다. 특히 실생활에서 바로 활용할 수 있는 표현을 중점적으로 알려드립니다.",
    available: true,
  },
  {
    id: 2,
    name: "박준호",
    imageUrl: "/placeholder.jpg",
    specialty: "K-Pop, 문화, TOPIK",
    languages: ["영어", "중국어"],
    level: ["초급", "중급", "고급"],
    location: "서울 홍대",
    rating: 4.8,
    reviews: 98,
    price: 28000,
    intro:
      "K-Pop과 한국 드라마를 활용한 재미있는 한국어 수업을 제공합니다. TOPIK 시험 대비 수업도 가능합니다.",
    available: true,
  },
  {
    id: 3,
    name: "이지영",
    imageUrl: "/placeholder.jpg",
    specialty: "비즈니스 한국어, 이메일 작성",
    languages: ["영어", "일본어"],
    level: ["중급", "고급"],
    location: "서울 종로",
    rating: 4.7,
    reviews: 56,
    price: 30000,
    intro:
      "비즈니스 상황에서 필요한 전문적인 한국어를 가르칩니다. 이메일 작성, 회의 진행, 발표 등 업무에 필요한 한국어를 배울 수 있습니다.",
    available: false,
  },
];

// 콘텐츠 데이터 (실제 구현에서는 API로 가져올 것)
const contents = [
  {
    id: 1,
    title: "한국 음식점에서 주문하기",
    category: "일상생활",
    level: "초급",
    duration: "30분",
    description:
      "한국 식당에서 메뉴 주문하기, 음식 추천 요청하기, 결제하기 등 식당에서 필요한 표현을 배웁니다.",
    popularity: 2500,
    rating: 4.8,
  },
  {
    id: 2,
    title: "한국에서 휴대폰 개통하기",
    category: "실용",
    level: "중급",
    duration: "45분",
    description:
      "통신사 방문부터 요금제 선택, 서류 작성까지 휴대폰 개통에 필요한 용어와 표현을 배웁니다.",
    popularity: 1800,
    rating: 4.6,
  },
  {
    id: 3,
    title: "서울에서 집 구하기",
    category: "실용",
    level: "초급",
    duration: "60분",
    description:
      "부동산 방문, 월세/전세 개념 이해, 계약 용어 등 한국에서 집을 구할 때 필요한 표현을 배웁니다.",
    popularity: 3200,
    rating: 4.9,
  },
  {
    id: 4,
    title: "TOPIK 중급 대비 문법",
    category: "시험",
    level: "중급",
    duration: "60분",
    description:
      "TOPIK 중급 시험에 자주 출제되는 문법 패턴과 어휘를 학습합니다.",
    popularity: 1500,
    rating: 4.7,
  },
];

// 온라인 매칭 메인 컴포넌트
const OnlineMatchingScreen = () => {
  const router = useRouter();

  // 상태 관리
  const [step, setStep] = useState(1); // 1: 학습 유형 선택, 2: 경로 선택, 3A: 선생님 선택, 3B: 콘텐츠 선택, 4: 일정 선택
  const [learningType, setLearningType] = useState("");
  const [pathChoice, setPathChoice] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    level: [],
    category: [],
    language: [],
  });

  // 필터링된 선생님/콘텐츠
  const filteredTeachers = teachers.filter(
    (teacher) =>
      (searchQuery === "" ||
        teacher.name.includes(searchQuery) ||
        teacher.specialty.includes(searchQuery)) &&
      (filters.level.length === 0 ||
        filters.level.some((level) => teacher.level.includes(level))) &&
      (filters.language.length === 0 ||
        filters.language.some((lang) => teacher.languages.includes(lang))),
  );

  const filteredContents = contents.filter(
    (content) =>
      (searchQuery === "" ||
        content.title.includes(searchQuery) ||
        content.description.includes(searchQuery)) &&
      (filters.level.length === 0 || filters.level.includes(content.level)) &&
      (filters.category.length === 0 ||
        filters.category.includes(content.category)),
  );

  // 필터 토글 함수
  const toggleFilter = (category, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter(
          (item) => item !== value,
        );
      } else {
        newFilters[category] = [...newFilters[category], value];
      }
      return newFilters;
    });
  };

  // 뒤로가기 핸들러
  const handleBackClick = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    } else {
      router.back();
    }
  };

  // 다음 단계로 진행
  const goToNextStep = () => {
    setStep((prev) => prev + 1);
  };

  // 학습 유형 선택 화면
  const renderLearningTypeStep = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        학습 유형을 선택하세요
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          className={`p-6 rounded-xl border-2 ${learningType === "freetalk" ? "border-teal-600 bg-teal-50" : "border-gray-200"} hover:border-teal-600 hover:bg-teal-50 transition duration-200`}
          onClick={() => setLearningType("freetalk")}
        >
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg
              className="w-6 h-6 text-teal-600"
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
          </div>
          <h3 className="text-lg font-medium text-gray-800 text-center mb-2">
            프리토킹
          </h3>
          <p className="text-gray-600 text-sm text-center">
            자유로운 주제로 대화하며 회화 실력을 향상시킵니다. 일상 대화에
            자신감을 키우는데 좋습니다.
          </p>
        </button>

        <button
          className={`p-6 rounded-xl border-2 ${learningType === "content" ? "border-teal-600 bg-teal-50" : "border-gray-200"} hover:border-teal-600 hover:bg-teal-50 transition duration-200`}
          onClick={() => setLearningType("content")}
        >
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg
              className="w-6 h-6 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-800 text-center mb-2">
            콘텐츠로 대화하기
          </h3>
          <p className="text-gray-600 text-sm text-center">
            특정 주제나 상황(음식점, 병원, 쇼핑 등)에 맞는 표현과 어휘를
            배웁니다.
          </p>
        </button>

        <button
          className={`p-6 rounded-xl border-2 ${learningType === "official" ? "border-teal-600 bg-teal-50" : "border-gray-200"} hover:border-teal-600 hover:bg-teal-50 transition duration-200`}
          onClick={() => setLearningType("official")}
        >
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg
              className="w-6 h-6 text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-800 text-center mb-2">
            공인학습레벨
          </h3>
          <p className="text-gray-600 text-sm text-center">
            TOPIK 등 공식 시험 준비나 체계적인 한국어 학습을 원하는 분들을 위한
            옵션입니다.
          </p>
        </button>
      </div>

      <div className="text-center mt-8">
        <button
          className={`px-6 py-3 bg-teal-600 text-white rounded-lg font-medium ${!learningType ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!learningType}
          onClick={goToNextStep}
        >
          다음 단계
        </button>
      </div>
    </div>
  );

  // 경로 선택 화면
  const renderPathChoiceStep = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        매칭 방법을 선택하세요
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button
          className={`p-6 rounded-xl border-2 ${pathChoice === "teacher" ? "border-teal-600 bg-teal-50" : "border-gray-200"} hover:border-teal-600 hover:bg-teal-50 transition duration-200`}
          onClick={() => setPathChoice("teacher")}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-800">
              선생님 먼저 선택하기
            </h3>
          </div>
          <p className="text-gray-600">
            선생님의 프로필, 전문 분야, 리뷰를 확인한 후 선택합니다. 그 다음
            선생님과 함께 배울 콘텐츠를 선택합니다.
          </p>
        </button>

        <button
          className={`p-6 rounded-xl border-2 ${pathChoice === "content" ? "border-teal-600 bg-teal-50" : "border-gray-200"} hover:border-teal-600 hover:bg-teal-50 transition duration-200`}
          onClick={() => setPathChoice("content")}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4">
              <svg
                className="w-6 h-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-800">
              콘텐츠 먼저 선택하기
            </h3>
          </div>
          <p className="text-gray-600">
            배우고 싶은 주제, 상황, 콘텐츠를 먼저 선택합니다. 그 다음 해당
            콘텐츠를 가르칠 수 있는 선생님을 선택하거나 자동으로 매칭할 수
            있습니다.
          </p>
        </button>
      </div>

      <div className="text-center mt-8">
        <button
          className={`px-6 py-3 bg-teal-600 text-white rounded-lg font-medium ${!pathChoice ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!pathChoice}
          onClick={goToNextStep}
        >
          다음 단계
        </button>
      </div>
    </div>
  );

  // 선생님 선택 화면
  const renderTeacherSelectionStep = () => (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">선생님 선택</h2>

      {/* 검색 및 필터 */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="선생님 이름, 전문 분야 검색"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
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
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 mr-2">레벨:</span>
          {["초급", "중급", "고급"].map((level) => (
            <button
              key={level}
              className={`px-3 py-1 rounded-full text-xs ${filters.level.includes(level) ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => toggleFilter("level", level)}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-sm text-gray-600 mr-2">언어:</span>
          {["영어", "중국어", "일본어"].map((lang) => (
            <button
              key={lang}
              className={`px-3 py-1 rounded-full text-xs ${filters.language.includes(lang) ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => toggleFilter("language", lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* 선생님 목록 */}
      <div className="space-y-4">
        {filteredTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className={`p-4 bg-white rounded-xl shadow-sm border-2 ${selectedTeacher?.id === teacher.id ? "border-teal-600" : "border-transparent"} hover:border-teal-600 transition duration-200 cursor-pointer`}
            onClick={() => setSelectedTeacher(teacher)}
          >
            <div className="flex">
              <div className="w-16 h-16 bg-gray-300 rounded-full mr-4 flex-shrink-0"></div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-gray-800">
                    {teacher.name} 선생님
                  </h3>
                  <div className="flex items-center text-sm">
                    <span className="text-yellow-500 flex items-center">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      {teacher.rating}
                    </span>
                    <span className="text-gray-500 ml-1">
                      ({teacher.reviews})
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  {teacher.specialty}
                </p>
                <div className="flex flex-wrap gap-2 mt-1 mb-2">
                  {teacher.languages.map((lang) => (
                    <span
                      key={lang}
                      className="bg-teal-100 text-teal-700 text-xs py-0.5 px-2 rounded"
                    >
                      {lang}
                    </span>
                  ))}
                  {teacher.level.map((lvl) => (
                    <span
                      key={lvl}
                      className="bg-blue-100 text-blue-700 text-xs py-0.5 px-2 rounded"
                    >
                      {lvl}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {teacher.intro}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-medium text-gray-700">
                    {teacher.price.toLocaleString()}원/30분
                  </span>
                  {!teacher.available && (
                    <span className="text-xs text-red-600">현재 예약 불가</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          className={`px-6 py-3 bg-teal-600 text-white rounded-lg font-medium ${!selectedTeacher ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!selectedTeacher}
          onClick={goToNextStep}
        >
          다음 단계
        </button>
      </div>
    </div>
  );

  // 콘텐츠 선택 화면
  const renderContentSelectionStep = () => (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        학습 콘텐츠 선택
      </h2>

      {/* 검색 및 필터 */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="콘텐츠 제목, 내용 검색"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
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
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600 mr-2">레벨:</span>
          {["초급", "중급", "고급"].map((level) => (
            <button
              key={level}
              className={`px-3 py-1 rounded-full text-xs ${filters.level.includes(level) ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => toggleFilter("level", level)}
            >
              {level}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-sm text-gray-600 mr-2">카테고리:</span>
          {["일상생활", "실용", "여행", "문화", "시험"].map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded-full text-xs ${filters.category.includes(category) ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700"}`}
              onClick={() => toggleFilter("category", category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 콘텐츠 목록 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredContents.map((content) => (
          <div
            key={content.id}
            className={`bg-white rounded-xl shadow-sm overflow-hidden border-2 ${selectedContent?.id === content.id ? "border-teal-600" : "border-transparent"} hover:border-teal-600 transition duration-200 cursor-pointer`}
            onClick={() => setSelectedContent(content)}
          >
            <div className="h-32 bg-gray-300 relative">
              <div className="absolute bottom-0 left-0 bg-teal-600 text-white px-2 py-1 text-xs rounded-tr-lg">
                {content.level}
              </div>
              <div className="absolute bottom-0 right-0 bg-gray-800 bg-opacity-70 text-white px-2 py-1 text-xs">
                {content.duration}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800 mb-1">
                {content.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                {content.description}
              </p>
              <div className="flex items-center text-sm text-gray-500 justify-between">
                <div className="flex items-center">
                  <span className="flex items-center mr-3">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {content.popularity.toLocaleString()}
                  </span>
                  <span className="flex items-center text-yellow-500">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    {content.rating}
                  </span>
                </div>
                <span className="px-2 py-0.5 bg-teal-100 text-teal-700 rounded-full text-xs">
                  {content.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          className={`px-6 py-3 bg-teal-600 text-white rounded-lg font-medium ${!selectedContent ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!selectedContent}
          onClick={() => router.push("/schedule")}
        >
          예약하기
        </button>
      </div>
    </div>
  );

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
              온라인 학습 매칭
            </div>
          </div>
        </div>
      </header>

      {/* 진행 단계 표시 */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              1
            </div>
            <div
              className={`flex-grow h-1 mx-2 ${step >= 2 ? "bg-teal-600" : "bg-gray-200"}`}
            ></div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              2
            </div>
            <div
              className={`flex-grow h-1 mx-2 ${step >= 3 ? "bg-teal-600" : "bg-gray-200"}`}
            ></div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              3
            </div>
            <div
              className={`flex-grow h-1 mx-2 ${step >= 4 ? "bg-teal-600" : "bg-gray-200"}`}
            ></div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-600"}`}
            >
              4
            </div>
          </div>
          <div className="flex text-xs text-gray-500 mt-1 justify-between">
            <span className={step >= 1 ? "text-teal-600 font-medium" : ""}>
              학습 유형
            </span>
            <span className={step >= 2 ? "text-teal-600 font-medium" : ""}>
              매칭 방법
            </span>
            <span className={step >= 3 ? "text-teal-600 font-medium" : ""}>
              {pathChoice === "teacher"
                ? "선생님 선택"
                : pathChoice === "content"
                  ? "콘텐츠 선택"
                  : "선택"}
            </span>
            <span className={step >= 4 ? "text-teal-600 font-medium" : ""}>
              예약
            </span>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <main className="flex-grow container mx-auto px-4 py-6">
        {step === 1 && renderLearningTypeStep()}
        {step === 2 && renderPathChoiceStep()}
        {step === 3 && pathChoice === "teacher" && renderTeacherSelectionStep()}
        {step === 3 && pathChoice === "content" && renderContentSelectionStep()}
      </main>
    </div>
  );
};

export default OnlineMatchingScreen;
