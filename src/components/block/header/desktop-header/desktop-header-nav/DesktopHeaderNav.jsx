import React from "react";

import search from "./../../../../../assets/icons/SVGS/search.svg";
import language from "./../../../../../assets/icons/SVGS/language.svg";

import "./DesktopHeaderNav.less";

const DesktopHeaderNav = () => {
  const links = ["About us", "Simulators", "Trainings", "Schedule", "Contact"];

  return (
    <>
      <div className="header-nav_gradient" />
      <div className="header-nav_block">
        <div className="header-logo_block">
          <div className="header-nav_logo" />
          <div className="header-logo_text">
            <h2 className="header-nav_title">TURKISH AIRLINE</h2>
            <p className="header-nav_text">FLYING TRAINING CENTER</p>
          </div>
        </div>
        <nav className="header-nav">
          <ul className="header-nav_list">
            {links.map((item) => {
              return (
                <li className="header-nav_item" key={item}>
                  <a href="#" className="nav-item_link">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <ul className="header-right_nav">
          <li className="right-nav_item">
            <img src={search} />
          </li>
          <li className="right-nav_item">
            <img src={language} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default DesktopHeaderNav;
