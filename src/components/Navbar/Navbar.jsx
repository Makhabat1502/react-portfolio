import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./navbar.scss";
import menuIcon from "../../images/menu.svg";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const showMenu = () => {
    setMenuActive(!menuActive);
  };

  const menuItems = [
    {
      id: 0,
      menu: "home",
      link: "/",
    },
    {
      id: 1,
      menu: "about",
      link: "about",
    },
    {
      id: 2,
      menu: "blog",
      link: "blog",
    },
    {
      id: 3,
      menu: "contact",
      link: "contact",
    },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <Link to="/" className="navbar__logo">
          Logo
        </Link>
        <button onClick={showMenu} className="navbar__toggle">
          <img src={menuIcon} alt="menu" />
        </button>
        <div
          className={
            menuActive ? " navbar__menu navbar__menu--show" : "navbar__menu"
          }
        >
          {menuItems.map((menuItem) => {
            return (
              <NavLink
                onClick={showMenu}
                to={menuItem.link}
                className="navbar__menu-link"
                key={menuItem.id}
              >
                {menuItem.menu}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
