import { NavLink, useLocation } from "react-router-dom";

function HeaderBreadcrumb(props) {
  const location = useLocation();
  let currentLink = location.pathname;

  return (
    <div className="breadcrumbs shadow-sm m-0 h5 p-2 text-center">
      Вие се намирате в: <NavLink to={"/"}>Начало</NavLink> /
      <NavLink to={currentLink}>{props.page}</NavLink>
    </div>
  );
}

export default HeaderBreadcrumb;
