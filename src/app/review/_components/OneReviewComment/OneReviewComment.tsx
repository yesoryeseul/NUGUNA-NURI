import { useSession } from 'next-auth/react';

import { Button } from '@/components/ui/button';
import { IReviewComment } from '@/types';
import FormatCreateDate from '@/utils/FormatCreateDate';

export const OneReviewComment = ({ comment }: { comment: IReviewComment }) => {
  // const { id, createDate, reviewerId, content } = comment; 추후 id 사용 예정
  const { createDate, reviewerId, content } = comment;
  const maskingUserId = reviewerId.replace(/.{3}$/, '***');
  const formattedDate = FormatCreateDate(createDate);
  const { data: session } = useSession();
  const isSession = session && session.user && session.user.name === reviewerId;

  return (
    <div className='flex flex-col justify-center mb-7 px-4'>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <div>
            <p className='font-bold text-lg'>{maskingUserId}</p>
            <p className='text-gray-400 mb-3'>{formattedDate}</p>
          </div>
          {isSession && (
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
      <div className='mt-7 w-full h-px bg-gray-300'></div>
    </div>
  );
};
