import { getSortedPostsData } from '@/api/blogApi';

import OneBlogItem from './_components/OneBlogItem/OneBlogItem';

const BlogPage = () => {
  const posts = getSortedPostsData();
  return (
    <>
      <div className='flex justify-center items-center '>
        <div className='w-6/12'>
          {posts.map((post) => (
            <OneBlogItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
