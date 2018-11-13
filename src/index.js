import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import Homepage from './pages/homepage';
import App from './pages/app';
import Record from './pages/record';

const root = document.getElementById('root');



ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={Homepage}/>
		<Route path="/">
			<Route path="texteditor" component={App}/>
			<Route path="record" component={Record}/>
		</Route>
	</Router>,
	root);