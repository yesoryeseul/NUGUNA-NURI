'use client';
import { useAtom } from 'jotai';
import { useSession } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ReviewPost } from '@/api/reviewAPI';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { reviewPostAtom } from '@/store/reviewPost.atom';
import { IReview } from '@/types';

interface CommentTextArea {
  comment: string;
}
const CommentForm = () => {
  const [reviewPost, setReviewPost] = useAtom(reviewPostAtom);
  const { data: session } = useSession();
  const isSession = session && session.user;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CommentTextArea>();
  const onSubmit: SubmitHandler<CommentTextArea> = async (data) => {
    const newData = {
      id: Math.ceil(Math.random() * 100000),
      createDate: '2023-10-09T00:11:58',
      userId: session?.user?.name as string,
      content: data.comment,
      comments: [],
    };
    const returnData = await ReviewPost(newData);
    if (returnData && 'id' in returnData) { 
      setReviewPost((prev) => [...prev, returnData] as IReview[]); // 타입 단언을 사용하여 반환 타입을 IReview[]로 지정
    }
    if (!isSession) return alert('로그인을 해주세요');
  };

  // isSession이 없으면 등록하기 버튼 클릭시 post못하고 alert 메세지(로그인을 해주세요)
  // isSession 일때만 등록 후 db에 post
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid w-full gap-2 my-7'>
      <Textarea
        {...register('comment', { minLength: 5, maxLength: 250 })}
        placeholder='댓글을 입력해주세요'
      />
      {errors.comment && (
        <p className='text-red-400 text-sm'>5자 이상, 250자 이내로 작성해주세요.</p>
      )}
      <Button>등록하기</Button>
    </form>
  );
};
export default CommentForm;
