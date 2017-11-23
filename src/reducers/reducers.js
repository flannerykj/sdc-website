import {getPost, getPosts} from './posts';
import {getPages} from './pages';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  posts: getPosts,
  selectedPost: getPost,
  pages: getPages
})

export default rootReducer;
