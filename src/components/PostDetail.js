import React, { Component } from 'react';
import PostTags from './PostTags';
import ErrorMessage from './ErrorMessage';

class PostDetail extends Component {
  componentWillMount() {
    this.props.getPost(this.props.postSlug);
  }
  render() {
    const {item, isLoading, isError} = this.props.post;
    if (isLoading==true) {
      return (<div>Loading</div>)
    }
    if (item.fields) {
      return(
        <div>
          <h1 className='title is-1'>{item.fields.title}</h1>
          <h2 className='subtitle is-3'>{item.fields.datePublished}</h2>
          {item.fields.tags?(
            <p>
              <PostTags tags={item.fields.tags} />
            </p>):''}

          <p>
            {item.fields.body}
          </p>
        </div>
        )
    } else {
      return (<ErrorMessage message='Post not found'/>)
    }
  }
}

export default PostDetail;
