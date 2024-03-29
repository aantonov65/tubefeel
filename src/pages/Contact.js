import React from "react";
import { Button, Form } from "react-bootstrap";
import Header from "../components/Header";
import "../assets/css/contact.css";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";
import HeaderBreadcrumb from "../components/HeaderBreadcrumb";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <>
      <Navigation />
      <div className="contact">
        <Header
          title="Свържете се с нас!"
          desc="Ние ще отговорим възможно най-бързо!"
          breadcrumb={<HeaderBreadcrumb page="Контакти" />}
        />
        <motion.Form
          className="contact my-3 pb-4 d-flex flex-column mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}>
          <Form.Group className="mb-3 px-4 mt-2" controlId="contact-form-email">
            <Form.Label>Е-мейл</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
            />
          </Form.Group>
          <Form.Group className="mb-3 px-4" controlId="contact-form-name">
            <Form.Label>Име</Form.Label>
            <Form.Control type="text" placeholder="Вашето име" name="name" />
          </Form.Group>
          <Form.Group className="mb-3 px-4" controlId="contact-form-message">
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
        </motion.Form>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
