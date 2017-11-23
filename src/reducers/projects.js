import {REQUEST_PROJECTS} from '../actions/projects';
import {RECEIVE_PROJECTS} from '../actions/projects';
import {REQUEST_PROJECT} from '../actions/projects';
import {RECEIVE_PROJECT} from '../actions/projects';

const defaultState = {
  projects: {
    items: []
  }
};

export function getProjects(state = defaultState, action ) {
  switch(action.type) {
    case REQUEST_PROJECTS:
      return {...state, isLoading: true}
    case RECEIVE_PROJECTS:
      return {
        items: action.projects
      }
    default:
      return state
  }
}





