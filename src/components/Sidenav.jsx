import React from 'react';

import { BoxIcon, CategoryIcon, DiscountIcon, InfoCircleIcon, LogoutIcon, Profile2UserIcon, Setting2Icon, TrendUpIcon } from '../assets/icons';


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
        title: 'hom3'
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
        icon: Setting2Icon,
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

// I go soon Make this icon element to seperate  component/file... Just dey rugged am
const Icon = ({ IconElement }) => {
    return <IconElement />
}

// for this one the array of links are already there withb the icons associated with them. You can then use the Icon element to render the icon by passing it into the IconElement prop basically. Work no too dey
export const Sidenav = () => {
  return (
    <aside className='sidenav'>
        <div className='logo px-xs'>
            <img src="/icons/logo.svg" alt="logo" />
            <h1 className="visually-hidden"></h1>
        </div>
        <ul className='flex flex-column items-center'>
            {sidenav_links.slice(0, -3).map((link, i) => {
                return <li key={link.title} className='px-xs flex items-center'>
                    <a href={link.to}>
                    {   <Icon IconElement={link.icon}/>}
                        <span className='visually-hidden'>{link.title}</span>
                    </a>
                </li>
            })}
            <div className='sidenav-bottom'>
                {sidenav_links.slice(-3, -1).map((link, i) => {
                    return <li key={link.title} className='px-xs flex items-center'>
                        <a href={link.to}>
                            {<Icon IconElement={link.icon}/>}
                            <span className='visually-hidden'>{link.title}</span>
                        </a>
                    </li>
                })}
            </div>
        </ul>
    </aside>
  )
}
