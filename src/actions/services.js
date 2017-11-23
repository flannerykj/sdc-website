import {client} from '../ContentfulClient';

export const REQUEST_SERVICES = 'REQUEST_SERVICES'
export const RECEIVE_SERVICES = 'RECEIVE_SERVICES';


function requestServices() {
  return {
    type: REQUEST_SERVICES,
  }
}

function receiveServices(services) {
  return {
    type: RECEIVE_SERVICES,
    services: services,
    isFetching: false,
    receivedAt: Date.now()
  }
}


function getServices(paginationIndex, paginationLimit) {
  return function (dispatch) {
    dispatch(requestServices())
    return client.fetchServices()
      .then((response) => {
        dispatch(receiveServices(response.items))
      });

  }
}


export {getServices}

