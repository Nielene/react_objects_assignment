import React from 'react'

export const PostForm = ({postId, postTitle, postBody, message, handleTextChange, handleSubmit}) => {
  return (
    <div>
      <form className='PostFormInputs' onSubmit={handleSubmit} id={postId}>
        <input className='PostFormTitle' type='text' name='postTitle' value={postTitle} onChange={handleTextChange}/>
        <input className='PostFormBody' type='text' name='postBody' value={postBody} onChange={handleTextChange}/>
        <input  className='PostFormSubmit'type='submit'/>
      </form>

      <section id={postId}>
        <h3> {postTitle} </h3>
        <p> {postBody} </p>
        <p> {message} </p>
      </section>


    </div>
  )
}
