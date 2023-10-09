'use client';
import { atom, useAtom } from 'jotai';
import { useSession } from 'next-auth/react';

import { ReviewDelete, ReviewPatch } from '@/api/reviewAPI';
import { Button } from '@/components/ui/button';
import { ReviewType } from '@/types/review/types';
import FormatCreateDate from '@/utils/FormatCreateDate';

import OneReviewComment from '../OneReviewComment';
import ReviewCommentForm from '../ReviewCommentForm';

const reviewCommentsAtom = atom<{ [key: number]: boolean }>({});
const isEditModeAtom = atom<{ [key: number]: boolean }>({});
const editContentAtom = atom<{ [key: number]: string }>({});

const OneReivew = ({ item, key }: { item: ReviewType; key: number }) => {
  const [reviewCommentsState, setReviewCommentsState] = useAtom(reviewCommentsAtom);
  const [isEditMode, setIsEditMode] = useAtom(isEditModeAtom);
  const [editContent, setEditContent] = useAtom(editContentAtom);
  const { id, userId, createDate, content, comments } = item;
  const maskingUserId = userId.replace(/.{3}$/, '***');
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
    }
  };

  // editMode가 됐을 때 input에 입력하는 데이터를 다시 넘겨주기.
  const onUpdateReview = async () => {
    if (isEditMode) {
      await ReviewPatch(id, editContent[id]);
    }
    setIsEditMode((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditContent((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
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
              <Button className='ml-4'>
                수정
              </Button>
            </div>
          )}
        </div>
        <div>
        <p className='mb-5'>{content}</p>
        </div>
      </div>
      <div>
        <p onClick={onIsOpenCommentForm} className='cursor-pointer hover:underline text-gray-700'>
          답글 {comments.length ? `${comments.length}개` : '달기'}
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

export default OneReivew;
