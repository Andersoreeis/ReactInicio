import './App.css';
import React, { Component } from 'react';
import { PostCard } from './components/postsCards';
import { loadPosts } from './components/api';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
   this.loadPostsData();
  }

  loadPostsData = async () => {
      const postsAndPhotos = await loadPosts();
      this.setState({ posts: postsAndPhotos });
   
  }

  render() {
    const { posts } = this.state;

    return (
      <div className='container'>
        {posts.map(post => (
        <PostCard key={post.id} body={post.body} title={post.title} />
        ))}
      </div>
    );
  }
}

export default App;
