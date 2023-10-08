import Image from 'next/image';
import Link from 'next/link';

import mainApi from '@/api/mainApi';
import Button from '@/components/Button/Button';
import { ApiType } from '@/types/main/types';

const EventFeed = async () => {
  const fetchData = await mainApi(1, 3);
  const url = `/collect`;
  return (
    <>
      <div className='mt-28 flex flex-col max-w-7xl m-auto mb-32 '>
        <div className='w-full flex justify-between'>
          <div className='font-semibold	mt-4 ml-8'>행사 피드</div>
          <div className='ml-6'>
            <Link href={url}>
              <Button variant='more' shape='primary' size='large' weight='semibold'>
                more &gt;
              </Button>
            </Link>
          </div>
        </div>
        <div className='flex justify-center items-center justify-between'>
          {fetchData.map((v: ApiType) => (
            <>
              <div className='w-full justify-between ml-4 px-3'>
                <Image src={v.MAIN_IMG[0]} alt={v.TITLE[0]} width={430} height={300} priority />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventFeed;
