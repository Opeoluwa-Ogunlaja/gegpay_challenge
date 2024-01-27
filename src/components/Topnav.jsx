import React from "react";
import Search from "../assets/icons/search.svg";
import Notification from "../assets/icons/notification.svg";
import Calender from "../assets/icons/calender.svg";
import ArrowDown from "../assets/icons/Arrow Down.svg";
import Profile from "../assets/icons/Profile.svg";
import { Icon } from "./Icon";
import { MenuIcon } from "../assets/icons";

export const Topnav = () => {
  return (
    <header className="topnav flex items-center justify-between gap-md">
      <div className="topnav_left flex justify-center gap-md ">
        <p className="leading-heading-1 clr-neutral-900">Dashboard</p>
      </div>

      <div className="topnav_right flex items-center justify-center gap-md">
        <div className="search_bar hide-on-small">
          <div>
            <img src={Search} alt="" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="calendar_and_notification flex items-center justify-between gap-md">
          <div className="topnav_calender flex items-center cursor">
            <img src={Calender} alt="Calender_icon" />
            <p className="hide-on-small clr-neutral-900">January 23, 2024</p>
          </div>

          <div className="topnav_notification pointer flex items-center justify-center">
            <img src={Notification} alt="Calender_icon" />
          </div>
        </div>
        <div className="profile_menu">
          <div className="profile_container flex items-center justify-center cursor">
            <img src={Profile} alt="User Profile" />
            <div className="name_and_email flex flex-column hide-on-small">
              <b className="clr-neutral-900">Justin Bergson</b>
              <p>Justin@gmail.com</p>
            </div>
            <div className="caret-down">
              <img src={ArrowDown} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
