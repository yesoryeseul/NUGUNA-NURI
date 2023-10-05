import Link from 'next/link';

import { cn } from '@/lib/utils';

export function Header({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className='bg-gray-50 max-h-24 flex flex-center justify-center h-screen'>
      <nav className={cn('w-7/12 flex items-center space-x-12 ', className)} {...props}>
        <Link
          href='/'
          className='font-semibold text-2xl font-medium transition-colors hover:text-primary'
        >
          누구나누리
        </Link>
        <Link
          href='/collect'
          className='text-base font-normal font-semibold text-muted-foreground transition-colors hover:text-primary'
        >
          행사 모아보기
        </Link>
        <Link
          href='/'
          className='text-base font-normal font-semibold text-muted-foreground transition-colors hover:text-primary'
        >
          후기
        </Link>
        <Link
          href='/examples/dashboard'
          className='text-base font-normal font-semibold text-muted-foreground transition-colors hover:text-primary'
        >
          문의
        </Link>
        <Link
          href='/examples/dashboard'
          className='text-base font-normal font-semibold text-muted-foreground transition-colors hover:text-primary'
        >
          소식
        </Link>
      </nav>
    </div>
  );
}
