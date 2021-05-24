import React from 'react';
import MainContent from './main-content';
import MainSlider from './main-slider';



import './MainBlock.less'

const MainBlock = ( ) =>{
    return (
        <main className="main-block">
            <MainSlider/>
            <MainContent/>
        </main>
    )
}

export default MainBlock