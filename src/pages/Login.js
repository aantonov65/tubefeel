import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Button, Form, Alert } from "react-bootstrap";
import { baseURL } from "../api/config";
import axios from "axios";
import "../assets/css/forms.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const passwordFilled = password !== "";
    const emailFilled = email !== "";

    const [wrongEmail, setWrongEmail] = useState("");
    const [wrongPassword, setWrongPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(baseURL + "/login", {
            email: email,
            password: password
        })
            .then((response) => {
                //Login is successful
                if (typeof response.data == "object" && typeof response.data !== "undefined") {
                    let userID = response.data.userID;
                    localStorage.setItem('userID', userID);
                    navigate("/");
                }
                //User input incorrect password
                if (response.data == "Incorrect password") {
                    setWrongPassword(true);
                }
            })
            //User with that email not found
            .catch((error) => {
                if (error.response.status == 404) {
                    setWrongEmail(true);
                }
            })
    };

  return (
    <div className="form-container py-5">
      <Form className="my-5 py-5 pb-4 d-flex flex-column mx-auto bg-white" onSubmit={handleSubmit}>
        <div className="mb-1 mx-auto">
          <img width={55} src={logo} alt="logo" className="me-2" />
          <p className="h4 d-inline">TubeFeel</p>
        </div>
        <Form.Group className="mb-3 px-4 mt-4" controlId="formBasicEmail" onChange={(e) => { setEmail(e.target.value); setWrongEmail(false); }}>
          <Form.Label>Е-мейл</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" isInvalid={wrongEmail} />
          <Form.Control.Feedback type="invalid">
            Системата ни не намери потребител с този Е-мейл.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 px-4" controlId="formBasicPassword" onChange={(e) => { setPassword(e.target.value); setWrongPassword(false); }}>
          <Form.Label>Парола</Form.Label>
          <Form.Control type="password" placeholder="Парола" isInvalid={wrongPassword} />
          <Form.Control.Feedback type="invalid">
            Грешна парола.
          </Form.Control.Feedback>
        </Form.Group>
        <Button className="btn mx-auto mt-4" variant="danger" type="submit">
          Влизане
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
