import React from 'react'
import './sidebar.css'

import { Users } from "../../dummyData"

import { Bookmark, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline, Event, Chat } from '@mui/icons-material'
import CloseFriend from '../closeFriend/CloseFriend'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebatListItem">
            <RssFeed className='sidebarIcon'/>
            <span className="sidebarLisstItemText">Feed</span>
          </li>
          <li className="sidebatListItem">
            <Chat className='sidebarIcon'/>
            <span className="sidebarLisstItemText">Feed</span>
          </li>
          <li className="sidebatListItem">
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span className="sidebarLisstItemText">Video</span>
          </li><li className="sidebatListItem">
            <Group className='sidebarIcon'/>
            <span className="sidebarLisstItemText">Groups</span>
          </li>
          <li className="sidebatListItem">
            <Bookmark className='sidebarIcon'/>
            <span className="sidebarLisstItemText">Bookmarks</span>
          </li>
          <li className="sidebatListItem">
            <HelpOutline className='sidebarIcon'/>
            <span className="sidebarLisstItemText">Questions</span>
          </li>
          <li className="sidebatListItem">
            <WorkOutline className='sidebarIcon'/>
            <span className="sidebarLisstItemText">Jobs</span>
          </li>
          <li className="sidebatListItem">
            <Event className='sidebarIcon'/>
            <span className="sidebarLisstItemText">Feed</span>
          </li>
          <li className="sidebatListItem">
            <School className='sidebarIcon'/>
            <span className="sidebarLisstItemText">Feed</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
          {Users.map ((u) => (
            <CloseFriend key={u.id} user={u} />))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
