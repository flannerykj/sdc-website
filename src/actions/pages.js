import {client} from '../ContentfulClient';

export const REQUEST_PAGES = 'REQUEST_PAGES'
export const RECEIVE_PAGES = 'RECEIVE_PAGES';


function requestPages() {
  return {
    type: REQUEST_PAGES,
  }
}

function receivePages(pages) {
  return {
    type: RECEIVE_PAGES,
    pages: pages,
    isFetching: false,
    receivedAt: Date.now()
  }
}


function getPages(paginationIndex, paginationLimit) {

  return function (dispatch) {
    dispatch(requestPages())
    return client.fetchPages()
      .then(response =>
        dispatch(receivePages(response.items))
      )

  }
}

export {getPages}

