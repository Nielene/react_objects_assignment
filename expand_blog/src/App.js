import React from 'react'
import './App.css'
import { Feed } from './components/Feed.js'
import blog_posts from './blog_posts.json'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      allPosts: blog_posts,
      postTitle: '',
      postBody: '',
    }
    // debugger
  }

  handleTextChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,

    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { postTitle, postBody} = this.state;

    const newPost = {
      postId: this.generateId(),
      postTitle: postTitle,
      postBody: postBody,
    }

    if (postTitle && postBody) {
      this.setState({
        allPosts: [...this.state.allPosts, newPost],
        postTitle: '',
        postBody: '',
        message: '',
      })
    } else {
      this.setState({
        message: 'Please complete BOTH input fields.',
      })
    }
  }

  generateId = () => {
    return Math.random()
    .toString(34)
    .slice(2);
  }

  render() {
    let {allPosts, postId, postTitle, postBody, message } = this.state
    return (
      <div className='App'>
        <Feed allPosts={allPosts} postId={postId} postTitle={postTitle} postBody={postBody} message={message} handleTextChange={this.handleTextChange} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App
