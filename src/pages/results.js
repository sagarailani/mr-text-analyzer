import React from 'react';
import Header from '../components/editor/Header';
import Results from '../components/editor/Results';

export default class ResultsPage extends React.Component {

	render() {

		const appStyle = {
			background: '#fff',
			height: '100vh',
		};

		return(
			<div style={appStyle}>
				<Header />
				<Results />
			</div>			
		);

	}

}
