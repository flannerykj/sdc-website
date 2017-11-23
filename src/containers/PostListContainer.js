import { connect } from 'react-redux'
import { getPosts} from '../actions/posts';
import PostList from '../components/PostList';


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



export default connect(mapStateToProps, mapDispatchToProps)(PostList);
