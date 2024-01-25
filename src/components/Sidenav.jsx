import React from 'react';

import { ArrowRightIcon, BoxIcon, CategoryIcon, DiscountIcon, InfoCircleIcon, LogoutIcon, Profile2UserIcon, Setting2Icon, TrendUpIcon } from '../assets/icons';
import { Icon } from './Icon';
// import Toggle from './toggle_mode_switch';

const sidenav_links = [
    {
        to: '/',
        icon: CategoryIcon,
        title: 'home'
    },
    {
        to: '/',
        icon: TrendUpIcon,
        title: 'home2'
    },
    {
        to: '/',
        icon: Profile2UserIcon,
        title: 'hom333'
    },
    {
        to: '/',
        icon: BoxIcon,
        title: 'home3'
    },
    {
        to: '/',
        icon: DiscountIcon,
        title: 'home4'
    },
    {
        to: '/',
        icon: InfoCircleIcon,
        title: 'home5'
    },
    {
        to: '/',
        icon: ArrowRightIcon,
        title: 'home6'
    },
    {
        to: '/',
        icon: Setting2Icon,
        title: 'home7'
    },
    {
        to: '/',
        icon: LogoutIcon,
        title: 'home8'
    }
]

// for this one the array of links are already there withb the icons associated with them. You can then use the Icon element to render the icon by passing it into the IconElement prop basically. Work no too dey
export const Sidenav = () => {
  return (
    <aside className='sidenav flex flex-column items-center'>
        <div className="sidenav-top flex flex-column items-center gap-lg">
            <div className='logo px-xs'>
                <img src="/icons/logo.svg" alt="logo" />
                <h1 className="visually-hidden"></h1>
            </div>
            <ul className='flex flex-column items-center gap-lg'>
                {sidenav_links.slice(0, -3).map((link, i) => {
                    return <li key={link.title}>
                        <a href={link.to} className='px-xs flex items-center justify-center'>
                        {   <Icon IconElement={link.icon}/>}
                            <span className='visually-hidden'>{link.title}</span>
                        </a>
                    </li>
                })}
            </ul>
            <div className="light_and_dark_toggle">
                <label htmlFor="lightDarkToggle">
                    {/* <Toggle /> */}
                </label>
            </div>
        </div>
        <ul className='sidenav-bottom flex flex-column items-center gap-lg'>
            {sidenav_links.slice(6, -1).map((link, i) => {
                return <li key={link.title} >
                    <a href={link.to} className='px-xs flex items-center justify-center'>
                        {<Icon IconElement={link.icon}/>}
                        <span className='visually-hidden'>{link.title}</span>
                    </a>
                </li>
            })}
        </ul>
    </aside>
  )
}
