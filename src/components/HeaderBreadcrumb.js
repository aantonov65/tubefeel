import { NavLink, useLocation } from "react-router-dom";

function HeaderBreadcrumb(props) {
  const location = useLocation();
  let currentLink = location.pathname;

  return (
    <div className="header-breadcrumb shadow-sm m-0 h5 p-2 mx-auto text-center">
      Вие се намирате в: <NavLink to={"/"}>Начало</NavLink> /
      <NavLink to={currentLink}>{props.page}</NavLink>
    </div>
  );
}

export default HeaderBreadcrumb;
