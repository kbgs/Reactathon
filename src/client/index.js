import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {Router, browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import reducers from './reducers';
import routes from './router';

const store= createStore(
				reducers, 
				compose(applyMiddleware(thunk)));

render(
      <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
      </Provider>, document.getElementById("app"));
