import React from "react"

import './SliderContent.less'

const SliderContent = ( ) =>{
    return (
        <div className="slider-content_block">
            <h2 className="content-block_title">ARE YOU READY FOR</h2>
            <h2 className="content-block_red">TEKE-OFF?</h2>
            <p className="content-block_about">
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
            </p>
        
                <buttons className="block_buttons_white white">LEARN MORE</buttons>
                <buttons className="block_buttons_red red">E-REGISTRATION</buttons>
           
        </div>
    )
}

export default SliderContent