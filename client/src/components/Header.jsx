import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <LinkContainer to="/">
        <Navbar.Brand href="#home">Django Ecommerce</Navbar.Brand>
      </LinkContainer>
      <Nav className="mr-auto">
        <Nav.Link href="#">All Categories</Nav.Link>
      </Nav>
      <Nav>
        <LinkContainer to="/login">
          <Nav.Link href="#features">
            <i class="fas fa-user"></i> Login
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/cart">
          <Nav.Link href="#pricing">
            <i class="fas fa-shopping-cart"></i> Cart
          </Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
