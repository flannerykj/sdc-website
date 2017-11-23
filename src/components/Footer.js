import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
<footer className="footer">
  <div className="container">
    <div className="content has-text-centered">
      <p>
        <strong>Smeltzer Digital Consulting</strong><br/>
        &copy; 2017
      </p>
      <a href='https://twitter.com/flannerykj' target='_blank'>
        <span className="icon is-medium">
          <i className="fa fa-twitter"></i>
        </span>
      </a>
      <a href='https://facebook.com/flanneryjefferson' target='_blank'>
        <span className="icon is-medium">
          <i className="fa fa-facebook"></i>
        </span>
      </a>
       <a href='https://facebook.com/flanneryjefferson' target='_blank'>
        <span className="icon is-medium">
          <i className="fa fa-linkedin"></i>
        </span>
      </a>

    </div>
  </div>
</footer>

    )
  }
}

export default Footer;
