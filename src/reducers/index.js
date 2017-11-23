import {combineReducers} from 'redux';
import {getPages} from './pages';
import { getPosts} from './posts';
import { getConfigs} from './configs';
import { getPeople} from './people';
import {getPartners} from './partners';
import {getProjects} from './projects';
import {getServices} from './services';

const rootReducer = combineReducers({
  pages: getPages,
  posts: getPosts,
  configs: getConfigs,
  people: getPeople,
  partners: getPartners,
  projects: getProjects,
  services: getServices
});

export default rootReducer;
