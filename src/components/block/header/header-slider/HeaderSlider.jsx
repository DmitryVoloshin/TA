import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);

import './HeaderSlider.less'
import SliderContent from './slider-content';


const HeaderSlider = ( ) =>{
    return (
        <>
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true
          }}
          className="mySwiper"
        >
          <SwiperSlide>
              <SliderContent/>
          </SwiperSlide>
          
          <SwiperSlide>
              <SliderContent/>
          </SwiperSlide>

          <SwiperSlide>
              <SliderContent/>
          </SwiperSlide>

        </Swiper>
      </>
    )
}

export default HeaderSlider