import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Row } from 'reactstrap';

export default class RegisterForm extends React.Component {
	constructor(props) {
		super(props);

		this.handleSubmit.bind(this);
	}
handleSubmit(event) {
	event.preventDefault();
}
	
  render() {
    return (
			<Container>
			<Row className="justify-content-center">	
			<Col xs="4">
      <Form>
        <FormGroup>
          <Label for="exampleEmail"></Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword"></Label>
          <Input type="password" name="password" id="Password" placeholder="Password" />
        </FormGroup>
				<FormGroup>
          <Label for="examplePassword"></Label>
          <Input type="password" name="password" id="repeatPassword" placeholder="Confirm password" />
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
			</Col>
			</Row>
			</Container>
    );
  }
}