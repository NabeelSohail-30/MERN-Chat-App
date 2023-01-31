import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container className="w-50 p-5 pt-2 mt-5">
      <Row className="mt-3">
        <Col>
          <h1 className="text-center">Login</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-2">
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form.Group>

            <Form.Group className="mt-3 d-flex justify-content-center">
              <div>
                <Link to={"/signup"}> Create Your Account</Link>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
