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
    this.setState = ({
      [event.target.name]: event.target.value,

    })
  }


  render() {
    let {allPosts, postTitle, postBody } = this.state
    return (
      <div className='App'>
        <Feed allPosts={allPosts} postTitle={postTitle} postBody={postBody} handleTextChange={this.handleTextChange}/>
      </div>
    )
  }
}

export default App
