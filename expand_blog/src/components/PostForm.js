import React from 'react'

export const PostForm = ({postTitle, postBody, handleTextChange}) => {
  return (
    <section>
      <input type='text' name='postTitle' value={postTitle} onChange={handleTextChange}/>
      <input type='text' name='postBody' value={postBody} onChange={handleTextChange}/>
      <input type='submit'/>
    </section>
  )
}
