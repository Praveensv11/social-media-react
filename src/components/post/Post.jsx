import React from 'react'
import { MoreVert } from '@mui/icons-material'
import {Users} from "../../dummyData"

import './post.css'

const Post = (post) => {
  console.log(Users)
   return (
    <div className='post'>
      <div className="postWrapper">
        <div className="posttop">
            <div className="postTopLeft">
                <img 
                  src={Users.filter((u) => u.id === post.post.userId)[0].profilePicture} 
                  alt="" 
                  className="postProfileImg" 
                />
                <span className="postUsername">
                {Users.filter((u) => u.id === post.post.userId)[0].username}
                </span>
                <span className='postDate'>5 min ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
          <span className='postText'>{post.post?.desc}</span>
          <img src={post.post.photo} alt="" className='postImg' />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className='likeIcon' src="/assets/person/like.png" alt="" />
            <img className='likeIcon' src="/assets/person/heart.png" alt="" />
            <span className="postlikeCounter">{post.post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
