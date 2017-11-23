
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import configureStore from './store/configureStore.js';
import registerServiceWorker from './registerServiceWorker';

import Footer from './components/Footer';
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';

import PagesContainer from './containers/PagesContainer';
import Navbar from './components/Navbar';

import { getPages } from './actions/pages';
import { getPosts } from './actions/posts';
import { getConfigs} from './actions/configs';
import { getPeople} from './actions/people';
import { getPartners} from './actions/partners';
import { getProjects} from './actions/projects';
import { getServices} from './actions/services';

const initialstate = {
  posts: {
    items: [],
    isLoading: false
  },
  pages: {
    items: [],
    isLoading: false
  },
  configs: {
    configs: {
    }
  }
}

const store = applyMiddleware(thunk,logger)(createStore)(rootReducer,initialstate);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path={process.env.PUBLIC_URL}>
        <div>
        <div className='my-content'>
          <Navbar/>
        <section className='section'>
          <Switch>
              <Route path={process.env.PUBLIC_URL + '/'} component={PagesContainer}/>
          </Switch>
        </section>
        <div className='push'></div>
      </div>
      <Footer/>
    </div>
      </Route>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
setTimeout(function(){

  store.dispatch( getConfigs() );
  store.dispatch( getPages() );
  store.dispatch( getPosts() );
  store.dispatch( getPeople() );
  store.dispatch( getPartners() );
  store.dispatch( getProjects() );
  store.dispatch( getServices() );
});



