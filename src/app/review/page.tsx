import { ReviewApi } from '@/api/reviewAPI';
import { ReviewType } from '@/types/review/types';

import CommentForm from './_components/CommentForm';
import OneReivew from './_components/OneReivew';

const Review = async () => {
  const data: ReviewType[] = await ReviewApi();

  return (
    <div className='flex flex-col items-center max-w-xl m-auto'>
      <h1 className='text-2xl font-bold my-16'>후기 남기기</h1>
      <CommentForm />
      {data?.map((item) => (
        <div className='w-full' key={item.id}>
          <OneReivew item={item} key={item.id} />
        </div>
      ))}
    </div>
  );
};

export default Review;
