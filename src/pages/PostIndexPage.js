import React, { Component } from 'react';
import PostList from '../containers/PostListContainer';

class PostIndexPage extends Component {
  render() {
    return(
      <div>
        <h1 className='title is-1'>Post Index Page</h1>
        <PostList />
      </div>
    )
  }
}

export default PostIndexPage;
