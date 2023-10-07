import Image from 'next/image';
import Link from 'next/link';

import CollectAPI from '@/api/collectAPI';
import Button from '@/components/Button/Button';

const CollectDetail = async ({ params }: { params: { idx: number; selectedValue: string } }) => {
  // 전체 카테고리에 대한 예외 처리
  let codename = '';
  if (params.selectedValue && params.selectedValue.length > 0) {
    codename = params.selectedValue[0].replace(/\//g, '_');
  }

  const fetchData = await CollectAPI(1, 300, codename);
  const parseData = JSON.parse(fetchData);
  
  const data = parseData?.culturalEventInfo?.row?.[params.idx];

  const { MAIN_IMG, ORG_NAME, TITLE, DATE, PLACE, USE_TRGT, USE_FEE, RGSTDATE, PROGRAM, ORG_LINK } =
    data;

  return (
    <div className='flex flex-col items-center max-w-7xl m-auto'>
      <h1 className='text-4xl font-bold my-16'>행사 상세정보</h1>
      <div className='flex bg-gray-100 p-12 w-full mb-20 border border-gray-300'>
        <div className='mr-12'>
          <Image
            src={MAIN_IMG}
            width={400}
            height={562}
            alt={TITLE}
            layout='fixed'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
          />
        </div>
        <div className='flex flex-col w-full'>
          <div className='flex mb-12 justify-between'>
            <p className='text-2xl text-gray-900 font-bold w-2/3'>{TITLE}</p>
            <div>
              <Button variant='register' shape='square' size='medium' weight='bold'>
                관심공연
              </Button>
              <Link href={ORG_LINK} className='ml-4'>
                <Button variant='register' shape='square' size='medium' weight='bold'>
                  홈페이지
                </Button>
              </Link>
            </div>
          </div>
          <div className='text-lg flex mb-4'>
            <p className='w-28'>행사기간</p>
            {DATE}
          </div>
          <div className='w-full h-px bg-gray-300'></div>
          <div className='text-lg flex my-4'>
            <p className='w-28'>장소/기관명</p>
            {PLACE} / {ORG_NAME}
          </div>
          <div className='w-full h-px bg-gray-300'></div>
          <div className='text-lg flex my-4'>
            <p className='w-28'>이용 대상</p>
            {USE_TRGT}
          </div>
          <div className='w-full h-px bg-gray-300'></div>
          <div className='text-lg flex my-4'>
            <p className='w-28'>이용 요금</p>
            {USE_FEE}
          </div>
          <div className='w-full h-px bg-gray-300'></div>
          <div className='text-lg flex my-4'>
            <p className='w-28'>신청일</p>
            {RGSTDATE}
          </div>
          <div className='w-full h-px bg-gray-300'></div>
          <div className='text-lg flex my-4'>
            <p className='w-28'>상세 정보</p>
            <span className='w-9/12'>{PROGRAM}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectDetail;
