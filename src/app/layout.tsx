import '../styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer, Header } from '@/components';

import AuthSessionProvider from '../providers/AuthSessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '누구나누리',
  description: '서울문화행사 정보 공간',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
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
