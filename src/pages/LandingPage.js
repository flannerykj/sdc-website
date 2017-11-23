import React, { Component } from 'react';
import PostList from '../components/PostList';
import { connect } from 'react-redux'
import { getPosts} from '../actions/posts';

class LandingPage extends Component {
  render() {
    return(
      <div className='page-container'>
        <section className="hero is-primary is-medium">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
               Smeltzer Digital Consulting
              </h1>
              <h2 className="subtitle">
                Agency for digital strategy
              </h2>
            </div>
          </div>
        </section>
        <section style={{marginTop: '50px'}}>
          <hr/>
          <PostList posts={this.props.posts} getPosts={this.props.getPosts}/>
        </section>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: (paginationIndex, paginationLimit) => {
      dispatch(getPosts(paginationIndex, paginationLimit))
      }
    }
  }



export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
