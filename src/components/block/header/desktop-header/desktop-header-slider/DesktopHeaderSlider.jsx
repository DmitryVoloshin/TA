import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);

import "./DesktopHeaderSlider.less";
import SliderContent from "./slider-content/SliderContent";

const DesktopHeaderSlider = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>

        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>

        <SwiperSlide>
          <SliderContent />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DesktopHeaderSlider;
