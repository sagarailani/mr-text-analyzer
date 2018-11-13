import React from 'react';

export default class Note extends React.Component {

	render() {

		return(

		  <section className="note purple">
		    <div className="container section-wrapper text-center">
		      <p className="quote">
		        “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
		      </p> 
		      <div className="quoter">Author</div>
		    </div> 
		  </section> 

		);

	}

}