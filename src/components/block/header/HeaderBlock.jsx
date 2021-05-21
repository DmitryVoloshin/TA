import React from 'react';
import HeaderNav from './header-nav';

import './Header.less'

const HeaderBlock = ( ) =>{
    return ( 
        <div className="header-block_content">
            <HeaderNav/>
            <div className="header-slider_block">
                <h1>PEPE</h1>
            </div>
        </div>
    )
}

export default HeaderBlock