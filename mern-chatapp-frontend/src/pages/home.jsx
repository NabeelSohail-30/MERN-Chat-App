import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6} className="d-flex justify-content-center mt-5">
          <div>
            <h1>Home Page</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
              voluptatem quos quas quidem nesciunt. Quisquam, quae. Quisquam
              voluptas, quod, quia, voluptates quae voluptatibus quibusdam
              voluptatem quos quas quidem nesciunt. Quisquam, quae.
            </p>
          </div>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <Col className="mt-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Chat</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <LinkContainer to={"/chat"}>
                <Button variant="primary">
                  Click Here{" "}
                  <i className="fas fa-comments home-message-icon"></i>
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>About</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <LinkContainer to={"/chat"}>
                <Button variant="primary">Click Here</Button>
              </LinkContainer>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <LinkContainer to={"/chat"}>
                <Button variant="primary">Click Here</Button>
              </LinkContainer>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <LinkContainer to={"/chat"}>
                <Button variant="primary">Click Here</Button>
              </LinkContainer>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Signup</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <LinkContainer to={"/chat"}>
                <Button variant="primary">Click Here</Button>
              </LinkContainer>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default home;
