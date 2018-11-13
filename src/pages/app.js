import React from 'react';
import Header from '../components/editor/Header';
import TextEditor from '../components/editor/TextEditor';

export default class App extends React.Component {

	render() {

		const appStyle = {
			background: '#fff',
			height: '100vh',
		};

		return(
			<div style={appStyle}>
				<Header />
				<TextEditor />
			</div>			
		);

	}

}
