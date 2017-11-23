import {client} from '../ContentfulClient';

export const REQUEST_PARTNERS = 'REQUEST_PARTNERS'
export const RECEIVE_PARTNERS = 'RECEIVE_PARTNERS';


function requestPartners() {
  return {
    type: REQUEST_PARTNERS,
  }
}

function receivePartners(partners) {
  return {
    type: RECEIVE_PARTNERS,
    partners: partners,
    isFetching: false,
    receivedAt: Date.now()
  }
}


function getPartners(paginationIndex, paginationLimit) {
  return function (dispatch) {
    dispatch(requestPartners())
    return client.fetchPartners()
      .then((response) => {
        dispatch(receivePartners(response.items))
      });

  }
}


export {getPartners}

