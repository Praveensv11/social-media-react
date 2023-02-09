import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/person/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Vasanth</b> and <b>3 other friends</b> hav a birthday today
          </span>
        </div>
        <img src="/assets/person/ad.png" alt="" className="rightbarAD" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
