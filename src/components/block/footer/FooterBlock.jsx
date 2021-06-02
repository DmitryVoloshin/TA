import React from 'react'

import './FooterBlock.less'

const FooterBlock = () => {

  return (
    <footer className="footer-block">
      <div className="footer-block_logo"/>
      <div className="footer-block_content">
        <ul className="footer-content_nav">
          <ul className="footer-nav_list">
            <li>About Us</li>
            <li>History</li>
          </ul>
          <ul className="footer-nav_list">
            <li>Simulators</li>
            <li>Simulators 1</li>
            <li>Simulators 2</li>
            <li>Simulators 3</li>
          </ul>
          <ul className="footer-nav_list">
            <li>Trainings</li>
            <li>Step 1</li>
            <li>Step 2</li>
          </ul>
          <ul className="footer-nav_list">
            <li>Schedule</li>
            <li>Schedule</li>
          </ul>
          <ul className="footer-nav_list">
            <li>Contact</li>
            <li>+0 000 000 00 00 0</li>
          </ul>
        </ul>
        <div className="footer-socials_block">
          <ul className="footer-socials_list">
            <a href="#">
              <li className="socials-fb socials"></li>
            </a>
            <a href="#">
              <li className="socials-tw socials"></li>
            </a>
            <a href="#">
              <li className="socials-in socials"></li>
            </a>
            <a href="#">
              <li className="socials-pi socials"></li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default FooterBlock