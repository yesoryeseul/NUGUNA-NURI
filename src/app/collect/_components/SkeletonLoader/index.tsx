import { Skeleton } from '@/components/ui/skeleton';

const SkeletonLoader = () => {
  const array = Array.from({ length: 12 }, (_, index) => index + 1);
  return (
    <div className='w-full grid grid-cols-3 gap-4'>
      {array.map((idx) => (
        <div key={idx} className='p-4'>
          <Skeleton className='w-full h-[562px] rounded-none' />
          <div className='flex flex-col items-center my-4'>
            <Skeleton className='w-1/3 h-5 mb-2 rounded-full' />
            <Skeleton className='w-1/2 h-5 rounded-full' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
