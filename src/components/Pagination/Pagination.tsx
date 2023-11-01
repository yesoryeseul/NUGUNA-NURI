'use client';
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { atom, useAtom } from 'jotai';

interface IPageProps {
  total_count: number;
  list: number;
  itemPerPage: number;
  onPageChange?: (newPage: number) => void;
  bgColor?: 'gray' | 'blue' | 'pink';
  shape?: 'square' | 'primary' | 'full';
  arrow?: 'gray' | 'blue' | 'pink';
  primaryButton?: 'gray' | 'blue' | 'pink';
}

const currentPage = 1;
const pageAtom = atom(currentPage);

const Pagination: React.FC<IPageProps> = (props) => {
  const {
    total_count,
    list,
    itemPerPage,
    onPageChange,
    bgColor = 'gray',
    shape = 'square',
    arrow = 'gray',
    primaryButton = 'gray',
  } = props;
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

  const bgColorCSS = {
    gray: 'bg-gray-300 text-white',
    blue: 'bg-blue-300 text-white',
    pink: 'bg-pink-200 text-white',
  };

  const shapeCSS = {
    square: 'rounded-none',
    primary: 'rounded',
    full: 'rounded-full',
  };

  const colorCSS = {
    gray: 'text-gray-500',
    blue: 'text-blue-400',
    pink: 'text-pink-300',
  };

  const bgActive = bgColorCSS[bgColor] || '';

  const shapeVariant = shapeCSS[shape] || '';

  const arrowVariant = colorCSS[arrow] || '';

  const noneActive = colorCSS[primaryButton] || '';

  return (
    <div>
      <ul className='flex'>
        <button onClick={() => handlePageChange(1)} className={`mr-3 ${arrowVariant}`}>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className={`mr-1 ${arrowVariant}`}
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
              className={`px-2 ${shapeVariant} ${colorCSS} ${
                page === pageNum ? bgActive : `bg-transparent ${noneActive}`
              }`}
              onClick={() => handlePageChange(pageNum)}
            >
              {pageNum}
            </button>
          </li>
        ))}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          className={`ml-1 ${arrowVariant}`}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <button onClick={() => handlePageChange(totalPages)} className={`ml-3 ${arrowVariant}`}>
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
