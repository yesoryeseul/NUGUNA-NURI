import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
const CommentForm = () => {
  return (
    <div className='grid w-full gap-2'>
      <Textarea placeholder='댓글을 입력해주세요' />
      <Button>등록하기</Button>
    </div>
  );
};
export default CommentForm;
