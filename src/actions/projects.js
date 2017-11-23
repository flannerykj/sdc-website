import {client} from '../ContentfulClient';

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS'
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';


function requestProjects() {
  return {
    type: REQUEST_PROJECTS,
  }
}

function receiveProjects(projects) {
  return {
    type: RECEIVE_PROJECTS,
    projects: projects,
    isFetching: false,
    receivedAt: Date.now()
  }
}


function getProjects(paginationIndex, paginationLimit) {
  return function (dispatch) {
    dispatch(requestProjects())
    return client.fetchProjects()
      .then((response) => {
        dispatch(receiveProjects(response.items))
      });

  }
}


export {getProjects}

