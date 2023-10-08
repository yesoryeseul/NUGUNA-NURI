'use client';
import { atom, useAtom } from 'jotai';

import { Button } from '@/components/ui/button';
import { ReviewType } from '@/types/review/types';
import FormatCreateDate from '@/utils/FormatCreateDate';

import CommentForm from '../CommentForm';
import OneReviewComment from '../OneReviewComment';

const reviewCommentsAtom = atom<{ [key: number]: boolean }>({});

const OneReivew = ({ item }: { item: ReviewType }) => {
  const [reviewCommentsState, setReviewCommentsState] = useAtom(reviewCommentsAtom);
  const { id, userId, createDate, content, myReview, comments } = item;
  const maskingUserId = userId.replace(/.{3}$/, '***');
  const formattedDate = FormatCreateDate(createDate);

  const onisOpenCommentForm = () => {
    // 현재 리뷰 아이템의 댓글 표시 여부 상태만 업데이트
    setReviewCommentsState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className='flex flex-col justify-center mb-7'>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div>
            <p className='font-bold text-lg'>{maskingUserId}</p>
            <p className='text-gray-400 mb-3'>{formattedDate}</p>
          </div>
          {myReview && (
            <div>
              <Button variant='outline'>삭제</Button>
              <Button className='ml-4'>수정</Button>
            </div>
          )}
        </div>
        <div>
          <p className='mb-5'>{content}</p>
        </div>
      </div>
      <div>
        <p onClick={onisOpenCommentForm} className='cursor-pointer hover:underline text-gray-700'>
          답글 {comments.length ? `${comments.length}개` : '달기'}{' '}
        </p>
        {reviewCommentsState[id] && (
          <div className='bg-gray-100'>
            {comments.length > 0 &&
              comments.map((comment) => <OneReviewComment key={comment.id} comment={comment} />)}
            <CommentForm />
          </div>
        )}
      </div>
      <div className='mt-7 w-full h-px bg-gray-300'></div>
    </div>
  );
};

export default OneReivew;
