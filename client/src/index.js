import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import NavigationBar from './components/nav_bar';
import RegisterForm from './components/register_form';
import LoginForm from './components/login_form';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div>
        <Route path="/" component={NavigationBar} /> 
    		<Switch>
    			<Route path="/register" component={RegisterForm} />
          <Route path="/login" component={LoginForm} />
      	</Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));