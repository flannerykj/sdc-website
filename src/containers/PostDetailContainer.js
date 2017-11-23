import { connect } from 'react-redux'
import { getPost } from '../actions/posts';
import PostDetail from '../components/PostDetail';


const mapStateToProps = (state) => {
  return {
    post: state.selectedPost
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (postSlug) => {
      dispatch(getPost(postSlug));

    }
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
