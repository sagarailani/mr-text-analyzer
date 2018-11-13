import React from 'react';
import Header from '../components/editor/Header';
import Recorder from '../components/editor/Recorder';

export default class Record extends React.Component {

	render() {

		const appStyle = {
			background: '#fff',
			height: '100vh',
		};
		return(
			<div style={appStyle}>
				<Header />
				<Recorder />
			</div>			
		);
	}

}
