import { getSortedPostsData } from '@/api/reviewAPI';

import OneItem from './_components/oneItem';

const Review = () => {
  const posts = getSortedPostsData();
  return (
    <>
      <div className='flex justify-center items-center '>
        <div className='w-6/12'>
          {posts.map((post) => (
            <OneItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
