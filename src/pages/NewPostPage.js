import React, { Component } from 'react';
import PostForm from '../containers/PostFormContainer';

class NewPostPage extends Component {
  render() {
    return(
      <div>
        <h1>New Post Page</h1>
        <PostForm />
      </div>
    )
  }
}

export default NewPostPage;
