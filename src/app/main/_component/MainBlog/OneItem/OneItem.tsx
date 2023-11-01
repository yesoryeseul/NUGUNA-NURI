import Image from 'next/image';

import { IBlog } from '@/types';

// 단일 prop이 아니기 때문에 {post} 객체 형식으로 보내주기.8
export const OneItem = ({ post }: { post: IBlog }) => {
  return (
    <div className='w-full ml-4 px-3'>
      <Image src={post.img} alt={post.id} width={430} height={30} priority />
      <div className='mt-3 font-semibold'>{post.title}</div>
      <div className='text-sm text-slate-400'>{post.date}</div>
      <div className='mt-8 font-semibold text-sm'>{post.content}</div>
      <div className='flex justify-between pr-2 mt-2'>
        <div className='text-xs text-slate-400 underline '>view {post.view}</div>
        <div className='text-xs text-slate-400 underline'>like {post.like}</div>
      </div>
    </div>
  );
};
