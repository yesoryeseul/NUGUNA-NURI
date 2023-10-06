'use client';
import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';

import CollectAPI from '@/api/collectAPI';
import Pagination from '@/components/Pagination/Pagination';
import { selectValueAtom } from '@/types/collect/atom';

import OneItem from './_components/OneItem';
import FilterSelect from './_components/Select';
import SkeletonLoader from './_components/SkeletonLoader';

export interface CulturalEventRow {
  MAIN_IMG: string;
  ORG_NAME: string;
  TITLE: string;
  CODENAME: string;
}

interface CulturalEventInfo {
  list_total_count: number;
  culturalEventInfo: {
    row: CulturalEventRow[];
  };
}

const dataAtom = atom<CulturalEventInfo | null>(null);
const Collect = () => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;
  const [data, setData] = useAtom(dataAtom);
  const [selectedValue, setSelectedValue] = useAtom(selectValueAtom);
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태 추가
  const [totalPage, setTotalPage] = useState(0);
  const itemsPerPage = 12; // 한 페이지에 표시할 아이템 수

  useEffect(() => {
    let startIndex: number;
    let endIndex: number;

    if (currentPage > 1) {
      startIndex = (currentPage - 1) * itemsPerPage;
      endIndex = startIndex + itemsPerPage - 1;
    } else {
      startIndex = 0; // 시작 페이지에서는 0으로 시작
      endIndex = itemsPerPage - 1;
    }

    // CollectAPI 함수 호출 시 데이터 범위를 인자로 전달
    CollectAPI(0, 300, selectedValue) // selectedValue를 추가하여 필터링 조건을 전달
      .then((dataString) => {
        const parsedData = JSON.parse(dataString);
        const slicedData = parsedData.culturalEventInfo.row.slice(startIndex, endIndex + 1);
        setData({ ...parsedData, culturalEventInfo: { row: slicedData } });
        console.log('test', parsedData);
        setTotalPage(parsedData?.culturalEventInfo?.row?.length);
      })
      .catch((error) => {
        console.error('에러 발생', error);
      });
  }, [apiKey, selectedValue, setData, currentPage, itemsPerPage]);

  // Pagination 페이지 변경 시 해당 페이지에 맞는 데이터 불러오기
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='flex flex-col items-center max-w-7xl m-auto'>
      <h1 className='text-4xl font-bold my-16'>행사 모아보기</h1>
      <FilterSelect onValueChange={setSelectedValue} />
      {data ? (
        <div className='grid grid-cols-3 gap-4'>
          {data?.culturalEventInfo?.row?.map((item, idx) => (
            <div key={idx} className='p-4'>
              <OneItem item={item} idx={idx} />
            </div>
          ))}
        </div>
      ) : (
        <SkeletonLoader />
      )}
      <div className='my-12'>
        <Pagination
          total_count={totalPage}
          list={itemsPerPage}
          itemPerPage={10}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Collect;
