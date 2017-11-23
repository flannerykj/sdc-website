import React, { Component } from 'react';

class ErrorMessage extends Component {
  render() {
    return(
      <div>
        <h1 className='title is-1'>
          {this.props.errorMessage||'404 Error'}
        </h1>
      </div>
    )
  }
}

export default ErrorMessage;
