import { connect } from 'react-redux'
//import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from '../actions/posts';
import PostForm from '../components/PostForm';


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {

    const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {

    }
  }
 }}
  }
 }


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
