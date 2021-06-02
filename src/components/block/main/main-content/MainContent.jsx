import React from "react";

import airport from "./../../../../assets/icons/SVGS/airport.svg";
import calendar from "./../../../../assets/icons/SVGS/calendar.svg";
import policeman from "./../../../../assets/icons/SVGS/policeman.svg";
import waitingroom from "./../../../../assets/icons/SVGS/waitingroom.svg";

import "./MainContent.less";

const MainContent = () => {
  return (
    <div className="main-block_content">
      <ul className="main-content_list">
        <li className="main-content_item">
          <span className="content-item_title">1994</span>
          <img className="main-content_img" src={calendar} />
          <p className="main-content_about">
            Inquietude simplicity terminated she compliment remarkably few her
            nay. The weeks
            <b className="bolded_content">IN 1994.</b>
          </p>
        </li>
        <li className="main-content_item">
          <span className="content-item_title">15.900</span>
          <img className="main-content_img" src={airport} />
          <p className="main-content_about">
            Inquietude simplicity terminated she compliment remarkably few her
            nay. The weeks
            <b className="bolded_content">15.900 square meters</b>
          </p>
        </li>
        <li className="main-content_item">
          <span className="content-item_title">800</span>
          <img className="main-content_img" src={policeman} />
          <p className="main-content_about">
            Inquietude simplicity terminated she compliment remarkably
            <b className="bolded_content">800 STUDENTS</b>
            at the same time
          </p>
        </li>
        <li className="main-content_item">
          <span className="content-item_title">21</span>
          <img className="main-content_img" src={waitingroom} />
          <p className="main-content_about">
            Inquietude simplicity terminated she compliment remarkably few her
            nay. The weeks
            <b className="bolded_content">21 SIMULATORS</b>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MainContent;
