import React from 'react';

import './HeaderNav.less'


const HeaderNav = ( ) =>{

    const links = ['About us',"Simulators","Trainings","Schedule","Contact"]

    return(
        <div className="header-nav_block">
            <div className="header-logo_block">
                <div className="header-nav_logo"/>
                <div>
                    <h2>TURKISH AIRLINE</h2>
                    <p>FLYING TRAINING CENTER</p>
                </div> 
            </div>
                <nav className="header-nav">
                    <ul className="header-nav_list">
                        {links.map((item) =>{
                            return <li className="header-nav_item">
                                        <a href="#" className="anv-item_link">
                                            {item}
                                        </a>
                                    </li>
                        })}
                    </ul>
                </nav>
    
            <div className="header-right_nav">svgs</div>
        </div>
    )
}

export default HeaderNav