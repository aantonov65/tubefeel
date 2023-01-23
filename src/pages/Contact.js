import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s65ogcf",
        "template_idj5blm",
        form.current,
        "DvSrvOY6hV8vRvBYj"
      )
      .then(
        (result) => {
          //Make a pop-up
          console.log(result.text + "success");
          e.target.reset();
          alert("Вашето съобщение е изпратено!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Form
      ref={form}
      onSubmit={sendEmail}
      className="contact my-5 pb-4 d-flex flex-column mx-auto overflow-hidden"
    >
      <Header title="Свържете се с нас!" />
      <Form.Group
        className="mb-3 px-4 mt-4"
        controlId="contactForm.ControlInput1"
      >
        <Form.Label>Е-мейл</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="user_email"
        />
      </Form.Group>
      <Form.Group className="mb-3 px-4" controlId="contactForm.ControlInput2">
        <Form.Label>Име</Form.Label>
        <Form.Control type="text" placeholder="Вашето име" name="user_name" />
      </Form.Group>
      <Form.Group
        className="mb-3 px-4"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Label>Съобщение</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="message"
          placeholder="Напишете вашето съобщение тук..."
        />
      </Form.Group>
      <Button className="btn mx-auto mt-4" variant="danger" type="submit">
        Изпрати
      </Button>
    </Form>
  );
};

export default ContactForm;
