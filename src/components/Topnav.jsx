import React from 'react'
import Search from '../assets/icons/search.svg';
import Notification from '../assets/icons/notification.svg';
import Calender from '../assets/icons/calender.svg';
import ArrowDown from '../assets/icons/Arrow Down.svg';
import Profile from '../assets/icons/Profile.svg';


const Icon = ({ IconElement }) => {
  return <IconElement />
}
export const Topnav = () => {
  return (
    <header className='topnav'>
        <div className='topnav_left'>
          <p>Dashboard</p>
        </div>

        <div className='topnav_right'>
          <div className="search_bar">
            <div>
              <img src={Search} alt="" />
              <input type="text" placeholder='Search...' />
            </div>
          </div>
          <div className="calendar_and_notification">
            <div className="topnav_calender">
              <img src={Calender} alt="Calender_icon" />
              <p>January 23, 2024</p>
            </div>

            <div className="topnav_notification">
              <img src={Notification} alt="Calender_icon" />

            </div>
          </div>
          <div className="profile_menu">
            <div className="profile_container">
              <img src={Profile} alt="User Profile" />
              <div className="name_and_email">
                <b>Justin Bergson</b>
                <p>Justin@gmail.com</p>
              </div>
              <div className="caret-down">
                <img src={ArrowDown} alt="" />
              </div>
            </div>
          </div>

        </div>
    </header>
  )
}
