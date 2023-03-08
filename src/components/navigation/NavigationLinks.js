import React from "react";
import { Button, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavigationLinks = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userID");
    navigate("/");
  };

  return (
    <Nav className="mx-auto my-2 my-lg-0 d-flex gap-3">
      <Nav.Link as={NavLink} to="/">
        Начало
      </Nav.Link>
      <Nav.Link as={NavLink} to="/search">
        Добави в историята
      </Nav.Link>
      {/*<Nav.Link as={NavLink} to="/songs-numbers">
                Песните в цифри
            </Nav.Link>*/}
      <NavDropdown title="Статистики" id="collasible-nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/artists">
          Артисти
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/history">
          Вашата История
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={NavLink} to="/tubefeel-top-ten">
          TubeFeel Топ 10
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/my-top-ten">
          Моето Топ 10
        </NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Настроение" id="collasible-nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/today-feeling">
          Днес
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/week-feeling">
          Тази седмица
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/month-feeling">
          Този месец
        </NavDropdown.Item>
        <NavDropdown.Item as={NavLink} to="/year-feeling">
          Тази година
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={NavLink} to="/contact">
        Контакти
      </Nav.Link>
      <Nav>
        <Button
          className="py-2 px-3 px-xxl-5"
          variant="danger"
          onClick={handleLogout}>
          Излизане
        </Button>
      </Nav>
    </Nav>
  );
};

export default NavigationLinks;
