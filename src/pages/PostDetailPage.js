import React, { Component } from 'react';
import PostDetail from '../containers/PostDetailContainer';

class PostDetailPage extends Component {
  render() {
    console.log(this.props);
    var title, pageContent = '';
    if (this.props.post) {
      title = this.props.post.fields.title;
      pageContent = this.props.post.fields.body;
    }
    return(
      <div >
        <h1 className='title is-1'>{title || ''}</h1>
        <section>
          {pageContent || ''}
        </section>
      </div>
    )
  }
}

export default PostDetailPage;
