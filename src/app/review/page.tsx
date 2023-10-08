'use client';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

import ReviewApi from '@/api/reviewAPI';
import { ReviewType } from '@/types/review/types';

import CommentForm from './_components/CommentForm';

const dataAtom = atom<ReviewType | null>(null);
const Review = () => {
  const [reviews, setReviews] = useAtom(dataAtom);

  useEffect(() => {
    ReviewApi()
      .then((datastring) => {
        const parsedData = JSON.parse(datastring);
        setReviews(parsedData);
        console.log('testing', parsedData);
        console.log('testing', datastring);
      })
      .catch((error) => {
        console.error('에러 발생', error);
      });
  }, []);

  //   useEffect(() => {
  //     (async () => {
  //       const data = await ReviewApi();
  //       console.log('ㅋㅋㅋ', data);
  //       const parsedData = JSON.parse(data);
  //       setReviews(parsedData);
  //       console.log('dat', reviews);
  //     })();
  //   }, []);
  // const data: ReviewType = await ReviewApi();

  return (
    <div>
      <div className='flex flex-col items-center max-w-xl m-auto'>
        <h1 className='text-2xl font-b<old my-16'>후기 남기기</h1>
      </div>
      <div className='flex flex-col items-center max-w-xl m-auto'>
        <CommentForm />
      </div>
      {/* {reviews?.map((item: ReviewType, idx: number) => <div key={idx}>{item.id}</div>)} */}
    </div>
  );
};

export default Review;
