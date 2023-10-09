import { useSession } from 'next-auth/react';

import { ReviewCommentType } from '@/types/review/types';
import FormatCreateDate from '@/utils/FormatCreateDate';

import DeleteAndEdit from '../OneReivew/_components/session';

const OneReviewComment = ({ comment }: { comment: ReviewCommentType }) => {
  const { createDate, reviewerId, content, myComment } = comment;
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
          {isSession && <DeleteAndEdit />}
        </div>
        <div>
          <p className='mb-5'>{content}</p>
        </div>
      </div>
      <div className='mt-7 w-full h-px bg-gray-300'></div>
    </div>
  );
};

export default OneReviewComment;