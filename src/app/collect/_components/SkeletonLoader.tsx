import { Skeleton } from '@/components/ui/skeleton';

const SkeletonLoader = () => {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {[1, 2, 3].map((idx) => (
        <div key={idx} className='p-4'>
          <Skeleton className='w-[400px] h-[562px] rounded-none' />
          <div className='flex flex-col items-center my-4'>
            <Skeleton className='w-[200px] h-[20px] rounded-full mb-2' />
            <Skeleton className='w-[400px] h-[20px] rounded-full' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
