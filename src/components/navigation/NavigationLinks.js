import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <Nav className="mx-auto my-2 my-lg-0 d-flex gap-4">
      <Nav.Link as={Link} to="/">
        Начало
      </Nav.Link>
      <Nav.Link as={Link} to="/search">
        Добави в историята
      </Nav.Link>
      <Nav.Link as={Link} to="/songs-numbers">
        Песните в цифри
      </Nav.Link>
      <NavDropdown title="Статистики" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/artists">
          Артисти
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/last-listened">
          Последно слушани
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to="/tubefeel-top-ten">
          TubeFeel Топ 10
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/my-top-ten">
          Моето Топ 10
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Настроение" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to="/today-feeling">
          Днес
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/week-feeling">
          Тази седмица
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/month-feeling">
          Този месец
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/year-feeling">
          Тази година
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} to="/contact">
        Контакти
      </Nav.Link>
    </Nav>
  );
};

export default NavigationLinks;
