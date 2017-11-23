import React, { Component } from 'react';
import PostList from '../containers/PostListContainer';

class CategoryIndexPage extends Component {
  render() {
    return(
      <div>
        <h1 className='title is-1'>Post Index Page</h1>
        <PostList filters={{
          category: this.props.match.params.categorySlug
          }} />
      </div>
    )
  }
}

export default CategoryIndexPage;
