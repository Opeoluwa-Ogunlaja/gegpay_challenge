import React from "react";

import { Icon } from "./Icon";
import {
  ArrowDownIcon,
  CalenderIcon,
  NotificationIcon,
  ProfileIcon,
  SearchIcon,
} from "../assets/icons";

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
        <div className="profile_menu">
          <div className="profile_container flex items-center justify-center cursor">
            <Icon iconelement={ProfileIcon} style={{ borderRadius: 'inherit' }} alt="User Profile" />
            <div className="name_and_email flex flex-column hide-on-small">
              <b className="clr-neutral-900">Justin Bergson</b>
              <p>Justin@gmail.com</p>
            </div>
            <div className="caret-down">
              <Icon iconelement={ArrowDownIcon} className="aspect-square" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
