'use client';
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva, type VariantProps } from 'class-variance-authority';
import { atom, useAtom } from 'jotai';
import { FC } from 'react';

import { cn } from '../../lib/utils';

const PaginationVariants = cva(``, {
  variants: {
    bgColor: {
      gray: 'bg-gray-300',
      blue: 'bg-blue-300',
      pink: 'bg-pink-200',
      transparent: 'bg-transparent',
    },
    shape: {
      square: 'rounded-none',
      primary: 'rounded',
      full: 'rounded-full',
    },
    color: {
      gray: 'text-gray-500',
      blue: 'text-blue-400',
      pink: 'text-pink-300',
    },
    textColor: {
      white: 'text-white',
    },
  },
  defaultVariants: {
    bgColor: 'gray',
    shape: 'square',
    color: 'gray',
  },
});

interface IPageProps extends VariantProps<typeof PaginationVariants> {
  total_count: number;
  list: number;
  itemPerPage: number;
  onPageChange?: (newPage: number) => void;
}

const currentPage = 1;
const pageAtom = atom(currentPage);

export const CustomPagination: FC<IPageProps> = ({
  total_count,
  list,
  itemPerPage,
  onPageChange,
  bgColor,
  shape,
  color,
}) => {
  const totalPages = Math.ceil(total_count / list); // 총 페이지 개수
  const [page, setPage] = useAtom(pageAtom);

  // 현재 페이지 그룹 계산
  const currentPageGroup = Math.ceil(page / itemPerPage);

  // 페이지 그룹 첫 페이지
  const firstPageGroup = (currentPageGroup - 1) * itemPerPage + 1;

  // 페이지 그룹 마지막
  const lastPageGroup = Math.min(currentPageGroup * itemPerPage, totalPages);

  // 페이지 변경 함수
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    // onPageChange 함수가 전달되었다면 호출
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  const defaultButtonStyle = cn(PaginationVariants({ color, bgColor: 'transparent' }));
  const activeButtonStyle = cn(PaginationVariants({ bgColor, shape, textColor: 'white' }));

  return (
    <div>
      <ul className='flex'>
        <button onClick={() => handlePageChange(1)} className={`mr-3 ${defaultButtonStyle}`}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className={`mr-1 ${defaultButtonStyle}`}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        {/* 페이지 그룹에 해당하는 페이지 번호만 생성 */}
        {Array.from(
          { length: lastPageGroup - firstPageGroup + 1 },
          (_, i) => i + firstPageGroup,
        ).map((pageNum) => (
          <li key={pageNum} className='mx-1'>
            <button
              className={cn(
                PaginationVariants({
                  shape,
                }),
                'px-2',
                page === pageNum
                  ? activeButtonStyle // 활성 상태일 때
                  : defaultButtonStyle, // 비활성 상태일 때
              )}
              onClick={() => handlePageChange(pageNum)}
            >
              {pageNum}
            </button>
          </li>
        ))}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className={`ml-1 ${defaultButtonStyle}`}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          className={`ml-3 ${defaultButtonStyle}`}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </ul>
    </div>
  );
};
