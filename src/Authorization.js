import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'

class Authorization extends React.Component {

  render() {
  return (
    <Container>
  <Row>
    <Col></Col>
    <Col>
    <Form onSubmit = {this.props.onClick}> 
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Login</Form.Label>
      <Form.Control type="text" placeholder="" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
    </Col>
    <Col></Col>
  </Row>
</Container>

  )
}
}

export default Authorization;
