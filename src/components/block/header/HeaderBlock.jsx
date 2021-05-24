import React from 'react';
import HeaderNav from './header-nav';
import HeaderSlider from './header-slider';

import './Header.less'

const HeaderBlock = ( ) =>{
    return ( 
        <div className="header-block_content">
         
            <HeaderNav/>
            <HeaderSlider/>
            <div className="header-gradient_block"/>
        </div>
    )
}

export default HeaderBlock