import React from 'react';

import { BoxIcon, InfoCircleIcon, Profile2UserIcon, Setting2Icon, TrendUpIcon } from '../assets/icons';


const sidenav_links = [
    {
        to: '/',
        icon: BoxIcon,
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
        icon: InfoCircleIcon,
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
        icon: Setting2Icon,
        title: 'home8'
    }
]

const Icon = ({ IconElement }) => {
    return <IconElement />
}

export const Sidenav = () => {
  return (
    <aside className='sidenav'>
        <div className='logo px-xs'>
            <img src="/icons/logo.svg" alt="logo" />
            <h1 className="visually-hidden"></h1>
        </div>
        <ul>
            {sidenav_links.slice(0, -3).map((link, i) => {
                return <li key={link.title} className='px-xs'>
                    <a href={link.to}>
                    {   <Icon IconElement={link.icon}/>}
                        <span className='visually-hidden'>{link.title}</span>
                    </a>
                </li>
            })}
            <div className='sidenav-bottom'>
                {sidenav_links.slice(-3, -1).map((link, i) => {
                    return <li key={link.title} className='px-xs'>
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
