'use client';
import { useEffect, useState } from 'react';

import CollectAPI from '@/api/collectAPI';

import OneItem from './_components/OneItem';

const Collect = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    CollectAPI(1, 50)
      .then((dataString) => {
        // JSON 문자열을 JavaScript 객체로 파싱
        const parsedData = JSON.parse(dataString);
        setData(parsedData);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, [apiKey]);

  if (!data) return <p>Loading data...</p>;

  return (
    <div className='flex flex-col items-center max-w-7xl m-auto'>
      <h1 className='text-4xl font-bold my-24'>행사 모아보기</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className='grid grid-cols-3 gap-4'>
        {data?.culturalEventInfo?.row?.map((data, idx) => (
          <div className='p-4'>
            <OneItem key={idx} data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collect;
