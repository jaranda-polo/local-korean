'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomNavigation: React.FC = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };
  
  return (
    <nav className="sticky bottom-0 z-10 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <Link href="/" className={`py-3 flex flex-col items-center justify-center w-1/5 ${isActive('/') ? 'text-teal-600' : 'text-gray-500'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span className="text-xs mt-1">홈</span>
          </Link>
          <Link href="/search" className={`py-3 flex flex-col items-center justify-center w-1/5 ${isActive('/search') ? 'text-teal-600' : 'text-gray-500'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <span className="text-xs mt-1">검색</span>
          </Link>
          <Link href="/schedule" className={`py-3 flex flex-col items-center justify-center w-1/5 ${isActive('/schedule') ? 'text-teal-600' : 'text-gray-500'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span className="text-xs mt-1">일정</span>
          </Link>
          <Link href="/messages" className={`py-3 flex flex-col items-center justify-center w-1/5 ${isActive('/messages') ? 'text-teal-600' : 'text-gray-500'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
            </svg>
            <span className="text-xs mt-1">메시지</span>
          </Link>
          <Link href="/profile" className={`py-3 flex flex-col items-center justify-center w-1/5 ${isActive('/profile') ? 'text-teal-600' : 'text-gray-500'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span className="text-xs mt-1">프로필</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavigation;
