import {REQUEST_PAGES} from '../actions/pages';
import {RECEIVE_PAGES} from '../actions/pages';

const defaultState = {
  items: [],
  isLoading: false,
  didError: false
  };

export function getPages(state = defaultState, action ) {
  switch(action.type) {
    case REQUEST_PAGES:
      return {...state, isLoading: true}
    case RECEIVE_PAGES:
        return {
          items: action.pages,
          isLoading: false,
          isError: false
        }
    default:
      return state
  }
}



