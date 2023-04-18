import React from "react";
import { Button, Nav } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavigationLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("avg_user_valence");
    if (location.pathname === "/") {
      window.location.href = window.location.href;
    } else {
      navigate("/");
    }
  };

  return (
    <Nav className="mx-auto my-2 my-lg-0 d-flex gap-3">
      <Nav.Link as={NavLink} to="/">
        Начало
      </Nav.Link>
      <Nav.Link as={NavLink} to="/search">
        Добави в историята
      </Nav.Link>
      <NavDropdown title="Статистики" id="collasible-nav-dropdown">
        <NavDropdown.Item as={NavLink} to="/history">
          Вашата История
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown
          className="dropdown-custom"
          title="Топ 10"
          id="collasible-nav-dropdown">
          <NavDropdown.Item
            className="dropdown-item-custom"
            as={NavLink}
            to="/tubefeel-top-ten">
            TubeFeel Топ 10
          </NavDropdown.Item>
          <NavDropdown.Item
            className="dropdown-item-custom"
            as={NavLink}
            to="/my-top-ten">
            Моето Топ 10
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown.Divider />
        <NavDropdown
          className="dropdown-custom"
          title="Артисти"
          id="collasible-nav-dropdown">
          <NavDropdown.Item
            className="dropdown-item-custom"
            as={NavLink}
            to="/my-artists">
            Моите Топ Артисти
          </NavDropdown.Item>
          <NavDropdown.Item
            className="dropdown-item-custom"
            as={NavLink}
            to="/artists">
            TubeFeel Топ Артисти
          </NavDropdown.Item>
          <NavDropdown.Item
            className="dropdown-item-custom"
            as={NavLink}
            to="/my-positive-artists">
            Моите Позитивни Артисти
          </NavDropdown.Item>
          <NavDropdown.Item
            className="dropdown-item-custom"
            as={NavLink}
            to="/positive-artists">
            TubeFeel Позитивни Артисти
          </NavDropdown.Item>
        </NavDropdown>
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
