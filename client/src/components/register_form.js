import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Col, Row } from 'reactstrap';

export default class RegisterForm extends React.Component {
  render() {
    return (
			<Container>
			<Row>	
			<Col size="lg">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="Password" placeholder="password placeholder" />
        </FormGroup>
				<FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="repeatPassword" placeholder="password placeholder" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
			</Col>
			</Row>
			</Container>
    );
  }
}