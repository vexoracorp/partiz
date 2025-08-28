"use client";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import getBanner from "@/api/home/get-banner";

import BannerItem from "./banner-item";

import "swiper/css";
import s from "./styles.module.scss";

import "swiper/css/pagination";

export default function Banner() {
  const bannerData = getBanner();
  return (
    <>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #e0e0e0 !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #7d7d7d !important;
        }
        //.swiper-pagination {
        //  bottom: -30px !important;
        //  background-color: red;
        //  z-index: 999; /* 배너 아래로 위치 조절 */
        //} //도트가 내려가지기는 하는데 화면에서 안보임. 개발자 모드로만 확인 가능.
      `}</style>
      <div className={s.container}>
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Keyboard, Autoplay]}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {bannerData.map((banner, idx) => (
            <SwiperSlide key={idx}>
              <BannerItem {...banner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
