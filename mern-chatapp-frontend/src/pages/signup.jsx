import React, { useState } from "react";
import "./signup.css";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  async function uploadImage() {
    setUploadingImg(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "t6thko0g");
    await axios
      .post(`https://api.cloudinary.com/v1_1/drfwbdaai/image/upload`, formData)
      .then((response) => {
        setUploadingImg(false);
        return response.data.secure_url;
      })
      .catch((error) => {
        console.log(error.message);
        setUploadingImg(false);
      });
  }

  async function handleSignup(e) {
    e.preventDefault();
    console.log("Signup");
    if (!image) return alert("please upload your profile pic");
    const url = await uploadImage();
    console.log(url);
  }

  function ValidateImg(e) {
    const file = e.target.files[0];
    if (file.size >= 1048576) {
      return alert("File size is too big!");
    } else {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  }

  return (
    <Container className="w-50 p-5 pt-2 mt-5">
      <Row className="mt-3">
        <Col>
          <h1 className="text-center">Create Account</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center m-3">
          <div className="signup-profile-pic-container">
            <img
              src={
                imagePreview ||
                "https://cdn3.vectorstock.com/i/1000x1000/38/17/chat-bot-icon-outline-robot-sign-in-blue-circle-vector-18943817.jpg"
              }
              alt=""
              className="signup-profile-pic"
              id="signup-profile-pic"
            />
            <label htmlFor="image-upload" className="img-upload-lbl">
              <i className="fas fa-plus-circle add-picture-icon"></i>
            </label>
            <input
              id="image-upload"
              type="file"
              hidden
              accept="image/png, image/jpeg"
              onChange={ValidateImg}
            />
          </div>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mt-2">
        <Col md={6}>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>

            <Form.Group className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Create Account
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
