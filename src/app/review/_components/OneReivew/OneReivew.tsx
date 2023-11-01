'use client';
import { atom, useAtom, useSetAtom } from 'jotai';
import { useSession } from 'next-auth/react';

import { ReviewDelete } from '@/api/reviewAPI';
import { Button } from '@/components/ui/button';
import { reviewPostAtom } from '@/store';
import { IReview } from '@/types';
import FormatCreateDate from '@/utils/FormatCreateDate';

import { OneReviewComment, ReviewCommentForm } from '..';

const reviewCommentsAtom = atom<{ [key: number]: boolean }>({});

export const OneReivew = ({ item }: { item: IReview }) => {
  const setReviewPost = useSetAtom(reviewPostAtom);
  const [reviewCommentsState, setReviewCommentsState] = useAtom(reviewCommentsAtom);
  const { id, userId, createDate, content, comments } = item;
  const maskingUserId = userId?.replace(/.{3}$/, '***');
  const formattedDate = FormatCreateDate(createDate);
  const { data: session } = useSession();

  // 답글 여닫기
  const onIsOpenCommentForm = () => {
    setReviewCommentsState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const isSession = session && session.user && session.user.name === userId;

  // 댓글 삭제
  const onDeleteReview = async (id: number) => {
    if (isSession) {
      await ReviewDelete(id);
      setReviewPost((review) => review.filter((review) => review.id !== id));
    }
  };

  return (
    <div className='flex flex-col just=ify-center mb-7'>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div>
            <p className='font-bold text-lg'>{maskingUserId}</p>
            <p className='text-gray-400 mb-3'>{formattedDate}</p>
          </div>
          {isSession && (
            <div>
              <Button onClick={() => onDeleteReview(id)} variant='outline'>
                삭제
              </Button>
              <Button className='ml-4'>수정</Button>
            </div>
          )}
        </div>
        <div>
          <p className='mb-5'>{content}</p>
        </div>
      </div>
      <div>
        <p onClick={onIsOpenCommentForm} className='cursor-pointer hover:underline text-gray-700'>
          답글 {comments?.length ? `${comments.length}개` : '달기'}
        </p>
        {reviewCommentsState[id] && (
          <div className='bg-gray-100'>
            {comments.length > 0 &&
              comments.map((comment) => <OneReviewComment key={comment.id} comment={comment} />)}
            <ReviewCommentForm />
          </div>
        )}
      </div>
      <div className='mt-7 w-full h-px bg-gray-300'></div>
    </div>
  );
};
