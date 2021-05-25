import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import plane from './../../../assets/imgs/plane2.png'

import './TrainingBlock.less'

const TrainingBlock = ( ) =>{
    return (
        <div className="training-block">
            <div className="circles"/>
            <div className="background-poligon"/>
           <h2 className="training-block_title">TRAINING</h2>
           <h3 className="training-second_title">SIMULATOR DEVICES</h3>

           <div className="training-block_slider">
            <Swiper
                pagination={{
                clickable:true,
                dynamicBullets: true
                }}
                // loop={true}
                navigation={true}
                className="mySecondSwiper"
            >
                <SwiperSlide>
                    <div className="second-swiper_item">
                        <img src={plane}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="second-swiper_item">
                        <img src={plane}/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="second-swiper_item">
                        <img src={plane}/>
                    </div>
                </SwiperSlide>
            
            </Swiper>
      
           </div>
        </div>
    )
}

export default TrainingBlock