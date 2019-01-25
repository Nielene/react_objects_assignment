import React from 'react'
import './App.css'
import { Feed } from './components/Feed.js'
import blog_posts from './blog_posts.json'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      allPosts: blog_posts,
    }
    // debugger
  }

  render() {
    return (
      <div className='App'>
        <Feed allPosts={this.state.allPosts} />
      </div>
    )
  }
}

export default App
