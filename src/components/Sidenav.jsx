import React from 'react'

const sidenav_links = [
    {
        to: '/',
        icon: '',
        title: 'home'
    },
    {
        to: '/',
        icon: '',
        title: 'home2'
    },
    {
        to: '/',
        icon: '',
        title: 'hom3'
    },
    {
        to: '/',
        icon: '',
        title: 'home4'
    },
    {
        to: '/',
        icon: '',
        title: 'home5'
    },
    {
        to: '/',
        icon: '',
        title: 'home6'
    },
    {
        to: '/',
        icon: '',
        title: 'home7'
    },
    {
        to: '/',
        icon: '',
        title: 'home8'
    }
]

export const Sidenav = () => {
  return (
    <aside className='sidenav'>
        <div className='logo'></div>
        <ul>
            {sidenav_links.slice(0, -3).map((link, i) => {
                return <li key={link.title}>
                    <a href={link.to}>
                        <span className='visually-hidden'>{link.title}</span>
                    </a>
                </li>
            })}
            <div className='sidenav-bottom'>
                {sidenav_links.slice(-3, -1).map((link, i) => {
                    return <li key={link.title}>
                        <a href={link.to}>
                            <span className='visually-hidden'>{link.title}</span>
                        </a>
                    </li>
                })}
            </div>
        </ul>
    </aside>
  )
}
