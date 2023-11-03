'use client';
import { atom, useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';

import CollectAPI from '@/api/collectAPI';
import { CustomPagination } from '@/components/Pagination/CustomPagination';
import { selectValueAtom } from '@/store';
import type { ICulturalEventInfoProps } from '@/types';

import { FilterSelect, OneCollectItem, SkeletonLoader } from './_components';

const dataAtom = atom<ICulturalEventInfoProps | null>(null);
const currentPageAtom = atom(1);
const totalCountAtom = atom(0);
const itemsPerPageAtom = atom(12);

// 파생 atom, currentPage와 itemsPerPage 상태를 감지하여
// 시작, 끝 인덱스를 계산 > 별도의 상태 업데이트 로직 없어도 된다
const startIndexAtom = atom((get) => {
  const currentPage = get(currentPageAtom);
  const itemsPerPage = get(itemsPerPageAtom);
  return currentPage > 1 ? (currentPage - 1) * itemsPerPage : 0;
});

const endIndexAtom = atom((get) => {
  const startIndex = get(startIndexAtom);
  const itemsPerPage = get(itemsPerPageAtom);
  return startIndex + itemsPerPage - 1;
});

const Collect = () => {
  const [data, setData] = useAtom(dataAtom);
  const [selectedValue, setSelectedValue] = useAtom(selectValueAtom);
  const [currentPage, setCurrentPage] = useAtom(currentPageAtom); // 현재 페이지 상태 추가
  const [totalCount, setTotalCount] = useAtom(totalCountAtom); // 총 갯수
  const itemsPerPage = useAtomValue(itemsPerPageAtom); // 한 페이지에 표시할 아이템 수

  const startIndex = useAtomValue(startIndexAtom);
  const endIndex = useAtomValue(endIndexAtom);

  useEffect(() => {
    CollectAPI(1, 300, selectedValue)
      .then((dataString) => {
        const parsedData = JSON.parse(dataString);
        setData(parsedData); // 전체 데이터 저장
        console.log('parse', parsedData);
        setTotalCount(Math.ceil(parsedData?.culturalEventInfo?.row?.length)); // 불러올 총 데이터 갯수
      })
      .catch((error) => {
        console.error('에러 발생', error);
      });
  }, [selectedValue, setData, currentPage, itemsPerPage, setTotalCount, startIndex]);

  // Pagination 페이지 변경 시 해당 페이지에 맞는 데이터 불러오기
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className='flex flex-col items-center max-w-7xl m-auto'>
      <h1 className='text-2xl font-bold my-16'>행사 모아보기</h1>
      <FilterSelect onValueChange={setSelectedValue} />
      {data ? (
        <div className='grid grid-cols-3 gap-4'>
          {data?.culturalEventInfo?.row.slice(startIndex, endIndex + 1).map((item, idx) => (
            <div key={idx} className='p-4'>
              <OneCollectItem item={item} idx={startIndex + idx} selectedValue={selectedValue} />{' '}
            </div>
          ))}
        </div>
      ) : (
        <SkeletonLoader />
      )}
      <div className='my-12'>
        <CustomPagination
          total_count={totalCount}
          list={itemsPerPage}
          itemPerPage={10}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Collect;
