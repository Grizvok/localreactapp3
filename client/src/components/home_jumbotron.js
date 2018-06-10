import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'react-bootstrap'; 
import { Grid } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';


class HomeJumbotron extends React.Component {
	render() {
	 return (
		<div className="jumbotron">
			<h1 className="display-4">Welcome to Twitchthroe</h1>
			<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			<hr className="my-4" />
			<p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
			</p>
		</div>
			);
	}
}

export default HomeJumbotron;
