import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../api/config";
import axios from "axios";
import "../assets/css/forms.css";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailUsed, setEmailUsed] = useState(false);

    const passwordsMatch = password === confirmPassword && password !== "";
    const emailFilled = email !== "";

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(baseURL + "/register", {
            email: email,
            password: confirmPassword
        })
            .then((response) => {
                if (response.status == 201) {
                    navigate("/login")
                }
            })
        .catch((error) => {
            if (error.response.data === "Email already exists") {
                setEmailUsed(true);
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
                <Form.Group className="mb-3 px-4 mt-4" controlId="formBasicEmail">
                    <Form.Label>Е-мейл</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => { setEmail(e.target.value); setEmailUsed(false); }} isInvalid={emailUsed} />
                    <Form.Control.Feedback type="invalid">
                        Този Е-мейл е зает. Моля използвайте друг за своята регистрация.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3 px-4" controlId="formBasicPassword">
                    <Form.Label>Парола</Form.Label>
                    <Form.Control type="password" placeholder="Парола" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 px-4" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Потвърждаване на парола" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>

                <Button className="btn mx-auto mt-4" variant="danger" type="submit" disabled={!passwordsMatch || !emailFilled}>
                    Регистриране
                </Button>
                <p className="mt-3 mb-0 mx-auto">
                    Вече имате профил?
                    <a
                        className="ms-1 text-danger text-decoration-none cursor-pointer"
                        href="/login">
                        Влизане
                    </a>
                </p>
            </Form>
        </div>
    );
};

export default Register;
