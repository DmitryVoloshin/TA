import React from 'react';
import BurgerNav from './mobile-header-nav/BurgerNav';

import SideBar from "./sidebar";

import './MobileHeader.less'

const MobileHeader = ( ) =>{
    return ( 
        <div className="mobile-header_wrapper">
            <BurgerNav/>

            <h2 className="mobile-header_title">Tukrish Airline</h2>

            <div>
        
            </div>


            {/* <>
        <SideBar
            id="side-bar"
            // pageWrapId={"page-wrap"}
            outerContainerId={"App"}
        />

        <div id="page-wrap">
            <h2>Turkish Airline</h2>
        </div>
        </> */}


        <div className="mobile-nav_gradient"/>
        </div>
    )
}

export default MobileHeader