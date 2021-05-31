import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
SwiperCore.use([Navigation]);

import './MainMobileBlock.less'


const MainMobileBlock = ( ) =>{

    return (
        <div className="main-mobile_block">     
        <Swiper navigation={true} className="mobile-main_swiper">
            <SwiperSlide className="mobile-main_swiper--item">
            
                        <div className="mobile-main_swiper--block">
                            <h3 className="mobile-main_swiper--title">CABINS TRAININGS</h3>
                            <div className="item-info_br"/>
                            <p className="mobile-main_swiper--text">
                            Inquietude simplicity terminated she compliment remarkably few her nay.
                            The weeks are ham asked jokes.
                            </p>
                            <button className="mobile-main_swiper--button">
                                ALL SIMULATORS
                            </button>
                        </div>
         
                <div className="mobile-main_swiper--gradient"/>
            </SwiperSlide>
            <SwiperSlide className="mobile-main_swiper--item">
                <div className="mobile-main_swiper--gradient"/>

                <div className="mobile-main_swiper--block">
                            <h3 className="mobile-main_swiper--title">CABINS TRAININGS</h3>
                            <div className="item-info_br"/>
                            <p className="mobile-main_swiper--text">
                            Inquietude simplicity terminated she compliment remarkably few her nay.
                            The weeks are ham asked jokes.
                            </p>
                            <button className="mobile-main_swiper--button">
                                ALL SIMULATORS
                            </button>
                        </div>

            </SwiperSlide>
            <SwiperSlide className="mobile-main_swiper--item">
                <div className="mobile-main_swiper--gradient"/>

                <div className="mobile-main_swiper--block">
                            <h3 className="mobile-main_swiper--title">CABINS TRAININGS</h3>
                            <div className="item-info_br"/>
                            <p className="mobile-main_swiper--text">
                            Inquietude simplicity terminated she compliment remarkably few her nay.
                            The weeks are ham asked jokes.
                            </p>
                            <button className="mobile-main_swiper--button">
                                ALL SIMULATORS
                            </button>
                        </div>

            </SwiperSlide>
        </Swiper>
      </div>
    )
}

export default MainMobileBlock