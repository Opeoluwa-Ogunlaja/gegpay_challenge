import React , {useRef} from "react";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  BoxIcon,
  CategoryIcon,
  DiscountIcon,
  InfoCircleIcon,
  LogoutIcon,
  Profile2UserIcon,
  Setting2Icon,
  TrendUpIcon,
} from "../assets/icons";
import { Icon } from "./Icon";
import Toggle from "./Toggle_mode_switch";
import useClickOutside from "../hooks/useClickOutside";

const sidenav_links = [
  {
    to: "/",
    icon: CategoryIcon,
    title: "home",
    active: true
  },
  {
    to: "/",
    icon: TrendUpIcon,
    title: "home2",
  },
  {
    to: "/",
    icon: Profile2UserIcon,
    title: "home3",
  },
  {
    to: "/",
    icon: BoxIcon,
    title: "home4",
  },
  {
    to: "/",
    icon: DiscountIcon,
    title: "home5",
  },
  {
    to: "/",
    icon: InfoCircleIcon,
    title: "home6",
  },
  {
    to: "/",
    icon: ArrowRightIcon,
    title: "home7",
  },
  {
    to: "/",
    icon: Setting2Icon,
    title: "home8",
  },
  {
    to: "/",
    icon: LogoutIcon,
    title: "home9",
  }
];


export const Sidenav = ({ toggleState }) => {
  const [ open, toggleOpen, set ] = toggleState
  const sidenavRef = useRef(null)

  useClickOutside(sidenavRef, (e) => {
    console.log();
    if (open && !(e.target.dataset?.toggle == 'sidenav' || e.target.parentElement.dataset?.toggle == 'sidenav')) set(false);
  })
  return (
    <>
      <aside className={`sidenav flex flex-column items-center${open ? ' open' : ''}`} ref={sidenavRef}>
        <div className={`sidenav-top flex flex-column items-center gap-lg`}>
          <div className="logo px-xs">
            <img src="/icons/logo.svg" alt="logo" />
            <h1 className="visually-hidden"></h1>
          </div>
          <ul className="sidenav-links-list flex flex-column items-center">
            {sidenav_links.slice(0, 6).map((link, i) => {
              return (
                <li key={link.title}>
                  <a
                    href={link.to}
                    className={`px-xs flex items-center sidenav-link justify-center${link.active ? ' active' : ''}`}
                  >
                    {<Icon iconelement={link.icon} className="sidenav-icon" />}
                    <span className="visually-hidden">{link.title}</span>
                  </a>
                </li>
              );
            })}
            <li>
              <Toggle />
            </li>
          </ul>
        </div>
        <ul className="sidenav-bottom sidenav-links-list flex flex-column items-center">
          {sidenav_links.slice(6, 9).map((link, i) => {
            return (
              <li key={link.title}>
                <a
                  href={link.to}
                  className="px-xs flex items-center justify-center"
                >
                  {<Icon iconelement={link.icon} className="sidenav-icon" />}
                  <span className="visually-hidden">{link.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
      <button className="sidenav-toggle" data-open={open} data-toggle="sidenav" onClick={() => toggleOpen()}><Icon iconelement={ArrowDownIcon} data-toggle="sidenav" className={'aspect-square colored'}/></button>
    </>
  );
};
