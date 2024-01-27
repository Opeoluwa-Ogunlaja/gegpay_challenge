import React from "react";
import { Icon } from "./Icon";
import { ArrowDownIcon, ProfileIcon } from "../assets/icons";
import { useToggle } from "../hooks/useToggle";

const dropdownLinks = [{
    to: '/',
    title: 'bomb'
},
{
    to: '/',
    title: 'bomb'
},
{
    to: '/',
    title: 'bomb'
},
{
    to: '/',
    title: 'bomb'
}]


export const ProfileDropdown = () => {
  const [dropdownOpen, toggleDropdownOpen] = useToggle(false)
  

  return (
    <div className="profile-dropdown">
      <div className="profile_menu cursor-pointer" onClick={() => toggleDropdownOpen()}>
        <div className="profile_container flex items-center justify-center cursor">
          <Icon
            iconelement={ProfileIcon}
            style={{ borderRadius: "inherit" }}
            alt="User Profile"
          />
          <div className="name_and_email flex flex-column hide-on-small">
            <b className="clr-neutral-900">Justin Bergson</b>
            <p>Justin@gmail.com</p>
          </div>
          <div className="caret-down">
            <Icon
              iconelement={ArrowDownIcon}
              className="aspect-square"
            />
          </div>
        </div>
        <div className={`profile-container-content${dropdownOpen ? ' open' : ''}`}>
            <ul className="flex items-center"></ul>
        </div>
      </div>
    </div>
  );
};
