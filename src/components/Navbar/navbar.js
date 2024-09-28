
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css'

const Navbar1 = () => {




  return (
    
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className='registration'>Registration</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav' >
        <Nav className="mr-auto">
          {/* <Button variant='success' onClick={handleNavigation}>Sign-up</Button> */}
          <Nav.Link href='/login' className='text-success'>Login</Nav.Link> 
          
        </Nav>


        <Nav className="mr-auto">
          {/* <Button variant='success' onClick={handleNavigation}>Sign-up</Button> */}
          {/* <Nav.Link href='/forget' className='text-success'>forget</Nav.Link>  */}
          
        </Nav>



      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;




