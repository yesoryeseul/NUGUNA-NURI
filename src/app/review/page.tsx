'use client';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

import { ReviewApi } from '@/api/reviewAPI';
import { reviewPostAtom } from '@/store';
import type { IReview } from '@/types';

import { CommentForm, OneReivew } from './_components';

const Review = () => {
  const [reviewPost, setReviewPost] = useAtom(reviewPostAtom);

  useEffect(() => {
    ReviewApi().then((data) => setReviewPost(data as IReview[]));
  }, [setReviewPost]);

  return (
    <div className='flex flex-col items-center max-w-xl m-auto'>
      <h1 className='text-2xl font-bold my-16'>후기 남기기</h1>
      <CommentForm />
      {reviewPost?.map((review) => (
        <div className='w-full' key={review.id}>
          <OneReivew item={review} key={review.id} />
        </div>
      ))}
    </div>
  );
};

export default Review;
