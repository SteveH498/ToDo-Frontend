import React from 'react';
import ReactDOM from 'react-dom';

import App from 'grommet/components/App';
import LoginComponent from './components/LoginComponent';
import NoMatchComponent from './components/NoMatchComponent';

import MessageComponent from './components/MessageComponent';

// include the SASS import
import 'grommet/scss/vanilla/index';

import { BrowserRouter, Switch, Route } from 'react-router-dom'


class Main extends React.Component{
	render() {
		return <BrowserRouter>
				<div>
					<Switch >
					  <Route exact path="/" component={LoginComponent}/>
					  <Route exact path="/messages" component={MessageComponent}/>
					  <Route component={NoMatchComponent}/>
					</Switch>
					<App/>
				</div>
			  </BrowserRouter>;
	}		
}


ReactDOM.render(
  <Main />,
  document.getElementById('app')
);