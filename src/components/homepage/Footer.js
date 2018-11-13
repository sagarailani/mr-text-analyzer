import React from 'react';

export default class Footer extends React.Component {
	render() {
		return(
			
		  <footer>
		    <div className="container">
		      <div className="row">
		        <div className="col-sm-4">
		          <div className="copy">
		            Copyright &copy; 2018 Mr.Text Analyzer
		          </div>
		        </div>
		        <div className="col-sm-4 text-center">
		          <div className="social-icon">
		            <a href="">
		              <div className="icon fb">
		                <i className="ion-social-facebook"></i>
		              </div>
		            </a>
		            <a href="">
		              <div className="icon twitter">
		                <i className="ion-social-twitter"></i>
		              </div>
		            </a>
		            <a href="">
		              <div className="icon google">
		                <i className="ion-social-googleplus"></i>
		              </div>
		            </a>            
		          </div>    
		        </div>
		        
		      </div>
		    </div> 
		  </footer>
		  
		);
	}
}