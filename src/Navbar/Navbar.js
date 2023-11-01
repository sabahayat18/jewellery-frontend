import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom"
import img from "../../src/Components/ComponentPIC/brand_logo1.png";
import SearchIcon from '@mui/icons-material/Search';



function Navbarc() {
  return (
    <>
      <Navbar expand="lg" className="body">
        <Container>
          <Navbar.Brand href="/home" >
            <img src={img} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>

              <NavDropdown title="Collection" className="collection">
                <NavDropdown.Item href="/Diamond">Diamond </NavDropdown.Item>
                <NavDropdown.Item href="/Gold">Gold</NavDropdown.Item>
                <NavDropdown.Item href="/Silver">Silver</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="About">About</Nav.Link>
              <Nav.Link href="Contact">Contact</Nav.Link>
            </Nav>
            <Stack direction="row" spacing={2}>
              <Link to='/Login'> <Avatar src="/broken-image.jpg" /></Link>
            </Stack>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Navbarc;


