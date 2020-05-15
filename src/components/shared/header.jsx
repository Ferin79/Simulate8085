import React from "react";
import "materialize-css";
import { Navbar, Icon, NavItem } from "react-materialize";

const Header = () => {
  return (
    <Navbar
      className="blue center"
      alignLinks="right"
      brand={
        // eslint-disable-next-line
        <a>Stimulate 8085</a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
    >
      <NavItem>
        <i className="material-icons">share</i>
      </NavItem>
    </Navbar>
  );
};
export default Header;
