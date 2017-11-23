import {REQUEST_SERVICES} from '../actions/services';
import {RECEIVE_SERVICES} from '../actions/services';
import {REQUEST_SERVICE} from '../actions/services';
import {RECEIVE_SERVICE} from '../actions/services';

const defaultState = {
  services: {
    items: []
  }
};

export function getServices(state = defaultState, action ) {
  switch(action.type) {
    case REQUEST_SERVICES:
      return {...state, isLoading: true}
    case RECEIVE_SERVICES:
      return {
        items: action.services
      }
    default:
      return state
  }
}





