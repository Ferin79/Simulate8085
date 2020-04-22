import React from "react";
import "materialize-css";
import { Navbar, Icon, NavItem } from "react-materialize";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  return (
    <Navbar
      className="black"
      alignLinks="right"
      brand={
        // eslint-disable-next-line
        <a>Stimulate 8085</a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
    >
      <NavItem>
        <SocialIcon url="https://www.github.com/ferin79" />
      </NavItem>
      <NavItem>
        <SocialIcon url="https://www.instagram.com/ferin_patel_79" />
      </NavItem>
    </Navbar>
  );
};
export default Header;
