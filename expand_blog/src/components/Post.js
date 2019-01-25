import React from 'react'

export const Post = (props) => {
  return (
    <section className='PostOriginals' id={props.post.id}>
      <h3> {props.post.title} </h3>
      <p> {props.post.body} </p>
    </section>
  )
}
