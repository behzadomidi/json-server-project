import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcAssistant } from "react-icons/fc";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link className="link-light text-decoration-none" to="/">
              Swr Project
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link className="link-light text-decoration-none mx-3" to="/">
              Home
            </Link>
            <Link
              className="link-light text-decoration-none mx-3"
              to="/bestpost"
            >
              BestPost
            </Link>
            <Link
              className="link-light text-decoration-none mx-3"
              to="/lastpost"
            >
              LastPost
            </Link>
          </Nav>
          <Link className="link-light text-decoration-none mx-3" to="/admin">
            <FcAssistant className="fs-2" />
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
