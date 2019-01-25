import React from 'react'
import { Post } from './Post'
import {PostForm } from './PostForm'

export const Feed = ({allPosts, postTitle, postBody, handleTextChange }) => {
  console.log(allPosts);

  allPosts = allPosts.map(eachPost => {
    return <Post key={eachPost.id} post={eachPost}/>
  })

  return (
    <div>
      <PostForm postTitle={postTitle} postBody={postBody} handleTextChange={handleTextChange}/>
      {allPosts}
    </div>
  )
}


// <div>
// {props.id}  <br/>
// {props.allPosts.id} {' - '}
// {props.allPosts.title} {' - '}
// {props.allPosts.body}
// {/* {props.allPosts} */}
// </div>
