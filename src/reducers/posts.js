import {REQUEST_POSTS} from '../actions/posts';
import {RECEIVE_POSTS} from '../actions/posts';
import {REQUEST_POST} from '../actions/posts';
import {RECEIVE_POST} from '../actions/posts';

const defaultState = {
    items: [],
    paginationIndex: 0,
    paginationLimit: 5,
    isLoading: false,
    isError: false
  };

export function getPosts(state = defaultState, action ) {
  switch(action.type) {
    case REQUEST_POSTS:
      return {...state, isLoading: true}
    case RECEIVE_POSTS:
        return {
          items: [...state.items, ...action.posts],
          paginationIndex: state.paginationIndex + state.paginationLimit,
          paginationLimit: state.paginationLimit,
          isLoading: false,
          isError: false
        }
    default:
      return state
  }
}


const defaultSelectedPostState = {
    item: [],
    isLoading: false,
    isError: false
  };

export function getPost(state = defaultSelectedPostState, action ) {
  switch(action.type) {
    case REQUEST_POST:
      return {...state, isLoading: true}
    case RECEIVE_POST:
        return {
          item: action.post,
          isLoading: false,
          isError: false
        }
    default:
      return state
  }
}


