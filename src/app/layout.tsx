import '../styles/globals.css';

import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

import { Footer, Header } from '@/components';

import AuthSessionProvider from '../providers/AuthSessionProvider';

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  preload: false,
  weight: ['400', '500', '600', '700'],
});

export const cls = (...classnames: string[]) => {
  return classnames.join(' ');
};

export const metadata: Metadata = {
  title: '누구나누리',
  description: '서울문화행사 정보 공간',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={notoSansKr.className}>
        <div className='h-screen'>
          <AuthSessionProvider>
            <Header />
            {children}
          </AuthSessionProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
