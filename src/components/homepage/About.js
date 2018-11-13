import React from 'react';

export default class About extends React.Component {
	render() {

		return(

			<section className="about" id="about">
			    <div className="container section-wrapper">
			      <h2 className="section-title black">
			        about us
			      </h2>
			      <div className="underline purple"></div>  
			      <div className="row">
			        <div className="col-md-offset-1 col-md-10 col-sm-12">
			          <p className="about-detail">
			            Every year thousands of under-graduates & graduates give various english proficiency tests e.g. TOEFL, GRE, for their further studies. We help these apirants prepare for these tests using Natural Language Processing, that rates their answers based on the metrics of these tests, and provides valuable suggestions so that they can improve their writing.   
			          </p>
			        </div>

			      </div> 

			    </div> 
			  </section> 

		);

	}
}