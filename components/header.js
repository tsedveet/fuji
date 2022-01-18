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
          <img src="slide1.jpeg" className="object-cover w-full md:h-132" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slide2.jpeg" className=" object-cover w-full md:h-132" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slide3.jpeg" className="object-cover w-full md:h-132" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="slide4.jpeg" className="object-cover w-full md:h-132" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Header;
