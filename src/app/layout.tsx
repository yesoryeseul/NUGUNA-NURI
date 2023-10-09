import '../styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import Providers from '@/components/Providers/Providers';

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
          <Providers>
            <Header />
            {children}
          </Providers>
          <Footer />
        </div>
      </body>
    </html>
  );
}
