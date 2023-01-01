import React from "react";
import "./NavbarComponent.css";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { Brand } from "../../assets/index";

function NavbarComponent() {
  const navlink = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "About Us",
      link: "#aboutus",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
    },
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-nav">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={Brand} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              {navlink.map((link) => (
                <Nav.Link href={link.link} key={link.name} className="nav-link">
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
            <Button className="ms-auto btn-nav">Contract</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
