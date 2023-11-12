'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { LiaGripLinesVerticalSolid } from 'react-icons/lia';
import SwiperCore from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import mainApi from '@/api/mainApi';
import type { IApiType } from '@/types';

export const RecmmendSlide = () => {
  // swiper 사용
  SwiperCore.use([Navigation, Scrollbar]);
  const swiperRef = useRef<SwiperCore>();

  // 추천 프로그램 이미지
  const [recommendImg, setReccomendImg] = useState<IApiType[]>([]);
  useEffect(() => {
    (async () => {
      const fetchApi: IApiType[] = await mainApi(1, 50);
      const recommendData = fetchApi.filter((apis: IApiType) => apis.IS_FREE[0] == '무료');
      setReccomendImg(recommendData);
    })();
  }, []);

  return (
    <>
      <div className='flex m-0 w-auto px-2.5	'>
        <div className=' m-0 w-1/4 ml-2'>
          <div className='text-xs my-8'>Recommend Program</div>
          <div className='my-4 text-2xl font-semibold'>추천 프로그램</div>
          <div className='text-base	 text-gray-500 mt-10'>
            누구나누리의 다양한 <br /> 프로그램 추천드립니다.
          </div>
          <div className='border border-slate-500 flex items-center justify-center mt-16	'>
            <button className='prev-btn mt-3.5 mr-9 mb-3.5'>
              <FontAwesomeIcon icon={faArrowLeft} size='lg' />
            </button>
            <LiaGripLinesVerticalSolid size={30} />
            <button className='next-btn mt-3.5 ml-9 mb-3.5'>
              <FontAwesomeIcon icon={faArrowRight} size='lg' />
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
          {recommendImg?.map((image: IApiType) => (
            <SwiperSlide key={image.CODENAME[0]}>
              <Image
                src={image.MAIN_IMG[0]}
                alt={image.TITLE[0]}
                width={400}
                height={700}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
