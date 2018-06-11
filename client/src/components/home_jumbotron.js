import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const Example = (props) => {

	// let styles= {
	// 	backgroundColor: '#2B3A42'
	// };

  return (
    <div>
      <Jumbotron fluid>
			<Container fluid>
        <p className="lead">Twitchthroe is a web application built to streamline your Twitch viewing experience.</p>
        <hr className="my-2" />
        <p>It utilizes the excellent Twitch API to bring the content right to you without the clutter of Twitch's main site. Simply add channels to your list of streams to track and go! </p>
        <p className="lead">
          <Link to="/register"> <Button color="primary">Register now!</Button>
					</Link>
        </p>
				</Container>
      </Jumbotron>
    </div>
  );
};

export default Example;
