import Image from 'next/image';

import { Blog } from '@/types/blog/types';

// 단일 prop이 아니기 때문에 {post} 객체 형식으로 보내주기.
const OneItem = ({ post }: { post: Blog }) => {
  return (
    <div className='flex border border-slate-300 my-9 p-5 cursor-pointer	'>
      <Image src={post.img} alt={post.id} width={200} height={700} priority />
      <div className='ml-10'>
        <div className='mt-3 font-semibold'>{post.title}</div>
        <div className='text-sm text-slate-400'>{post.date}</div>
        <div className='mt-10 font-semibold'>{post.content}</div>
      </div>
    </div>
  );
};
export default OneItem;
