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
  <header className="u-header u-header--bg-transparent u-header--abs-top u-header--white-nav-links-md u-header--show-hide" data-header-fix-moment="500" data-header-fix-effect="slide" header="true">
    <div className="u-header__section">
      <Container logoandnav="true">
      <Navbar className="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
         <a className="navbar-brand u-header__navbar-brand u-header__navbar-brand-center u-header__navbar-brand-collapsed" href="/" aria-label="Everpay">
         <img src={logoWhite} alt="Everpay" width="100" />
          </a>
          <NavbarToggler onClick={toggle} />
          <Collapse className="u-header__navbar-collapse" isOpen={isOpen} navbar="true">
            <Nav className="u-header__navbar-nav" navbar="true">
              <NavItem>
                <NavLink
                  tag={RouterNavLink}
                  to="/"
                  exact
                  ClassName="hs-has-mega-menu u-header__nav-item"
                >
                  Home
                </NavLink>
              </NavItem>
              
              {!isAuthenticated && (
                <NavItem className="u-header__nav-last-item">
                  <Button
                    id="qsLoginBtn"
                    className="btn btn-sm btn-outline-primary transition-3d-hover"
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
                <NavItem className="u-header__nav-last-item">
                  <Button
                    id="qsLoginBtn"
                    className="btn-sm btn-outline-primary transition-3d-hover"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Log in
                  </Button>
                </NavItem>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem className="u-header__nav-last-item">
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