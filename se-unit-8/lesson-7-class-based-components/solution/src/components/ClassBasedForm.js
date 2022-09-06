import React from 'react'
import {
  Form, FormGroup, Input,
  Label, Col, Button,
} from 'reactstrap'

export default class ClassBasedForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Form onSubmit={ this.handleSubmit }>
        <h1>Class-Based Form</h1>
        <FormGroup row>
          <Label for="exampleEmail" sm={ 2 }>Email</Label>
          <Col sm={ 8 }>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="email"
              value={ this.state.email }
              onChange={ (event) => this.setState({ email: event.target.value }) }
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={ 2 }>Password</Label>
          <Col sm={ 8 }>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password"
              value={ this.state.password }
              onChange={ (event) => this.setState({ password: event.target.value })}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={ { size: 10, offset: 8 } }>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
};
