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
            <li>
              <a href="#" className="footer-list_link">History</a>
            </li>
          </ul>
          <ul className="footer-nav_list">
            <li>Simulators</li>
            <li>
              <a href="#" className="footer-list_link">Simulators 1</a>
            </li>
            <li>
              <a href="#" className="footer-list_link">Simulators 2</a>
            </li>
            <li>
              <a href="#" className="footer-list_link">Simulators 3</a>
            </li>
          </ul>
          <ul className="footer-nav_list">
            <li>Trainings</li>
            <li>
              <a href="#" className="footer-list_link">Step 1</a>
            </li>
            <li>
              <a href="#" className="footer-list_link">Step 2</a>
            </li>
          </ul>
          <ul className="footer-nav_list">
            <li>Schedule</li>
            <li>
              <a href="#" className="footer-list_link">Schedule</a>
            </li>
          </ul>
          <ul className="footer-nav_list">
            <li>Contact</li>
            <li>
              <a href="#" className="footer-list_link">+0 000 000 00 00 0</a>
            </li>
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