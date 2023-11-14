'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { LiaGripLinesVerticalSolid } from 'react-icons/lia';
import SwiperCore from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CollectAPI from '@/api/collectAPI';
import type { ICulturalEventRow } from '@/types';

export const RecmmendSlide = () => {
  // swiper 사용
  SwiperCore.use([Navigation, Scrollbar]);
  const swiperRef = useRef<SwiperCore>();

  const [recommendImg, setRecomendImg] = useState<ICulturalEventRow[]>([]);

  useEffect(() => {
    CollectAPI(1, 50)
      .then((dataString) => {
        const parsedData = JSON.parse(dataString);
        const recommendData = parsedData?.culturalEventInfo?.row?.filter(
          (apis: ICulturalEventRow) => apis.IS_FREE === '무료',
        );
        setRecomendImg(recommendData); // 무료 데이터만 저장
      })
      .catch((error) => {
        console.error('에러 발생', error);
      });
  }, [setRecomendImg]);

  return (
    <>
      <div className='flex m-0 w-auto px-2.5'>
        <div className=' m-0 w-1/4 ml-2'>
          <div className='text-xs my-8'>Recommend Program</div>
          <div className='my-4 text-2xl font-semibold'>추천 프로그램</div>
          <div className='text-base	 text-gray-500 mt-10'>
            누구나누리의 다양한 <br /> 프로그램 추천드립니다.
          </div>
          <div className='border border-slate-500 flex items-center justify-center mt-16	'>
            <button className='prev-btn mt-3.5 mr-9 mb-3.5'>
              <BsFillArrowLeftSquareFill size={30} />
            </button>
            <LiaGripLinesVerticalSolid size={30} />
            <button className='next-btn mt-3.5 ml-9 mb-3.5'>
              <BsFillArrowRightSquareFill size={30} />
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          spaceBetween={20}
          slidesPerView={6}
        >
          {recommendImg?.map((image) => (
            <SwiperSlide key={image.CODENAME}>
              <Image src={image.MAIN_IMG} alt={image.TITLE} width={400} height={700} priority />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
