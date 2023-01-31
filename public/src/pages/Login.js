import React from "react";
import logo from "../assets/images/logo.png";
import { Button, Form } from "react-bootstrap";
import "../assets/css/forms.css";

const Login = () => {
  return (
    <div className="form-container py-5">
      <Form className="my-5 py-5 pb-4 d-flex flex-column mx-auto bg-white">
        <div className="mb-1 mx-auto">
          <img width={55} src={logo} alt="logo" className="me-2" />
          <p className="h4 d-inline">TubeFeel</p>
        </div>
        <Form.Group className="mb-3 px-4 mt-4" controlId="formBasicEmail">
          <Form.Label>Е-мейл</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3 px-4" controlId="formBasicPassword">
          <Form.Label>Парола</Form.Label>
          <Form.Control type="password" placeholder="Парола" />
        </Form.Group>
        <Button className="btn mx-auto mt-4" variant="danger" type="submit">
          Влез
        </Button>
        <p className="mt-3 mb-0 mx-auto">
          Нямате профил?
          <a
            className="ms-1 text-danger text-decoration-none cursor-pointer"
            href="/register">
            Регистриране
          </a>
        </p>
      </Form>
    </div>
  );
};

export default Login;
