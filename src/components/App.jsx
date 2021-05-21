import React from 'react';

import HeaderBlock from '../components/block/header';
import FooterBlock from './block/footer';
import MainBlock from './block/main';
import TrainingBlock from './block/training';
import ContactBlock from './block/contact';

import './app.less'


const App = ( ) =>{
    return(
        <div className="app">
            <HeaderBlock/>
            <MainBlock/>
            <TrainingBlock/>
            <ContactBlock/>
            <FooterBlock/>
        </div>
    )
}

export default App