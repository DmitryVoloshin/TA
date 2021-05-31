import React from 'react';

// import HeaderBlock from './block/header/desktop-header'
import FooterBlock from './block/footer';
import MainBlock from './block/main';
import TrainingBlock from './block/training';
import ContactBlock from './block/contact';

import './app.less'
import { DesktopHeader } from './block/header';

const App = () => {
  return (
    <div className="app">

      {/* <HeaderBlock/> */}
      <DesktopHeader/>
      <MainBlock/>
      <TrainingBlock/>
      <ContactBlock/>
      <FooterBlock/>

    </div>
  )
}

export default App