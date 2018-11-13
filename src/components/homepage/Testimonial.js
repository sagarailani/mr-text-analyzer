import React from 'react';

export default class Testimonial extends React.Component {

	render() {

		return(

		  <section className="testimonial">
		    <div className="container section-wrapper">
		      <div className="section-title">
		        testmonials
		      </div> 
		      <div className="underline white"></div>
		      <div className="owl-carousel testimonial-owl">
		        <div className="item">
		          <p className="testimonial-detail">
		            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		          </p>
		          <div className="test-name">
		            <strong>Author #1</strong> <br/>           
		          </div>
		        </div>
		        <div className="item">
		          <p className="testimonial-detail">
		            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		          </p>
		          <div className="test-name">
		            <strong>Author #2</strong> <br/>           
		          </div>
		        </div>
		        <div className="item">
		          <p className="testimonial-detail">
		            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		          </p>
		          <div className="test-name">
		            <strong>Author #3</strong> <br/>           
		          </div>
		        </div>
		      </div>
		    </div> 
		  </section>

		);

	}

}