import React, { Component } from 'react';
import PostTags from './PostTags';

class PostPreview extends Component {
  render() {
    const post = this.props.post.fields;
    const url = '/posts/'+post.slug
    return(
      <div className='card' style={{marginBottom: '20px'}}>
        <div className='card-content'>
          <div className='media'>
            <div className='media-content'>
              <p className='title is-4'>
                {post.title}
              </p>
              <p className='subtitle is-5'>
                {post.subtitle}
              </p>
            </div>
          </div>
          <div className='content'>
              {post.body}
          </div>
        </div>
      </div>
    )
  }
}

export default PostPreview;
