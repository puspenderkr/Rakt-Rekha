import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { firebaseApp } from '../../firebase';
import { NavLink
} from "react-router-dom";

export default function Navbars({stage}) {
  return (
    <div>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand to="/home">Blood+</Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/">
          <Nav.Item> 
          <NavLink to="/home">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
          <NavLink to="/">Sign Up</NavLink> 
          </Nav.Item>
            {stage === "loggedIn" && <Nav.Link style={{color: "white"}} href="#" onClick={() => {firebaseApp.auth().signOut()}}>Logout</Nav.Link>}
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
