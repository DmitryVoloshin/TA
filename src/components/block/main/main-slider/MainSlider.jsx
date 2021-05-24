import React from 'react';

import './MainSlider.less'

const MainSlider = ( ) =>{
    return(
        <div className="main-block_carousel">
            <div className="carousel-item ">
                <div className="carosel-nonactive_left">
                    CABINS TRAININGS
                </div>
            </div>
            <div className="carousel-item active-carousel_item">
                <div className="carousel-active_gradient">
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
            </div>
            <div className="carousel-item">
                <div className="carosel-nonactive_right">
                    COCKPIT TRAININGS
                </div>
            </div>
        </div>
    )
}

export default MainSlider