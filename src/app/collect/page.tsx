'use client';
import { useEffect, useState } from 'react';

import CollectAPI from '@/api/collectAPI';

import OneItem from './_components/OneItem';
import FilterTab from './_components/Tabs';

export interface CulturalEventRow {
  MAIN_IMG: string;
  ORG_NAME: string;
  TITLE: string;
}

interface CulturalEventInfo {
  list_total_count: number;
  culturalEventInfo: {
    row: CulturalEventRow[];
  };
}

const Collect = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
  const [data, setData] = useState<CulturalEventInfo | null>(null);

  useEffect(() => {
    CollectAPI(1, 50)
      .then((dataString) => {
        const parsedData = JSON.parse(dataString);
        setData(parsedData);
      })
      .catch((error) => {
        console.error('에러 발생', error);
      });
  }, [apiKey]);

  if (!data) return <p>Loading data...</p>;

  return (
    <div className='flex flex-col items-center max-w-7xl m-auto'>
      <h1 className='text-4xl font-bold my-16'>행사 모아보기</h1>
      <FilterTab />
      <div className='grid grid-cols-3 gap-4'>
        {data?.culturalEventInfo?.row?.map((item, idx) => (
          <div key={idx} className='p-4'>
            <OneItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collect;
