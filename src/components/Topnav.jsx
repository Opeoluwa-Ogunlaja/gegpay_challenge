import React from "react";

import { Icon } from "./Icon";
import { NotificationIcon, SearchIcon } from "../assets/icons";
import { ProfileDropdown } from "./ProfileDropdown";
import { CalendarDropdown } from "./CalendarDropdown";

export const Topnav = () => {
  return (
    <header className="topnav flex items-center justify-between gap-md">
      <div className="topnav_left flex justify-center items-center gap-md ">
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
          <CalendarDropdown />
          <div className="topnav_notification pointer flex items-center justify-center">
            <Icon iconelement={NotificationIcon} alt="Notification_icon" />
          </div>
        </div>
        <ProfileDropdown />
      </div>
    </header>
  );
};
