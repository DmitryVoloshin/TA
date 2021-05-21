import React from 'react';

import './HeaderNav.less'
import logo from './../../../../assets/icons/mainLogo.png'

const HeaderNav = ( ) =>{
    return(
        <div className="header-nav_block">
                
            <div className="header-nav_logo">
                <img src={logo} className="header-logo"/>
                <div>
                    
                </div>

            </div>

                <nav className="header-nav">
                    <ul className="header-nav_list">
                        <li className="header-nav_item">

                        </li>
                        <li className="header-nav_item">

                        </li>
                        <li className="header-nav_item">

                        </li>
                        <li className="header-nav_item">

                        </li>
                        <li className="header-nav_item">

                        </li>
                    </ul>
                </nav>
    
            <div className="pepe">svgs</div>
        </div>
    )
}

export default HeaderNav