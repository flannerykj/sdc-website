import React, { Component } from 'react';

class DefaultPage extends Component {
  render() {
    console.log(this.props);
    var title, pageContent = '';
    if (this.props.page) {
      title = this.props.page.fields.title;
      pageContent = this.props.page.fields.pageContent;
    return(
      <div >
        <h1 className='title is-1'>{title || ''}</h1>
        <section>
          {pageContent || ''}
        </section>
      </div>
      )
    } else {
      return <h1></h1>
      }
  }
}

export default DefaultPage;
