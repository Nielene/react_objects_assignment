import React from 'react'
import { Post } from './Post'
import {PostForm } from './PostForm'

export const Feed = ({allPosts, postId, postTitle, postBody, message, handleTextChange, handleSubmit }) => {
  console.log(allPosts);

  allPosts = allPosts.map(eachPost => {
    return <Post key={eachPost.id} post={eachPost}/>
  })

  return (
    <div className='App'>
      <PostForm key={postId} postTitle={postTitle} postBody={postBody} message={message} handleTextChange={handleTextChange} handleSubmit={handleSubmit}/>
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
