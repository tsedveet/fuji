import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Header = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?tokyo" className="object-cover w-full md:h-132" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?photograpy" className=" object-cover w-full md:h-132" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/random/1600x900?street" className="object-cover w-full md:h-132" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://source.unsplash.com/1600x900/?japan" className="object-cover w-full md:h-132" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Header;
