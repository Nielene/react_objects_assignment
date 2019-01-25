import React from 'react'

export const PostForm = ({postId, postTitle, postBody, message, handleTextChange, handleSubmit}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} id={postId}>
        <input type='text' name='postTitle' value={postTitle} onChange={handleTextChange}/>
        <input type='text' name='postBody' value={postBody} onChange={handleTextChange}/>
        <input type='submit'/>
      </form>

      <section id={postId}>
        <h3> {postTitle} </h3>
        <p> {postBody} </p>
        <p> {message} </p>
      </section>


    </div>
  )
}
