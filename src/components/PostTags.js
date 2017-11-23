import React, { Component } from 'react';
import tagIcon from '../media/icons/tags.png';


class PostTags extends Component {
  render() {
    return(
      <span>
        <img src={tagIcon} style={{marginRight: '10px'}}/>
              {this.props.tags.map((tag) => (
              <span
                key={tag.sys.id}
                className='button is-primary is-small'>{tag.fields.tagName} </span>))}

      </span>
    )
  }
}

export default PostTags;
