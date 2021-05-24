import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);

import './HeaderSlider.less'
import SliderContent from './slider-content';
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";


// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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