import React, { useRef, useState } from "react";
import { CalenderIcon } from "../assets/icons";
import Calendar from "react-calendar";
import { Icon } from "./Icon";
import { useToggle } from "../hooks/useToggle";
import useClickOutside from "../hooks/useClickOutside";

const  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

export const CalendarDropdown = () => {
  const [dropdownOpen, toggleDropdownOpen, set] = useToggle(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, (e) => {
    set(false);
  });

  const [dateValue, setDate] = useState(new Date());
  const onChange = (newDate) => {
    setDate(newDate);
  };
  return (
    <div className="calendar-dropdown" ref={dropdownRef}>
      <div className="topnav_calender flex items-center cursor-pointer" onClick={toggleDropdownOpen}>
        <Icon iconelement={CalenderIcon} alt="Calender_icon" />
        <p className="calendarValue text-md font-medium hide-on-small">{months[dateValue.getMonth()]} {dateValue.getDate()}, {' '} {dateValue.getFullYear()} </p>
      </div>
      <div className={`Sample__container calendar-container-content${dropdownOpen ? " open" : ""}`}>
        <div className={`Sample__container__content`}>
          <Calendar 
              // className=' grid gap-md justify-center text-md'
              // tileClassName={'calendar-tile p-xs font-medium w-max'}
              onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
