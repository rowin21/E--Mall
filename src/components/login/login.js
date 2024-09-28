


// import React, { useState } from 'react';
// import { FormControl, FormGroup, FormLabel, Row, Col, Form, Container, Button, Nav } from 'react-bootstrap';
// import axios from 'axios';
// import './login.css'

// const Login = () => {
//   const [formData, setFormData] = useState({
//     login_phone: '',
//     login_password: ''
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8000/login', {
//         login_phone: formData.login_phone,
//         login_password: formData.login_password
//       }, { withCredentials: true});

//       if (response.status === 200 && response.data === 'Login successful') {
//         console.log('Login successful');
//         window.location.href = '/welcome';
//       } else {
//         console.log('Login failed');
//         alert('Invalid phone and password');
//       }
//     } catch (error) {
//       console.error('Error in submitting', error);
//       alert('An error occurred. check phone and password entered.');
//     }
//   };

  

//   return (
   
//     <div className='login' >
      
//       <Container fluid className='d-flex justify-content-center' style={{ width: '100%',backgroundColor:"lightcyan"}}>
        
//         <div style={{position:"absolute",top:"150px",borderWidth:"4px",borderColor:"black",borderStyle:"solid"}}>
          
//           <h1 className='loginmain'>Login</h1>
//           <div className='m-4'>
//             <Form>
//               <FormGroup>
//                 <Row className='justify-content-center'>
//                   <Col>
//                     <FormLabel>Phone</FormLabel>
//                   </Col>
//                   <Col>
//                     <FormControl
//                       type='number'
//                       name='login_phone'
//                       value={formData.login_phone}
//                       onChange={handleInputChange}
//                     />
//                   </Col>
//                 </Row>
//               </FormGroup>

//               <FormGroup className='mt-3'>
//                 <Row>
//                   <Col>
//                     <FormLabel>Password</FormLabel>
//                   </Col>
//                   <Col>
//                     <FormControl
//                       type='password'
//                       name='login_password'
//                       value={formData.login_password}
//                       onChange={handleInputChange}
//                     />
//                   </Col>
//                 </Row>
//               </FormGroup>
//               <Row>
//                 <Col></Col>
//                 <Col className='justify content-center'>
//                   <Nav>
//                     <Button variant='primary' className='mt-5'  onClick={handleFormSubmit}>Submit</Button>
//                   </Nav>
//                 </Col>
//                 <Col></Col>
//               </Row>
//             </Form>
//           </div>
//         </div>
//       </Container>
//     </div>

//   );
// };

// export default Login;



import React, { useState } from 'react';
import { FormControl, FormGroup, FormLabel, Row, Col, Form, Container, Button, Nav } from 'react-bootstrap';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    login_phone: '',
    login_password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:8000/login', { 
  //       login_phone: formData.login_phone,
  //       login_password: formData.login_password
  //     }, { withCredentials: true });

  //     if (response.status === 200 && response.data === 'Login successful') {
  //       console.log('Login successful');
  //       window.location.href = '/welcome';
  //     } else {
  //       console.log('Login failed');
  //       alert('Invalid phone number and password');
  //     }
  //   } catch (error) {
  //     console.error('Error in submitting', error);
  //     alert('An error occurred. Check the phone number and password entered.');
  //   }
  // };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);
  
    try {
      const response = await axios.post('http://localhost:8000/login', { 
        login_phone: formData.login_phone,
        login_password: formData.login_password
      }, { withCredentials: true });
  
      console.log('Server response:', response);
  
      if (response.status === 200 && response.data === 'Login successful') {
        console.log('Login successful');
        window.location.href = '/welcome';
      } else {
        console.log('Login failed');
        alert('Invalid phone number and password');
      }
    } catch (error) {
      console.error('Error in submitting', error);
      alert('An error occurred. Check the phone number and password entered.');
    }
  };

  return (
    <div className='login'>
      <Container fluid className='d-flex justify-content-center' style={{ width: '100%', backgroundColor: "lightcyan" }}>
        <div style={{ position: "absolute", top: "150px", borderWidth: "4px", borderColor: "black", borderStyle: "solid" }}>
          <h1 className='loginmain'>Login</h1>
          <div className='m-4'>
            <Form>
              <FormGroup>
                <Row className='justify-content-center'>
                  <Col>
                    <FormLabel>Phone</FormLabel>
                  </Col>
                  <Col>
                    <FormControl
                      type='number'
                      name='login_phone'
                      value={formData.login_phone}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
              </FormGroup>

              <FormGroup className='mt-3'>
                <Row>
                  <Col>
                    <FormLabel>Password</FormLabel>
                  </Col>
                  <Col>
                    <FormControl
                      type='password'
                      name='login_password'
                      value={formData.login_password}
                      onChange={handleInputChange}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <Row>
                <Col></Col>
                <Col className='justify-content-center'>
                  <Nav>
                    <Button variant='primary' className='mt-5' onClick={handleFormSubmit}>Submit</Button>
                  </Nav>
                </Col>
                <Col></Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;


