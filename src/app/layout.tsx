import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '로컬한국어 - 현지 원어민과 실용적인 한국어 학습',
  description: '한국 현지 생활과 여행에 필요한 실용적인 한국어를 배우는 온/오프라인 플랫폼',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
