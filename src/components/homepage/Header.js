import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	render() {
		return(
			  <section className="header" id="header">
			    
			    <nav className="navbar navbar-default" id="navigation-bar">
			      <div className="container">			      
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <a className="navbar-brand" href="index.html">Mr.Text Analyzer</a>
			        </div>

			        
			          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			          <ul className="nav navbar-nav navbar-right">
			            <li><a href="#header">home</a></li>
			            <li><a href="#about">about us</a></li>
			            <li><a href="#service">how it works</a></li>          
			            <li><a href="#contact">contact</a></li>
			            <li><Link to="texteditor">log in</Link></li>
			          </ul> 
			          </div>
			        </div>
			    </nav>
			    <div className="container">
			      <div className="header-table">
			        <div className="header-wrapper">
			          <h1 className="header-title">
			            helping you prepare better
			          </h1>
			        </div>
			      </div>
			    </div> 
			  </section>
		);
	}
}