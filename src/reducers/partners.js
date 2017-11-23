import {REQUEST_PARTNERS} from '../actions/partners';
import {RECEIVE_PARTNERS} from '../actions/partners';
import {REQUEST_PARTNER} from '../actions/partners';
import {RECEIVE_PARTNER} from '../actions/partners';

const defaultState = {
  partners: {
    items: []
  }
};

export function getPartners(state = defaultState, action ) {
  switch(action.type) {
    case REQUEST_PARTNERS:
      return {...state, isLoading: true}
    case RECEIVE_PARTNERS:
      return {
        items: action.partners
      }
    default:
      return state
  }
}





