import React from "react";
import BurgerNav from "./mobile-header-nav/BurgerNav";

import search from "./../../../../assets/icons/SVGS/search.svg";
import language from "./../../../../assets/icons/SVGS/language.svg";

import "./MobileHeader.less";
import MobileHeaderContent from "./mobile-header-content/MobileHeaderContent";

const MobileHeader = () => {
  return (
    <div className="mobile-header_wrapper">
      <BurgerNav />

      <div className="mobile-header_logo--block">
        <h2>Tukrish Airline</h2>
      </div>

      <ul className="mobile-right_nav">
        <li className="right-nav_item">
          <img src={search} />
        </li>
        <li className="right-nav_item">
          <img src={language} />
        </li>
      </ul>

      <MobileHeaderContent />
      <div className="mobile-nav_gradient" />
      <div className="mobile-header_gradient" />
    </div>
  );
};

export default MobileHeader;
