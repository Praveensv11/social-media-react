import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <div className="logo">Praveen Social</div>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon' />
          <input type="text" 
            placeholder='search for friends, post or video' 
            className="searchInput" 
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <div className="topbarIconBadge">1</div>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <div className="topbarIconBadge">2</div>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <div className="topbarIconBadge">3</div>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="no" className='topbarImg' />
      </div>
    </div>
  )
}

export default Topbar
