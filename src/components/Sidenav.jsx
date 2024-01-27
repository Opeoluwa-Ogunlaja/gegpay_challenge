import React from "react";

import {
  ArrowRightIcon,
  BoxIcon,
  CategoryIcon,
  DiscountIcon,
  InfoCircleIcon,
  LogoutIcon,
  MenuIcon,
  Profile2UserIcon,
  Setting2Icon,
  TrendUpIcon,
} from "../assets/icons";
import { Icon } from "./Icon";
import Toggle from "./Toggle_mode_switch";
import { useToggle } from "../hooks/useToggle";

const sidenav_links = [
  {
    to: "/",
    icon: CategoryIcon,
    title: "home",
  },
  {
    to: "/",
    icon: TrendUpIcon,
    title: "home2",
  },
  {
    to: "/",
    icon: Profile2UserIcon,
    title: "hom333",
  },
  {
    to: "/",
    icon: BoxIcon,
    title: "home3",
  },
  {
    to: "/",
    icon: DiscountIcon,
    title: "home4",
  },
  {
    to: "/",
    icon: InfoCircleIcon,
    title: "home5",
  },
  {
    to: "/",
    icon: ArrowRightIcon,
    title: "home6",
  },
  {
    to: "/",
    icon: Setting2Icon,
    title: "home7",
  },
  {
    to: "/",
    icon: LogoutIcon,
    title: "home8",
  },
];


export const Sidenav = () => {
  const [ open, toggleOpen ] = useToggle(false)
  console.log(open);
  return (
    <>
      <aside className={`sidenav flex flex-column items-center${open ? ' open' : ''} clr-neutral-bg`}>
        <div className={`sidenav-top flex flex-column items-center gap-lg`}>
          <div className="logo px-xs">
            <img src="/icons/logo.svg" alt="logo" />
            <h1 className="visually-hidden"></h1>
          </div>
          <ul className="flex flex-column items-center gap-lg">
            {sidenav_links.slice(0, -3).map((link, i) => {
              return (
                <li key={link.title}>
                  <a
                    href={link.to}
                    className="px-xs flex items-center justify-center"
                  >
                    {<Icon iconelement={link.icon} />}
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
        <ul className="sidenav-bottom flex flex-column items-center gap-lg">
          {sidenav_links.slice(6, -1).map((link, i) => {
            return (
              <li key={link.title}>
                <a
                  href={link.to}
                  className="px-xs flex items-center justify-center"
                >
                  {<Icon iconelement={link.icon} />}
                  <span className="visually-hidden">{link.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
      <button className="sidenav-toggle" onClick={() => toggleOpen()}><Icon iconelement={MenuIcon} className={'aspect-square colored'}/></button>
    </>
  );
};
