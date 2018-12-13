import React from 'react';
import './tabslayout.css';

export default class Results extends React.Component {

	constructor(props) {
		super(props);		
		this.state = {
			data: {},
		}
		this.getModifications = Object.keys(this.props.data.modifications).map((key) => {
			return <p><span id="wrong">{key}</span> =>
			<span id="correct">{this.props.data.modifications[key]}</span></p>
		});
		// this.getModifications = () => {
		// 	for(let key in this.props.data.modifications) {
		// 		let value = this.props.data.modifications[key];				
		// 		<h2>{this.props.data.modifications[key]}</h2>
		// 	}
		// };
	}



	render() {

		return(
			<div id="special">
			<div id="container">		
			    <input id="tab-1" type="radio" name="tab-group" checked={this.props.checked} onChange={this.checkboxHandler}/>
			    <label for="tab-1">Spell Check</label>	    
			    <input id="tab-2" type="radio" name="tab-group" />
			    <label for="tab-2">Vocabulary</label>	    
			    <input id="tab-3" type="radio" name="tab-group" />
			    <label for="tab-3">Grammar Check</label>
			    
			    <div id="content">
			    
			        <div id="content-1">			    		        			    	
			    		{this.getModifications}
			        </div>
			    
			        <div id="content-2">
			            <h1>Vocabulary Enhancement</h1>        
			        </div>
			    
			        <div id="content-3">
			        	<h1>Grammar Analysis</h1>        
			        </div>
			    </div>
			</div>
			</div>
		);		
	}

}
