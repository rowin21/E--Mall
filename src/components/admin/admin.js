// import React from 'react';
// import { Navbar, Row, Col, Nav, Container } from 'react-bootstrap';
// import { Routes, Route, Link } from 'react-router-dom'; // Removed useRoutes since it's not needed here
// import './admin.css';

// import Additem from './Additem';
// import Order from './Order';

// const Admin = () => {
//   return (
//     <Container fluid className='m-0 p-0'>
//       <Row>
//         <Col lg="2" xs="4">
//           <Navbar bg='dark' expand='lg' className='flex-column vh-100'>
//             <Navbar.Toggle aria-controls='basic-navbar-nav'/>
//             <Navbar.Collapse id='basic-navbar-nav'>
//               <Nav className='flex-column'>
//                 {/* Use Link component for routing */}
//                 <Link to='/additem' className='text-primary options'>Add Items</Link> 
//                 <hr className='mb-2'/>
//                 <Link to='/order' className='text-primary options'>Orders</Link> 
//                 <Nav.Link className='options'  className='text-primary options'>Track </Nav.Link >
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>
//         </Col>
//         <Col>
//           <Routes>
//             {/* Define routes for Additem and Order components */}
//             <Route path='/additem' element={<Additem />} />
//             <Route path='/order' element={<Order />} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Admin;






import React, { useState } from 'react';
import { Navbar, Row, Col, Nav, Container } from 'react-bootstrap';
import './admin.css';
import Additem from './Additem';
import Order from './Order';
import Edititem from './Edititem'

const Admin = () => {
  const [activeLink, setActiveLink] = useState('profile');
  
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const renderContent = () => {
    switch (activeLink) {
      case 'profile':
        return null;
      case 'additem':
        return <Additem />
      case 'order':
        return <Order />
        case 'edititem':
          return <Edititem />
      default:
        return null;
    }
  }

  return (
    <Container fluid className='m-0 p-0'>
      <Row>
      <Col lg="2" xs="5">
        
          <Navbar bg='dark' expand='lg' className='flex-column' style={{height:"100vh"}}>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='flex-column'>
               
                <Nav.Link className='options'  onClick={() => handleLinkClick('additem')}>Add Item</Nav.Link >
                <Nav.Link className='options'  onClick={() => handleLinkClick('order')}>Order</Nav.Link >
                <Nav.Link className='options'  onClick={() => handleLinkClick('edititem')}>Edit Item</Nav.Link>


                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
       
      </Col>
      <Col lg="10" className='m-0 p-0'>
      {renderContent()} 
      </Col>
      </Row>
    </Container>
  );
}

export default Admin;


{/* // mport React,{useState} from 'react'
// import { Col, Container,Nav,Navbar, Row} from 'react-bootstrap';
// import { useMediaQuery } from 'react-responsive';
// import '../admin/admin.css'
// import Additem from './additem';
// const Admin = () => { */}
{/* //   const [activeLink, setActiveLink] = useState('profile');

//   const handleLinkClick = (link) => {
//     setActiveLink(link); */}
//   };

//   const renderContent = () => {
//     switch (activeLink) {
//       case 'profile':
//         return ;
//       case 'addItem':
//         return <Additem />;
//       case 'viewOrder':
//         return ;
//       default:
//         return null;
//     }
//   };
//     const breakpoints = 
//     {
//         small: '(max-width: 430px)',
//         medium: '(min-width: 577px) and (max-width: 992px)',
//         large: '(min-width: 993px)',
//     };
//     const isLargeScreen=useMediaQuery({ query: breakpoints.large });
//   return (
//     <Container style={{padding:"0",margin:"0"}}>
//       <Row style={{maxWidth:"100%"}}>
//         <Col xs={3} style={{margin:"0",padding:"0"}}>
//         <Navbar bg="dark" variant="dark" style={{maxWidth: isLargeScreen ? "20vw" : "30vw" ,borderRight:"2px solid lightgreen"}} className='flex-column vh-100'>
//             <Nav className="flex-column" style={{width:"100%",alignItems:"center",marginTop:"auto",marginBottom:"auto"}}>
//                 <Nav.Link className='options'  className='text-center adjust' href="#home">Profile</Nav.Link >
//                 <Nav.Link className='options'  className='text-center adjust' onClick={() => handleLinkClick('addItem')}>Add Item</Nav.Link >
//                 <Nav.Link className='options'  className='text-center adjust' href="#services">View Order</Nav.Link >
//             </Nav>
//         </Navbar>
//         </Col>
//         <Col xs={7} style={{margin:"0",padding:"0"}}>
//         {renderContent()}
//         </Col>
//       </Row> 
//     </Container>
//   )
// };

// export default Admin;i



           