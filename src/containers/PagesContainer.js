import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getPages } from '../actions/pages';
import {
  Switch,
  Route,
} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import PostIndexPage from '../pages/PostIndexPage';
import PostDetailPage from '../pages/PostDetailPage';
import DefaultPage from '../pages/DefaultPage';
import PartnersContainer from '../containers/PartnersContainer';
import PeopleContainer from '../containers/PeopleContainer';



class PagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: {},
      posts: {}
    }
  }
  componentWillReceiveProps(nextProps) {
    var pages = {}
    nextProps.pages.items.map((page, i) => {
      pages[page.fields.slug] = page
    })
    var posts = {}
    nextProps.posts.items.map((post, i) => {
      posts[post.fields.slug] = post
    })
    this.setState({
      pages: pages,
      posts: posts
    })

  }


  render() {
    return (

        <div className='section page-container'>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
              <Route exact path={process.env.PUBLIC_URL + '/contact'} component={ContactPage} />
              <Route path={process.env.PUBLIC_URL + '/:pageSlug'} render={((match) => {
                const slug = match.match.params.pageSlug;
                return (
                <DefaultPage page={this.state.pages[slug]}/>
                )})} />
              <Route path={process.env.PUBLIC_URL + '/our-partners'} component={PartnersContainer}/>

              <Route path={process.env.PUBLIC_URL + '/who-we-are'} component={PeopleContainer}/>
          </div>
            )
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    posts: state.posts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPages: () => {
      dispatch(getPages())
      }
    }
  }



export default connect(mapStateToProps, mapDispatchToProps)(PagesContainer);
