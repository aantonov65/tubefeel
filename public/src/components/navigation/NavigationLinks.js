import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavigationLinks = () => {
  return (
    <Nav className="mx-auto my-2 my-lg-0 d-flex gap-4">
      <Nav.Link href="/">Начало</Nav.Link>
      <Nav.Link href="/search">Търси песни</Nav.Link>
      <Nav.Link href="/songs-numbers">Песните в цифри</Nav.Link>
      <NavDropdown title="Статистики" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/genres">Жанрове</NavDropdown.Item>
        <NavDropdown.Item href="/artists">Артисти</NavDropdown.Item>
        <NavDropdown.Item href="/last-listened">
          Последно слушани
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/tubefeel-top-ten">
          TubeFeel Топ 10
        </NavDropdown.Item>
        <NavDropdown.Item href="/my-top-ten">Моето Топ 10</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Настроение" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/today-feeling">Днес</NavDropdown.Item>
        <NavDropdown.Item href="/week-feeling">Тази седмица</NavDropdown.Item>
        <NavDropdown.Item href="/month-feeling">Този месец</NavDropdown.Item>
        <NavDropdown.Item href="/year-feeling">Тази година</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact">Контакти</Nav.Link>
    </Nav>
  );
};

export default NavigationLinks;
