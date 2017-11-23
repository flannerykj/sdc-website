import {REQUEST_CONFIGS} from '../actions/configs';
import {RECEIVE_CONFIGS} from '../actions/configs';
import {REQUEST_CONFIG} from '../actions/configs';
import {RECEIVE_CONFIG} from '../actions/configs';

const defaultState = {
  configs: {
    sitetitle: 'Smeltzer Digital Agency',
    logoPath: '../media/flannery.png',
  }
};

export function getConfigs(state = defaultState, action ) {
  switch(action.type) {
    case REQUEST_CONFIGS:
      return {...state, isLoading: true}
    case RECEIVE_CONFIGS:
      return {
        configs: action.configs
      }
    default:
      return state
  }
}





