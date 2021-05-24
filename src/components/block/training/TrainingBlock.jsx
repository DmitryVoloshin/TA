import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import plane from './../../../assets/imgs/plane2.png'

import './TrainingBlock.less'

const TrainingBlock = ( ) =>{
    return (
        <div className="training-block">
            {/* <div className="circles"></div>
            <div className="background-poligon"></div> */}
           <h2 className="training-block_title">TRAINING</h2>
           <h3 className="training-second_title">SIMULATOR DEVICES</h3>
           <div className="training-block_slider">
           <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                dynamicBullets: true
                }}
                navigation={true}
                className="mySwiperTraining"

            >
                <SwiperSlide>
                    <img src={plane}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img/>
                </SwiperSlide>
                <SwiperSlide>
                    <img/>
                </SwiperSlide>
                <SwiperSlide>
                    <img/>
                </SwiperSlide>
                <SwiperSlide>
                    <img/>
                    </SwiperSlide>
                <SwiperSlide>
                    <img/>
                </SwiperSlide>
     
            </Swiper>
           </div>
        </div>
    )
}

export default TrainingBlock