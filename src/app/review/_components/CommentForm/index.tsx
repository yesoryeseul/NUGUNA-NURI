'use client';
import { useSession } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface CommentTextArea {
  comment: string;
}
const CommentForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CommentTextArea>();
  const onSubmit: SubmitHandler<CommentTextArea> = (data) => console.log(data);

  const { data: session } = useSession();
  const isSession = session && session.user;
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
