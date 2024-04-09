import type { Metadata } from 'next';
import { pretendard } from '@/styles/fonts';
import { globalColors } from '@/styles/styles.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'bo-log',
  description: '기록을 하다보면 예상치 못한 성공의 순간이 찾아올 것이라 믿습니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.className} ${globalColors}`}>
      <body>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
