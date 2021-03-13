import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Django Ecommerce</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">All Categories</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#features">
          <i class="fas fa-user"></i> Login
        </Nav.Link>
        <Nav.Link href="#pricing">
          <i class="fas fa-shopping-cart"></i> Cart
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
