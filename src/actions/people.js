import {client} from '../ContentfulClient';

export const REQUEST_PEOPLE = 'REQUEST_PEOPLE'
export const RECEIVE_PEOPLE = 'RECEIVE_PEOPLE';


function requestPeople() {
  return {
    type: REQUEST_PEOPLE,
  }
}

function receivePeople(people) {
  return {
    type: RECEIVE_PEOPLE,
    people: people,
    isFetching: false,
    receivedAt: Date.now()
  }
}


function getPeople(paginationIndex, paginationLimit) {
  return function (dispatch) {
    dispatch(requestPeople())
    return client.fetchPeople()
      .then((response) => {
        dispatch(receivePeople(response.items))
      });

  }
}


export {getPeople}
