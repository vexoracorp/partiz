import { Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import BannerItem from "@/components/home/banner/banner-item";

import bannerData from "../../../mock/banner/index.ts";

import "swiper/css";
import s from "./styles.module.scss";

import "swiper/css/pagination";

export default function Banner() {
  return (
    <Swiper
      className={s.swiper}
      modules={[Pagination, Keyboard, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      {bannerData.map((item, idx) => (
        <SwiperSlide key={idx}>
          <BannerItem
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            imageAlt={item.imageAlt}
            href={item.href}
            backgroundColor={item.backgroundColor}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
