import {client} from '../ContentfulClient';

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS';


export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';



function requestPosts() {
  return {
    type: REQUEST_POSTS,
  }
}

function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    posts: posts,
    isFetching: false,
    receivedAt: Date.now()
  }
}


function getPosts(paginationIndex, paginationLimit) {
  console.log(paginationIndex, paginationLimit);
  return function (dispatch) {
    dispatch(requestPosts())
    return client.fetchPosts(paginationIndex, paginationLimit)
      .then(response =>
        dispatch(receivePosts(response.items))
      )

  }
}



//SINGLE POST ACTIONS
function requestPost() {
  return {
    type: REQUEST_POST,
  }
}

function receivePost(post) {
  console.log(post);
  return {
    type: RECEIVE_POST,
    post: post,
    isFetching: false,
    receivedAt: Date.now()
  }
}


function getPost(postSlug) {
  return function (dispatch) {
    dispatch(requestPost())
    return client.fetchPost(postSlug)
      .then(response =>
        dispatch(receivePost(response.items[0]))
      )

  }
}
export {getPosts, getPost}

