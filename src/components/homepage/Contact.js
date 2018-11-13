import React from 'react';

export default class Contact extends React.Component {

	render() {

		return(

		  <section className="contact section-wrapper" id="contact">
		    <div className="container">
		      <div className="row">
		              <div className="col-md-offset-1 col-md-4 contact-item col-sm-6 col-xs-12 col-centered">
		                  <i className="ion-ios-telephone"></i>
		                  <h3>Phone</h3>
		                  <p className="contact">
		                      Local: 800-000-0000<br />
		                      Mobile: 900-000-0000
		                  </p>
		              </div>
		              <div className="col-md-offset-2 col-md-4 contact-item col-sm-6 col-xs-12 col-centered">
		                  <i className="ion-ios-email"></i>
		                  <h3>Email Address</h3>
		                  <p className="contact">
		                      <a href="mailto:mrtextanalyzer@gmail.com">mrtextanalyzer@gmail.com</a> <br />                     
		                  </p>
		              </div>


		          </div> 
		          <form className="row form">
		                <h3>Leave A Message</h3>
		                <div className="col-sm-4 col-xs-12 form-group">
		                    <label className="sr-only">Name</label>
		                    <input name="name" className="form-control" type="text" placeholder="First Name" />
		                </div>
		                <div className="col-sm-4 col-xs-12 form-group">
		                    <label className="sr-only">Email</label>
		                    <input name="email" className="form-control" type="email" placeholder="Email address" />
		                </div>
		                <div className="col-sm-4 col-xs-12 form-group">
		                    <label className="sr-only">Website</label>
		                    <input name="website" className="form-control" type="text" placeholder="Your website" />
		                </div>
		                <div className="row">
		                    <div className="col-md-12 col-xs-12 form-group">
		                        <label className="sr-only">Message</label>
		                        <textarea className="message form-control" placeholder="Write message"></textarea>
		                    </div> 
		                    <input className="btn btn-sub" type="submit" value="Send Message" />
		                </div>
		            </form> 
		    </div> 
		  </section> 

		);

	}

}