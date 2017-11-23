import {client} from '../ContentfulClient';

export const REQUEST_CONFIGS = 'REQUEST_CONFIGS'
export const RECEIVE_CONFIGS = 'RECEIVE_CONFIGS';


function requestConfigs() {
  return {
    type: REQUEST_CONFIGS,
  }
}

function receiveConfigs(configs) {
  return {
    type: RECEIVE_CONFIGS,
    configs: configs,
    isFetching: false,
    receivedAt: Date.now()
  }
}


function getConfigs(paginationIndex, paginationLimit) {
  return function (dispatch) {
    dispatch(requestConfigs())
    return client.fetchConfigs()
      .then((response) => {
        var items = {}
        response.items.map((item, i) => {
          items[item.fields.label] = item.fields.value
        })
        dispatch(receiveConfigs(items))
      });

  }
}


export {getConfigs}

