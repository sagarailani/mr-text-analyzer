import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Redirect } from 'react-router';
import Homepage from './pages/homepage';
import App from './pages/app';
import Record from './pages/record';
import Results from './pages/results';


const root = document.getElementById('root');



ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Homepage}/>
		<Route path="/">
			<Route path="texteditor" component={App}/>
			<Route path="results" component={Results}/>		
		</Route>
	</Router>,
	root);