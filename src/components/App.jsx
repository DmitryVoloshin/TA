import React from 'react';
import { useMediaPredicate } from "react-media-hook";

import { DesktopHeader, MobileHeader } from './block/header';
import FooterBlock from './block/footer';
import MainBlock from './block/main';
import TrainingBlock from './block/training';
import ContactBlock from './block/contact';

import './app.less'


const App = () => {
  const isThisDesktop = useMediaPredicate("(min-width:856px)")

  return (
    <div className="app">

      {isThisDesktop? <DesktopHeader/> : <MobileHeader/> }
      {/* {isThisDesktop? <MainBlock/> : <div> main</div>} */}
      {/* <TrainingBlock/> */}
      {/* <ContactBlock/> */}
      {/* <FooterBlock/> */}

    </div>
  )
}

export default App