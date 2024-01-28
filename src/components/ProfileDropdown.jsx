import React, { useRef } from "react";
import { Icon } from "./Icon";
import { ArrowDownIcon, ProfileIcon } from "../assets/icons";
import { useToggle } from "../hooks/useToggle";
import useClickOutside from "../hooks/useClickOutside";

const dropdownLinks = [{
    to: '/',
    title: 'Profile'
},
{
    to: '/',
    title: 'Notifications'
},
{
    to: '/',
    title: 'Calendar'
}]


export const ProfileDropdown = () => {
  const [dropdownOpen, toggleDropdownOpen, set] = useToggle(false)
  const dropdownRef = useRef(null)

  useClickOutside(dropdownRef, (e) => {
    set(false)
  })

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <div className="profile_menu cursor-pointer">
        <div className="profile_container flex items-center justify-center cursor" onClick={() => toggleDropdownOpen()}>
          <Icon
            iconelement={ProfileIcon}
            style={{ borderRadius: "inherit" }}
            className={'profile-icon'}
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
              style={{ transform: dropdownOpen ? 'rotateY(180deg)' : '' }}
            />
          </div>
        </div>
        <div className={`profile-container-content${dropdownOpen ? ' open' : ''}`}>
            <ul className="flex flex-column gap-lg" style={{ alignItems: 'left' }}>
                {dropdownLinks.map((link, i) => {
                    return <li key={link.title + i}>
                        <a href="/" className="font-medium text-md">{ link.title }</a>
                    </li>
                })}
            </ul>
        </div>
      </div>
    </div>
  );
};