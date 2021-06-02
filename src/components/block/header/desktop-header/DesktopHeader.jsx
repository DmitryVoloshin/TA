import React from 'react'
import DesktopHeaderNav from './desktop-header-nav'
import DesktopHeaderSlider from './desktop-header-slider'

import './DesktopHeader.less'

const DesktopHeader = () => {
  return (
    <div className="header-block_content">
      <DesktopHeaderNav/>
      <DesktopHeaderSlider/>
      <div className="header-gradient_block"/>
    </div>
  )
}

export default DesktopHeader