import React, { Component } from 'react';
import {getPosts} from '../actions/posts';
import PostPreview from './PostPreview';

class PostList extends Component {
  componentWillMount() {
      this.props.getPosts(0, 5);
  }
  render() {
    const {items, isLoading, isError, paginationIndex} = this.props.posts;
    return(
      <div>
        {items.map((p) => {
          const post = p.fields;
          return (
          <PostPreview key={p.sys.id} post={p}/>
          )
          })}
        {isLoading?(<span>Loading...</span>):''}
      </div>
    )
  }
}

export default PostList;
