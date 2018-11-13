import React from 'react';
import Header from '../components/homepage/Header';
import Footer from '../components/homepage/Footer';
import About from '../components/homepage/About';
import Note from '../components/homepage/Note';
import Service from '../components/homepage/Service';
import Testimonial from '../components/homepage/Testimonial';
import Contact from '../components/homepage/Contact';

export default class Homepage extends React.Component {

	render() {
		return(
			<div>
				<Header />				
				<About />
				<Note />
				<Service />
				<Testimonial />
				<Contact />
				<Footer />
			</div>

		);


	}

}