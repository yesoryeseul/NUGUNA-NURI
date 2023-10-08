import Link from 'next/link';

import { cn } from '@/lib/utils';

export function Header({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className='w-full bg-gray-50'>
      <div className='h-24 flex items-center mx-auto max-w-7xl'>
        <nav className={cn(' p-4 space-x-12', className)} {...props}>
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
            href='/blog'
            className='text-base font-normal font-semibold text-muted-foreground transition-colors hover:text-primary'
          >
            블로그
          </Link>
          <Link
            href='/review'
            className='text-base font-normal font-semibold text-muted-foreground transition-colors hover:text-primary'
          >
            후기
          </Link>
        </nav>
      </div>
    </div>
  );
}
