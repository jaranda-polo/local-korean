"use client";

import React from "react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex space-x-2 items-center">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-2 py-1 text-xs rounded-md ${language === "en" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("ko")}
        className={`px-2 py-1 text-xs rounded-md ${language === "ko" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
      >
        KO
      </button>
      <button
        onClick={() => handleLanguageChange("ja")}
        className={`px-2 py-1 text-xs rounded-md ${language === "ja" ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-700"}`}
      >
        JA
      </button>
    </div>
  );
};

export default LanguageSelector;
