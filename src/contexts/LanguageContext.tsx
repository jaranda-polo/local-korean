"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define available languages
export type Language = "en" | "ko" | "ja";

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string) => key,
});

// Define translations
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.search": "Search",
    "nav.schedule": "Schedule",
    "nav.messages": "Messages",
    "nav.profile": "Profile",

    // Home Page
    "home.greeting": "Hello",
    "home.learn.question": "What would you like to learn today?",
    "home.upcoming": "Upcoming Classes",
    "home.viewAll": "View All",
    "home.findingApartment": "Finding an Apartment in Seoul",
    "home.with": "With",
    "home.timeLeft": "min left",
    "home.joinNow": "Join Now",
    "home.orderingCafe": "Ordering at a Cafe",
    "home.details": "Details",
    "home.startOnline": "Start Online Learning",
    "home.requestGuide": "Request In-Person Guide",
    "home.recommended": "Recommended for You",
    "home.kpopVocab": "K-pop Vocabulary",
    "home.learnKpop": "Learn K-pop Terminology",
    "home.kpopWords": "Essential words for K-pop fans",
    "home.dailyConvo": "Daily Conversations",
    "home.everydayPhrases": "Everyday Korean Phrases",
    "home.usefulExpressions": "Useful expressions for daily life",

    // Messages Page
    "messages.title": "Messages",
    "messages.allConversations": "All Conversations",
    "messages.teachers": "Teachers",
    "messages.systemNotifications": "System Notifications",
    "messages.todayClass": "Today's Class",
    "messages.tomorrowClass": "Tomorrow's Class",
    "messages.pastClass": "Past Class",
    "messages.offlineGuide": "Offline Guide",
    "messages.attachment": "Attachment",

    // Schedule Page
    "schedule.title": "My Schedule",
    "schedule.schedule": "Schedule",
    "schedule.pastClasses": "Past Classes",
    "schedule.today": "Today",
    "schedule.tomorrow": "Tomorrow",
    "schedule.online": "Online",
    "schedule.offline": "Offline",
    "schedule.beginner": "Beginner",
    "schedule.intermediate": "Intermediate",
    "schedule.advanced": "Advanced",
    "schedule.cancel": "Cancel",
    "schedule.join": "Join",
    "schedule.details": "Details",

    // Search Page
    "search.placeholder": "Search for teachers, content, topics",
    "search.recentSearches": "Recent Searches",
    "search.clearAll": "Clear All",
    "search.categories": "Categories",
    "search.all": "All",
    "search.teachers": "Teachers",
    "search.content": "Content",
    "search.popularSearches": "Popular Searches",
    "search.publicTransport": "Using Public Transport",
    "search.hospitalVisit": "Hospital Visit",
    "search.orderingRestaurant": "Ordering at Restaurants",
    "search.cafeConversation": "Cafe Conversation",
    "search.topikPrep": "TOPIK Preparation",
    "search.recommended": "Recommended Exploration",
    "search.seoulGuide": "Seoul Living Guide",
    "search.kpopKorean": "Korean for K-Pop Fans",
    "search.cultureEtiquette": "Korean Culture and Etiquette",

    // Profile Page
    "profile.title": "Profile",
    "profile.editProfile": "Edit Profile",
    "profile.learningStatus": "Learning Status",
    "profile.totalClassTime": "Total Class Time",
    "profile.completedClasses": "Completed Classes",
    "profile.savedWords": "Saved Words",
    "profile.viewAll": "View All",
    "profile.paymentSubscription": "Payment & Subscription",
    "profile.notificationSettings": "Notification Settings",
    "profile.helpSupport": "Help & Support",
    "profile.logout": "Logout",

    // Offline Matching
    "offline.title": "Request Offline Guide",
    "offline.selectMethod": "Select a matching method",
    "offline.fillForm": "Fill out a request form",
    "offline.formDescription":
      "Create a request form describing your needs and situation, and choose a teacher who applies.",
    "offline.selectTeacher": "Select a teacher first",
    "offline.teacherDescription":
      "Check teacher profiles directly and select one, then fill out a request form.",
    "offline.submit": "Submit Request",

    // Teacher Selection
    "teacher.title": "Offline Guide Teachers",
    "teacher.searchPlaceholder": "Search by area, specialty, keywords",
    "teacher.allAreas": "All Areas",
    "teacher.allFields": "All Fields",
    "teacher.hospital": "Hospital",
    "teacher.realEstate": "Real Estate",
    "teacher.restaurants": "Restaurants",
    "teacher.transportation": "Transportation",
    "teacher.tourism": "Tourism",
    "teacher.availableTeachers": "Available Offline Guide Teachers",
    "teacher.englishAvailable": "English Available",
    "teacher.chineseAvailable": "Chinese Available",
    "teacher.hourly": "/hour",
    "teacher.availableToday": "Available Today",
    "teacher.availableTomorrow": "Available Tomorrow",
    "teacher.availableIn3Days": "Available in 3 days",
    "teacher.select": "Select",
    "teacher.filter": "Filter",
    "teacher.sort": "Sort",

    // Request Form
    "request.title": "Request to",
    "request.formTitle": "Fill out request form",
    "request.purpose": "Purpose*",
    "request.selectPurpose": "Select purpose",
    "request.phoneActivation": "Phone Activation",
    "request.realEstate": "Real Estate/Housing",
    "request.shoppingHelp": "Shopping Help",
    "request.other": "Other (specify)",
    "request.meetingPlace": "Meeting Place*",
    "request.meetingPlaceholder": "e.g., Gangnam Station Exit 2",
    "request.preferredDate": "Preferred Date*",
    "request.preferredTime": "Preferred Time*",
    "request.startTime": "Start Time",
    "request.endTime": "End Time",
    "request.estimatedDuration": "Estimated Duration",
    "request.hour": "hour",
    "request.hours": "hours",
    "request.hoursOrMore": "hours or more",
    "request.details": "Request Details",
    "request.detailsPlaceholder":
      "Please provide specific details you want the teacher to know.",
    "request.preferredLanguage": "Preferred Communication Language",
    "request.korean": "Korean",
    "request.english": "English",
    "request.mixed": "Mixed",
    "request.estimatedCost": "Estimated Cost",
    "request.basicFee": "Basic Fee",
    "request.transportationFee": "Transportation Fee (estimated)",
    "request.serviceFee": "Service Fee",
    "request.totalEstimatedCost": "Total Estimated Cost",
    "request.costNote":
      "* Final cost may vary based on actual time spent and transportation costs.",
    "request.send": "Send Request",

    // Online Matching
    "online.title": "Online Learning Matching",
    "online.step1": "Learning Type",
    "online.step2": "Matching Method",
    "online.step3": "Selection",
    "online.step4": "Booking",
    "online.selectLearningType": "Select a learning type",
    "online.freeTalking": "Free Talking",
    "online.freeTalkingDesc":
      "Improve your conversation skills by talking about free topics. Great for building confidence in everyday conversations.",
    "online.contentBased": "Content-Based Conversation",
    "online.contentBasedDesc":
      "Learn expressions and vocabulary for specific situations (restaurants, hospitals, shopping, etc.).",
    "online.officialLearning": "Official Learning Level",
    "online.officialLearningDesc":
      "For those preparing for official tests like TOPIK or wanting systematic Korean language learning.",
    "online.nextStep": "Next Step",
    "online.selectMatchingMethod": "Select a matching method",
    "online.teacherFirst": "Select Teacher First",
    "online.teacherFirstDesc":
      "Check teacher profiles, specialties, and reviews before selecting. Then choose content to learn with the teacher.",
    "online.contentFirst": "Select Content First",
    "online.contentFirstDesc":
      "Choose the topic, situation, or content you want to learn first. Then select a teacher who can teach that content or get automatically matched.",
    "online.selectTeacher": "Select Teacher",
    "online.searchTeacher": "Search teacher name, specialty",
    "online.level": "Level:",
    "online.beginner": "Beginner",
    "online.intermediate": "Intermediate",
    "online.advanced": "Advanced",
    "online.language": "Language:",
    "online.english": "English",
    "online.chinese": "Chinese",
    "online.japanese": "Japanese",
    "online.unavailable": "Currently Unavailable",
    "online.selectContent": "Select Learning Content",
    "online.searchContent": "Search content title, description",
    "online.category": "Category:",
    "online.dailyLife": "Daily Life",
    "online.practical": "Practical",
    "online.travel": "Travel",
    "online.culture": "Culture",
    "online.exam": "Exam",
    "online.book": "Book",

    // Class Page
    "class.back": "Back",
    "class.notifications": "Notifications",
    "class.mute": "Mute",
    "class.video": "Video",
    "class.chat": "Chat",
    "class.end": "End",
    "class.me": "Me",
    "class.learningContent": "Learning Content",
    "class.vocabulary": "Vocabulary",
    "class.notes": "Notes",
    "class.mainDialog":
      "Main Dialog (Situation: Visiting a Real Estate Agency)",
    "class.agent": "Agent:",
    "class.customer": "Customer:",
    "class.keyTerms": "Key Terms",
    "class.usefulExpressions": "Useful Expressions",
    "class.save": "Save",
    "class.nextSection": "Next Section",
  },
  ko: {
    // Navigation
    "nav.home": "홈",
    "nav.search": "검색",
    "nav.schedule": "일정",
    "nav.messages": "메시지",
    "nav.profile": "프로필",

    // Home Page
    "home.greeting": "안녕하세요",
    "home.learn.question": "오늘은 무엇을 배우고 싶으신가요?",
    "home.upcoming": "예정된 수업",
    "home.viewAll": "전체 보기",
    "home.findingApartment": "서울에서 집 구하기",
    "home.with": "선생님:",
    "home.timeLeft": "분 남음",
    "home.joinNow": "지금 참여하기",
    "home.orderingCafe": "카페에서 주문하기",
    "home.details": "상세 정보",
    "home.startOnline": "온라인 학습 시작하기",
    "home.requestGuide": "오프라인 동행 요청하기",
    "home.recommended": "추천 콘텐츠",
    "home.kpopVocab": "K-pop 어휘",
    "home.learnKpop": "K-pop 용어 배우기",
    "home.kpopWords": "K-pop 팬을 위한 필수 단어",
    "home.dailyConvo": "일상 대화",
    "home.everydayPhrases": "일상 한국어 표현",
    "home.usefulExpressions": "일상생활에 유용한 표현",

    // Messages Page
    "messages.title": "메시지",
    "messages.allConversations": "모든 대화",
    "messages.teachers": "선생님",
    "messages.systemNotifications": "시스템 알림",
    "messages.todayClass": "오늘 수업",
    "messages.tomorrowClass": "내일 수업",
    "messages.pastClass": "지난 수업",
    "messages.offlineGuide": "오프라인 동행",
    "messages.attachment": "첨부파일",

    // Schedule Page
    "schedule.title": "내 일정",
    "schedule.schedule": "일정",
    "schedule.pastClasses": "지난 수업",
    "schedule.today": "오늘",
    "schedule.tomorrow": "내일",
    "schedule.online": "온라인",
    "schedule.offline": "오프라인",
    "schedule.beginner": "초급",
    "schedule.intermediate": "중급",
    "schedule.advanced": "고급",
    "schedule.cancel": "취소",
    "schedule.join": "입장하기",
    "schedule.details": "상세정보",

    // Search Page
    "search.placeholder": "선생님, 콘텐츠, 주제 검색",
    "search.recentSearches": "최근 검색어",
    "search.clearAll": "전체 삭제",
    "search.categories": "카테고리",
    "search.all": "전체",
    "search.teachers": "선생님",
    "search.content": "콘텐츠",
    "search.popularSearches": "인기 검색어",
    "search.publicTransport": "대중교통 이용하기",
    "search.hospitalVisit": "병원 방문",
    "search.orderingRestaurant": "음식점에서 주문하기",
    "search.cafeConversation": "카페 회화",
    "search.topikPrep": "TOPIK 준비",
    "search.recommended": "추천 탐색",
    "search.seoulGuide": "서울 생활 정착 가이드",
    "search.kpopKorean": "K-Pop 팬을 위한 한국어",
    "search.cultureEtiquette": "한국 문화와 예절",

    // Profile Page
    "profile.title": "프로필",
    "profile.editProfile": "프로필 편집",
    "profile.learningStatus": "학습 현황",
    "profile.totalClassTime": "총 수업 시간",
    "profile.completedClasses": "완료한 수업",
    "profile.savedWords": "저장한 단어",
    "profile.viewAll": "모두 보기",
    "profile.paymentSubscription": "결제 및 구독 정보",
    "profile.notificationSettings": "알림 설정",
    "profile.helpSupport": "도움말 및 지원",
    "profile.logout": "로그아웃",

    // Offline Matching
    "offline.title": "오프라인 동행 신청",
    "offline.selectMethod": "매칭 방법을 선택하세요",
    "offline.fillForm": "신청서 작성하기",
    "offline.formDescription":
      "나의 요구사항과 상황을 설명하는 신청서를 작성하고, 적합한 선생님이 지원하면 선택합니다.",
    "offline.selectTeacher": "선생님 먼저 선택하기",
    "offline.teacherDescription":
      "선생님의 프로필을 직접 확인하고 선택한 후, 동행 요청서를 작성합니다.",
    "offline.submit": "신청서 제출하기",

    // Teacher Selection
    "teacher.title": "오프라인 동행 선생님",
    "teacher.searchPlaceholder": "지역, 전문 분야, 키워드로 검색",
    "teacher.allAreas": "모든 지역",
    "teacher.allFields": "모든 분야",
    "teacher.hospital": "병원",
    "teacher.realEstate": "부동산",
    "teacher.restaurants": "맛집",
    "teacher.transportation": "교통",
    "teacher.tourism": "관광",
    "teacher.availableTeachers": "오프라인 동행 가능한 선생님",
    "teacher.englishAvailable": "영어 가능",
    "teacher.chineseAvailable": "중국어 가능",
    "teacher.hourly": "원/시간",
    "teacher.availableToday": "오늘 가능",
    "teacher.availableTomorrow": "내일 가능",
    "teacher.availableIn3Days": "3일 내 가능",
    "teacher.select": "선택하기",
    "teacher.filter": "필터",
    "teacher.sort": "정렬",

    // Request Form
    "request.title": "에게 요청하기",
    "request.formTitle": "동행 요청서 작성",
    "request.purpose": "동행 목적*",
    "request.selectPurpose": "동행 목적을 선택해주세요",
    "request.phoneActivation": "휴대폰 개통",
    "request.realEstate": "부동산/집 구하기",
    "request.shoppingHelp": "쇼핑 도움",
    "request.other": "기타 (직접 입력)",
    "request.meetingPlace": "만남 장소*",
    "request.meetingPlaceholder": "예: 강남역 2번 출구",
    "request.preferredDate": "희망 날짜*",
    "request.preferredTime": "희망 시간*",
    "request.startTime": "시작 시간",
    "request.endTime": "종료 시간",
    "request.estimatedDuration": "예상 소요 시간",
    "request.hour": "시간",
    "request.hours": "시간",
    "request.hoursOrMore": "시간 이상",
    "request.details": "상세 요청 사항",
    "request.detailsPlaceholder":
      "선생님에게 알려주고 싶은 구체적인 사항을 적어주세요.",
    "request.preferredLanguage": "선호하는 의사소통 언어",
    "request.korean": "한국어",
    "request.english": "영어",
    "request.mixed": "혼합",
    "request.estimatedCost": "예상 비용",
    "request.basicFee": "기본 요금",
    "request.transportationFee": "교통비 (예상)",
    "request.serviceFee": "서비스 수수료",
    "request.totalEstimatedCost": "총 예상 비용",
    "request.costNote":
      "* 최종 비용은 실제 소요된 시간과 교통비에 따라 조정될 수 있습니다.",
    "request.send": "요청서 보내기",

    // Online Matching
    "online.title": "온라인 학습 매칭",
    "online.step1": "학습 유형",
    "online.step2": "매칭 방법",
    "online.step3": "선택",
    "online.step4": "예약",
    "online.selectLearningType": "학습 유형을 선택하세요",
    "online.freeTalking": "프리토킹",
    "online.freeTalkingDesc":
      "자유로운 주제로 대화하며 회화 실력을 향상시킵니다. 일상 대화에 자신감을 키우는데 좋습니다.",
    "online.contentBased": "콘텐츠로 대화하기",
    "online.contentBasedDesc":
      "특정 주제나 상황(음식점, 병원, 쇼핑 등)에 맞는 표현과 어휘를 배웁니다.",
    "online.officialLearning": "공인학습레벨",
    "online.officialLearningDesc":
      "TOPIK 등 공식 시험 준비나 체계적인 한국어 학습을 원하는 분들을 위한 옵션입니다.",
    "online.nextStep": "다음 단계",
    "online.selectMatchingMethod": "매칭 방법을 선택하세요",
    "online.teacherFirst": "선생님 먼저 선택하기",
    "online.teacherFirstDesc":
      "선생님의 프로필, 전문 분야, 리뷰를 확인한 후 선택합니다. 그 다음 선생님과 함께 배울 콘텐츠를 선택합니다.",
    "online.contentFirst": "콘텐츠 먼저 선택하기",
    "online.contentFirstDesc":
      "배우고 싶은 주제, 상황, 콘텐츠를 먼저 선택합니다. 그 다음 해당 콘텐츠를 가르칠 수 있는 선생님을 선택하거나 자동으로 매칭할 수 있습니다.",
    "online.selectTeacher": "선생님 선택",
    "online.searchTeacher": "선생님 이름, 전문 분야 검색",
    "online.level": "레벨:",
    "online.beginner": "초급",
    "online.intermediate": "중급",
    "online.advanced": "고급",
    "online.language": "언어:",
    "online.english": "영어",
    "online.chinese": "중국어",
    "online.japanese": "일본어",
    "online.unavailable": "현재 예약 불가",
    "online.selectContent": "학습 콘텐츠 선택",
    "online.searchContent": "콘텐츠 제목, 내용 검색",
    "online.category": "카테고리:",
    "online.dailyLife": "일상생활",
    "online.practical": "실용",
    "online.travel": "여행",
    "online.culture": "문화",
    "online.exam": "시험",
    "online.book": "예약하기",

    // Class Page
    "class.back": "뒤로",
    "class.notifications": "알림",
    "class.mute": "음소거",
    "class.video": "비디오",
    "class.chat": "채팅",
    "class.end": "종료",
    "class.me": "나",
    "class.learningContent": "학습 내용",
    "class.vocabulary": "단어/표현",
    "class.notes": "메모",
    "class.mainDialog": "주요 대화 (상황: 부동산 방문)",
    "class.agent": "부동산 직원:",
    "class.customer": "손님:",
    "class.keyTerms": "중요 용어",
    "class.usefulExpressions": "유용한 표현",
    "class.save": "저장하기",
    "class.nextSection": "다음 섹션",
  },
  ja: {
    // Navigation
    "nav.home": "ホーム",
    "nav.search": "検索",
    "nav.schedule": "スケジュール",
    "nav.messages": "メッセージ",
    "nav.profile": "プロフィール",

    // Home Page
    "home.greeting": "こんにちは",
    "home.learn.question": "今日は何を学びたいですか？",
    "home.upcoming": "予定されているクラス",
    "home.viewAll": "すべて見る",
    "home.findingApartment": "ソウルでアパートを探す",
    "home.with": "講師：",
    "home.timeLeft": "分残り",
    "home.joinNow": "今すぐ参加",
    "home.orderingCafe": "カフェでの注文",
    "home.details": "詳細",
    "home.startOnline": "オンライン学習を始める",
    "home.requestGuide": "対面ガイドをリクエスト",
    "home.recommended": "おすすめコンテンツ",
    "home.kpopVocab": "K-pop語彙",
    "home.learnKpop": "K-pop用語を学ぶ",
    "home.kpopWords": "K-popファンのための必須単語",
    "home.dailyConvo": "日常会話",
    "home.everydayPhrases": "日常韓国語フレーズ",
    "home.usefulExpressions": "日常生活に役立つ表現",

    // Messages Page
    "messages.title": "メッセージ",
    "messages.allConversations": "すべての会話",
    "messages.teachers": "講師",
    "messages.systemNotifications": "システム通知",
    "messages.todayClass": "今日のクラス",
    "messages.tomorrowClass": "明日のクラス",
    "messages.pastClass": "過去のクラス",
    "messages.offlineGuide": "オフラインガイド",
    "messages.attachment": "添付ファイル",

    // Schedule Page
    "schedule.title": "マイスケジュール",
    "schedule.schedule": "スケジュール",
    "schedule.pastClasses": "過去のクラス",
    "schedule.today": "今日",
    "schedule.tomorrow": "明日",
    "schedule.online": "オンライン",
    "schedule.offline": "オフライン",
    "schedule.beginner": "初級",
    "schedule.intermediate": "中級",
    "schedule.advanced": "上級",
    "schedule.cancel": "キャンセル",
    "schedule.join": "参加する",
    "schedule.details": "詳細",

    // Search Page
    "search.placeholder": "講師、コンテンツ、トピックを検索",
    "search.recentSearches": "最近の検索",
    "search.clearAll": "すべて消去",
    "search.categories": "カテゴリー",
    "search.all": "すべて",
    "search.teachers": "講師",
    "search.content": "コンテンツ",
    "search.popularSearches": "人気の検索",
    "search.publicTransport": "公共交通機関の利用",
    "search.hospitalVisit": "病院訪問",
    "search.orderingRestaurant": "レストランでの注文",
    "search.cafeConversation": "カフェでの会話",
    "search.topikPrep": "TOPIK準備",
    "search.recommended": "おすすめ探索",
    "search.seoulGuide": "ソウル生活ガイド",
    "search.kpopKorean": "K-Popファンのための韓国語",
    "search.cultureEtiquette": "韓国の文化とマナー",

    // Profile Page
    "profile.title": "プロフィール",
    "profile.editProfile": "プロフィール編集",
    "profile.learningStatus": "学習状況",
    "profile.totalClassTime": "総授業時間",
    "profile.completedClasses": "完了したクラス",
    "profile.savedWords": "保存した単語",
    "profile.viewAll": "すべて見る",
    "profile.paymentSubscription": "支払いとサブスクリプション",
    "profile.notificationSettings": "通知設定",
    "profile.helpSupport": "ヘルプとサポート",
    "profile.logout": "ログアウト",

    // Offline Matching
    "offline.title": "オフラインガイドリクエスト",
    "offline.selectMethod": "マッチング方法を選択してください",
    "offline.fillForm": "リクエストフォームに記入",
    "offline.formDescription":
      "あなたのニーズと状況を説明するリクエストフォームを作成し、適切な講師が応募したら選択します。",
    "offline.selectTeacher": "講師を先に選択",
    "offline.teacherDescription":
      "講師のプロフィールを直接確認して選択し、その後リクエストフォームに記入します。",
    "offline.submit": "リクエストを提出",

    // Teacher Selection
    "teacher.title": "オフラインガイド講師",
    "teacher.searchPlaceholder": "地域、専門分野、キーワードで検索",
    "teacher.allAreas": "すべての地域",
    "teacher.allFields": "すべての分野",
    "teacher.hospital": "病院",
    "teacher.realEstate": "不動産",
    "teacher.restaurants": "レストラン",
    "teacher.transportation": "交通",
    "teacher.tourism": "観光",
    "teacher.availableTeachers": "利用可能なオフラインガイド講師",
    "teacher.englishAvailable": "英語可能",
    "teacher.chineseAvailable": "中国語可能",
    "teacher.hourly": "/時間",
    "teacher.availableToday": "今日可能",
    "teacher.availableTomorrow": "明日可能",
    "teacher.availableIn3Days": "3日以内に可能",
    "teacher.select": "選択",
    "teacher.filter": "フィルター",
    "teacher.sort": "並べ替え",

    // Request Form
    "request.title": "へのリクエスト",
    "request.formTitle": "リクエストフォームの記入",
    "request.purpose": "目的*",
    "request.selectPurpose": "目的を選択してください",
    "request.phoneActivation": "携帯電話の開通",
    "request.realEstate": "不動産/住居探し",
    "request.shoppingHelp": "ショッピングサポート",
    "request.other": "その他（指定）",
    "request.meetingPlace": "待ち合わせ場所*",
    "request.meetingPlaceholder": "例：江南駅2番出口",
    "request.preferredDate": "希望日*",
    "request.preferredTime": "希望時間*",
    "request.startTime": "開始時間",
    "request.endTime": "終了時間",
    "request.estimatedDuration": "予想所要時間",
    "request.hour": "時間",
    "request.hours": "時間",
    "request.hoursOrMore": "時間以上",
    "request.details": "詳細リクエスト",
    "request.detailsPlaceholder":
      "講師に知らせたい具体的な詳細を記入してください。",
    "request.preferredLanguage": "希望するコミュニケーション言語",
    "request.korean": "韓国語",
    "request.english": "英語",
    "request.mixed": "混合",
    "request.estimatedCost": "予想コスト",
    "request.basicFee": "基本料金",
    "request.transportationFee": "交通費（予想）",
    "request.serviceFee": "サービス料",
    "request.totalEstimatedCost": "予想総コスト",
    "request.costNote":
      "* 最終的なコストは実際の所要時間と交通費によって変動する場合があります。",
    "request.send": "リクエストを送信",

    // Online Matching
    "online.title": "オンライン学習マッチング",
    "online.step1": "学習タイプ",
    "online.step2": "マッチング方法",
    "online.step3": "選択",
    "online.step4": "予約",
    "online.selectLearningType": "学習タイプを選択してください",
    "online.freeTalking": "フリートーキング",
    "online.freeTalkingDesc":
      "自由なトピックで会話しながら会話スキルを向上させます。日常会話に自信をつけるのに最適です。",
    "online.contentBased": "コンテンツベースの会話",
    "online.contentBasedDesc":
      "特定の状況（レストラン、病院、ショッピングなど）に合った表現や語彙を学びます。",
    "online.officialLearning": "公式学習レベル",
    "online.officialLearningDesc":
      "TOPIKなどの公式テスト準備や体系的な韓国語学習を希望する方向けのオプションです。",
    "online.nextStep": "次のステップ",
    "online.selectMatchingMethod": "マッチング方法を選択してください",
    "online.teacherFirst": "講師を先に選択",
    "online.teacherFirstDesc":
      "講師のプロフィール、専門分野、レビューを確認してから選択します。その後、講師と一緒に学ぶコンテンツを選びます。",
    "online.contentFirst": "コンテンツを先に選択",
    "online.contentFirstDesc":
      "学びたいトピック、状況、コンテンツを先に選択します。その後、そのコンテンツを教えられる講師を選択するか、自動的にマッチングされます。",
    "online.selectTeacher": "講師を選択",
    "online.searchTeacher": "講師名、専門分野を検索",
    "online.level": "レベル：",
    "online.beginner": "初級",
    "online.intermediate": "中級",
    "online.advanced": "上級",
    "online.language": "言語：",
    "online.english": "英語",
    "online.chinese": "中国語",
    "online.japanese": "日本語",
    "online.unavailable": "現在予約不可",
    "online.selectContent": "学習コンテンツを選択",
    "online.searchContent": "コンテンツタイトル、説明を検索",
    "online.category": "カテゴリー：",
    "online.dailyLife": "日常生活",
    "online.practical": "実用的",
    "online.travel": "旅行",
    "online.culture": "文化",
    "online.exam": "試験",
    "online.book": "予約する",

    // Class Page
    "class.back": "戻る",
    "class.notifications": "通知",
    "class.mute": "ミュート",
    "class.video": "ビデオ",
    "class.chat": "チャット",
    "class.end": "終了",
    "class.me": "自分",
    "class.learningContent": "学習内容",
    "class.vocabulary": "語彙",
    "class.notes": "メモ",
    "class.mainDialog": "メインダイアログ（状況：不動産訪問）",
    "class.agent": "不動産業者：",
    "class.customer": "お客様：",
    "class.keyTerms": "重要用語",
    "class.usefulExpressions": "役立つ表現",
    "class.save": "保存",
    "class.nextSection": "次のセクション",
  },
};

// Language Provider Component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  // Always use English as default language
  useEffect(() => {
    setLanguage("en");
  }, []);

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
