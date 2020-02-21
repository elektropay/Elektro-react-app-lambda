import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logo-white.png";

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  return (
  
  <header className="u-header u-header--bg-transparent u-header--abs-top u-header--white-nav-links-md u-header--show-hide" data-header-fix-moment="500" data-header-fix-effect="slide" header>
    <div className="u-header__section">
      <Container logoAndNav>
      <Navbar className="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
          <NavbarBrand className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-default u-header__navbar-brand-text-white" />
          <img className="" src={logoWhite} alt="Everpay" width="110" />
          <NavbarBrand className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-collapsed" />
          <img className="" src={logo} alt="Everpay" width="110" />
          <NavbarBrand className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-on-scroll" />
          <img className="" src={logo} alt="Everpay" width="110" />
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} className="collapse navbar-collapse u-header__navbar-collapse" navBar>
            <Nav className="navbar-nav u-header__navbar-nav" navbar>
              <NavItem className="hs-has-mega-menu u-header__nav-item"
                  data-event="hover"
                  data-animation-in="slideInUp"
                  data-animation-out="fadeOut"
                  data-position="left">
                <NavLink
                  tag={RouterNavLink}
                  to="#"
                  id="homeMegaMenu"
                  className="nav-link u-header__nav-link u-header__nav-link-toggle"
                  aria-haspopup="true" 
                  aria-expanded="false"
                  exact
                  activeClassName="router-link-exact-active"
                >
                  Home
                </NavLink>
                <div className="hs-mega-menu w-100 u-header__sub-menu" aria-labelledby="homeMegaMenu">
                  <div className="row no-gutters">
                  </div>
                  </div>
              </NavItem>
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem className="u-header__nav-last-item">
                  <Button
                    id="qsLoginBtn"
                    className="btn btn-white text-primary transition-3d-hover"
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem className="u-header__nav-last-item">
                  <Button
                    id="qsLoginBtn"
                    className="btn btn-white text-primary transition-3d-hover"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="user" className="mr-3" />
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="power-off" className="mr-3" />
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
       </Navbar>
  </Container>
 </div>
 </header>
  );
};

export default NavBar;
