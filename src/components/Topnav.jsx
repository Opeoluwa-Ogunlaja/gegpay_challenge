import React from "react";
import { useState } from "react";

import { Icon } from "./Icon";
import {
  CalenderIcon,
  NotificationIcon,
  SearchIcon,
} from "../assets/icons";
import { ProfileDropdown } from "./ProfileDropdown";
import Calendar from 'react-calendar'

export const Topnav = () => {
  const [dateValue, setDate] = useState(new Date());
  // const today = new Date();
  // console.log(today)
  const onChange = (newDate) => {
    setDate(newDate);
  };
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
          <div className="topnav_calender flex items-center cursor">
            <Icon iconelement={CalenderIcon} alt="Calender_icon" />
            <p className="hide-on-small clr-neutral-900">{}</p>
            <div className="calendar-dropdown">
              <Calendar onChange={onchange} />
            </div>
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
