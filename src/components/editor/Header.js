import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	render() {
		const headerStyle = {			
			background: "#5c008d"
		};

		const nameStyle = {
			border: 0,
			margin: "0 0 10px 0",
		}

		return(
			<header style={headerStyle}>
				<nav className="navbar navbar-default" id="navigation-bar">
			      <div className="container">			      
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <a className="navbar-brand" style={nameStyle} href="#">Mr.Text Analyzer</a>
			        </div>			      
		          	<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			          <ul className="nav navbar-nav navbar-right">			            
			            <li><Link to="texteditor">TEXT EDITOR</Link></li>			            
			            <li><Link to="profile">PROFILE</Link></li>
			            <li><Link to="signout">SIGN OUT</Link></li>
			          </ul> 
			        </div>
			       </div>
			    </nav>
			</header>
		);
	}
}