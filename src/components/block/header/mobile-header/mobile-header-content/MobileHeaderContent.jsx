import React from "react";

import "./MobileHeaderContent.less";

const MobileHeaderContent = () => {
  return (
    <div className="mobile-header_content">
      <h2 className="mobile-header_content--title">Are you ready for</h2>
      <h3 className="mobile-header_content--title_second">Take-off?</h3>
      <p className="mobile-header_cotent--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
      <div className="mobile-header_buttons--block">
        <button className="mobile-header_content--button">Learn more</button>
        <button className="mobile-header_content--button">
          E-registration
        </button>
      </div>
    </div>
  );
};

export default MobileHeaderContent;
