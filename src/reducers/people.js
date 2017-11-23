import {REQUEST_PEOPLE} from '../actions/people';
import {RECEIVE_PEOPLE} from '../actions/people';
import {REQUEST_CONFIG} from '../actions/people';
import {RECEIVE_CONFIG} from '../actions/people';

const defaultState = {
  people: {
    items: []
  }
};

export function getPeople(state = defaultState, action ) {
  switch(action.type) {
    case REQUEST_PEOPLE:
      return {...state, isLoading: true}
    case RECEIVE_PEOPLE:
      return {
        items: action.people
      }
    default:
      return state
  }
}





