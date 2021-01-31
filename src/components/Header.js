import React from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';


export default props =>{
  return(
  <Navbar bg="light">
    <NavbarBrand href="#">
     Profectum
    </NavbarBrand>
    <Navbar.Text>{props.text}</Navbar.Text>
  </Navbar>
  )
}