'use client';
import Image from 'next/image';
import { useRef } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BannerImage } from '@/consts/image';

export default function MainBanner() {
  SwiperCore.use([Navigation, Scrollbar]);
  const swiperRef = useRef<SwiperCore>();
  return (
    <>
      <>
        <div className='flex m-0 w-[1670px] h-[500px]'>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            navigation={{
              nextEl: '.banner-next-btn',
              prevEl: '.barnner-prev-btn',
            }}
            slidesPerView={1}
            style={{ marginLeft: '0', paddingLeft: '0' }}
          >
            <div className='flex m-0 w-[1670px] h-[400px]'>
              {BannerImage?.map((image, i) => (
                <SwiperSlide key={i}>
                  <Image src={image} alt={image} layout='fill' objectFit='cover' priority />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </>
    </>
  );
}
