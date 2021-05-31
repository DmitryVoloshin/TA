import React from 'react';


import { Swiper, SwiperSlide } from "swiper/react";

import './MainSlider.less'

const MainSlider = ( ) =>{
    return(
        <div className="main-block_carousel">
               <Swiper
                slidesPerView={3}
                centeredSlides={true}
              
                className="main-content_swiper"
            >
                <SwiperSlide className="content-swiper_first"> 
                    <div className="carousel-active_gradient">
                    <div className="gradient-block"/>
                        <div className="carousel-item_info">
                            <h3 className="carousel-info_title">CABINS TRAININGS</h3>
                            <div className="item-info_br"/>
                            <p className="carousel-info_text">
                            Inquietude simplicity terminated she compliment remarkably few her nay.
                            The weeks are ham asked jokes.
                            </p>
                            <button className="carousel-active_button">
                                ALL SIMULATORS
                            </button>
                        </div>
                    </div>   
                </SwiperSlide>
                <SwiperSlide className="content-swiper_second">
                     <div className="carousel-active_gradient">
                         <div className="gradient-block"/>
                        <div className="carousel-item_info">
                            <h3 className="carousel-info_title">FULL FIGHT SIMULATORS</h3>
                            <div className="item-info_br"/>
                            <p className="carousel-info_text">
                            Inquietude simplicity terminated she compliment remarkably few her nay.
                            The weeks are ham asked jokes.
                            </p>
                            <button className="carousel-active_button">
                                ALL SIMULATORS
                            </button>
                        </div>
                    </div> 
                </SwiperSlide>
                <SwiperSlide className="content-swiper_third">
                    <div className="carousel-active_gradient">
                    <div className="gradient-block"/>
                        <div className="carousel-item_info">
                            <h3 className="carousel-info_title">FULL FIGHT SIMULATORS</h3>
                            <div className="item-info_br"/>
                            <p className="carousel-info_text">
                            Inquietude simplicity terminated she compliment remarkably few her nay.
                            The weeks are ham asked jokes.
                            </p>
                            <button className="carousel-active_button">
                                ALL SIMULATORS
                            </button>
                        </div>
                    </div> 
                </SwiperSlide>
        
                </Swiper>
        </div>
    )
}

export default MainSlider