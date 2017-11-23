import React, { Component } from 'react';
import twitter from '../media/icons/glyphicons-social-32-twitter.png';
import linkedin from '../media/icons/glyphicons-social-18-linked-in.png';
import github from '../media/icons/glyphicons-social-22-github.png';
import medium from '../media/icons/glyphicons-social-64-medium.png';
import logo from '../media/sdc-logo.png';

import {NavLink} from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuExpanded: false
    }
  }
  toggleMenu = () => {
    this.setState({
      isMenuExpanded: !this.state.isMenuExpanded
    })
  }
  render() {
    return(
      <nav className="navbar">
        <div className='container page-container'>
        <div className="navbar-brand">
          <NavLink exact className="navbar-item" to={process.env.PUBLIC_URL + "/"} activeClassName='is-active'>
            <img src={logo}/> <span style={{width: '10px'}}></span>
            <strong> SDC</strong>
          </NavLink>

          <div
            className={this.state.isMenuExpanded?'navbar-burger burger is-active':'navbar-burger burger '}
            data-target="navMenuTransparentExample"
            onClick={this.toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navMenuTransparentExample"
          className={this.state.isMenuExpanded?'navbar-menu is-active':'navbar-menu'}>
          <div className="navbar-start">

                <NavLink className='navbar-item'  to={process.env.PUBLIC_URL + "/what-we-do"} activeClassName='is-active'>
                  What We Do
                </NavLink>

                 <NavLink className='navbar-item' to={process.env.PUBLIC_URL + "/who-we-are"} activeClassName='is-active'>
                  Who We Are
                  </NavLink>
                  <NavLink className='navbar-item' to={process.env.PUBLIC_URL + "/our-partners"} activeClassName='is-active'>
                    Our Partners
                  </NavLink>
          <NavLink className="navbar-item " to={process.env.PUBLIC_URL + "/contact"} activeClassName='is-active'>
            Contact
          </NavLink>
        </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="button is-info"
              style={{backgroundColor: '#49a6ed'}}
              data-social-network="Twitter"
              data-social-action="tweet"
              data-social-target="https://smeltzerdigitalconsulting.ca"
              target="_blank"
              href="https://twitter.com/intent/tweet?text=Digital consulting agency&hashtags=well-being&url=https://smeltzerdigitalconsulting.com">
              <span className="icon">
                <i className="fa fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>

          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>
  )
  }
}

export default Navbar;
