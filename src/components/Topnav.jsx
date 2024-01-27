import React from "react";

import { Icon } from "./Icon";
import {
  CalenderIcon,
  NotificationIcon,
  SearchIcon,
} from "../assets/icons";
import { ProfileDropdown } from "./ProfileDropdown";

export const Topnav = () => {
  return (
    <header className="topnav flex items-center justify-between gap-md">
      <div className="topnav_left flex justify-center items-center gap-md ">
        {/* <div className="logo logo-on-small">
          <img src="/icons/logo.svg" alt="logo" />
          <h1 className="visually-hidden">Site Logo</h1>
        </div> */}
        <p className="leading-wider clr-neutral-900">Dashboard</p>
      </div>

      <div className="topnav_right flex items-center justify-center gap-md">
        <div className="search_bar hide-on-small">
          <div>
            <Icon iconelement={SearchIcon} />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="calendar_and_notification flex items-center justify-between">
          <div className="topnav_calender flex items-center cursor">
            <Icon iconelement={CalenderIcon} alt="Calender_icon" />
            <p className="hide-on-small clr-neutral-900">January 23, 2024</p>
          </div>

          <div className="topnav_notification pointer flex items-center justify-center">
            <Icon iconelement={NotificationIcon} alt="Notification_icon" />
          </div>
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
};
