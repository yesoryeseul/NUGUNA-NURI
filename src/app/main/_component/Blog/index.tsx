import Link from 'next/link';

import { getSortedPostsData } from '@/api/blogApi';
import Button from '@/components/Button/Button';

import OneItem from './oneItem';

const MainBlog = () => {
  const posts = getSortedPostsData();
  const url = `/blog`;
  return (
    <>
      <div className='mt-28 flex flex-col max-w-7xl m-auto mb-32 '>
        <div className='w-full flex justify-between'>
          <div className='font-semibold	mt-4 ml-8'>블로그</div>
          <div className='ml-6'>
            <Link href={url}>
              <Button variant='more' shape='primary' size='large' weight='semibold'>
                more &gt;
              </Button>
            </Link>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex max-w-7xl'>
            {posts.slice(0, 3).map((post) => (
              <OneItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBlog;
