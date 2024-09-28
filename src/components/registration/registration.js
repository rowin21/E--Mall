// import React, { useState } from 'react';
// import axios from 'axios';


// const Registration = () => {

//   const [formData, setFromData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     gender: 'male',
//     qualification: 'ug',
//   });

//   const handleInputChange = (e) => {
//     setFromData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = async () => {
//     try {
//       await axios.post('http://localhost:8000/register', formData);
//       console.log('Form data submitted', formData);

//     }catch (error) {
//       console.error('error in submitting', error);
//     }
//   };
//   return (
//     <div className='frm'>
//       <div className='frm-field'>
//         <label>First name</label>
//         <input type='text' name='firstname' value={formData.firstname} onChange={handleInputChange}></input>
//       </div>
//       <div className='frm-field'>
//         <label>Last name</label>
//         <input type='text' name='lastname' value={formData.lastname} onChange={handleInputChange}></input>
//       </div>
//       <div className='frm-field'>
//         <label>Phone</label>
//         <input type='number' name='phone' value={formData.phone} onChange={handleInputChange} ></input>
//         </div>
//       <div className='frm-field'>
//         <label>Gender</label>
//         <input type='radio' name='gender' value="male" checked={formData.gender === 'male'} onChange={handleInputChange} ></input>
//         <label>male</label>
//       </div>
//       <div className='frm-field'>
//         <label>Gender</label>
//         <input type='radio' name='gender' value="female" checked={formData.gender === 'female'} onChange={handleInputChange} ></input>
//         <label>female</label>
//       </div>
//       <div className='frm-field'>
//         <label>Qualification : </label>
//         <select name='qualification' value={formData.qualification} onChange={handleInputChange}>
//         <option>ug</option>
//         <option>pg</option>
        
//         </select>
//       </div>

//       <button type='Submit' onClick={handleFormSubmit}>Submit</button>
//     </div>
//   )
// }

// export default Registration


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';


// const Registration = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     phone: '',
//     gender: 'male',
//     qualification: 'ug',
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = async () => {
//     try {
//       await axios.post('http://localhost:8000/register', formData);
//       console.log('Form data submitted', formData);
//     } catch (error) {
//       console.error('Error in submitting', error);
//     }
//   };

//   return (
//     <Container>
//       <Row className='mb-3'>
//         <Col xs={12} md={6} className="offset-md-3">
//           <Form className='frm'>
//             <Form.Group>
//               <Form.Label>First name</Form.Label>
//               <Form.Control
//                 type='text'
//                 name='firstname'
//                 value={formData.firstname}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Last name</Form.Label>
//               <Form.Control
//                 type='text'
//                 name='lastname'
//                 value={formData.lastname}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Phone</Form.Label>
//               <Form.Control
//                 type='number'
//                 name='phone'
//                 value={formData.phone}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Gender</Form.Label>
//               <Form.Check
//                 type='radio'
//                 label='Male'
//                 name='gender'
//                 value='male'
//                 checked={formData.gender === 'male'}
//                 onChange={handleInputChange}
//               />
//               <Form.Check
//                 type='radio'
//                 label='Female'
//                 name='gender'
//                 value='female'
//                 checked={formData.gender === 'female'}
//                 onChange={handleInputChange}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Label>Qualification</Form.Label>
//               <Form.Control
//                 as='select'
//                 name='qualification'
//                 value={formData.qualification}
//                 onChange={handleInputChange}
//               >
//                 <option>UG</option>
//                 <option>PG</option>
//               </Form.Control>
//             </Form.Group>
//             <Button variant='primary' onClick={handleFormSubmit}>Submit</Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>

//   );
// };

// export default Registration;










// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     phone: '',
//     gender: 'male',
//     qualification: 'ug',
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFormSubmit = async () => {
//     try {
//       await axios.post('http://localhost:8000/register', formData);
//       console.log('Form data submitted', formData);
//     } catch (error) {
//       console.error('Error in submitting', error);
//     }
//   };

//   return (
//     <Container>
//       <Row className='mb-3'>
//         <Col xs={12} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 10 }}>
          // <Form className='frm'>
          //   <Form.Group>
          //     <Form.Label>First name</Form.Label>
          //     <Form.Control
          //       type='text'
          //       name='firstname'
          //       value={formData.firstname}
          //       onChange={handleInputChange}
          //     />
          //   </Form.Group>
          //   <Form.Group>
          //     <Form.Label>Last name</Form.Label>
          //     <Form.Control
          //       type='text'
          //       name='lastname'
          //       value={formData.lastname}
          //       onChange={handleInputChange}
          //     />
          //   </Form.Group>
          //   <Form.Group>
          //     <Form.Label>Phone</Form.Label>
          //     <Form.Control
          //       type='number'
          //       name='phone'
          //       value={formData.phone}
          //       onChange={handleInputChange}
          //     />
          //   </Form.Group>
          //   <Form.Group>
          //     <Form.Label>Gender</Form.Label>
          //     <Form.Check
          //       type='radio'
          //       label='Male'
          //       name='gender'
          //       value='male'
          //       checked={formData.gender === 'male'}
          //       onChange={handleInputChange}
          //     />
          //     <Form.Check
          //       type='radio'
          //       label='Female'
          //       name='gender'
          //       value='female'
          //       checked={formData.gender === 'female'}
          //       onChange={handleInputChange}
          //     />
          //   </Form.Group>
          //   <Form.Group>
          //     <Form.Label>Qualification</Form.Label>
          //     <Form.Control
          //       as='select'
          //       name='qualification'
          //       value={formData.qualification}
          //       onChange={handleInputChange}
          //     >
          //       <option>UG</option>
          //       <option>PG</option>
          //     </Form.Control>
          //   </Form.Group>
          //   <Button variant='primary' onClick={handleFormSubmit}>Submit</Button>
          // </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Registration;








import React, { useState } from 'react';
import axios from 'axios';
import './registration.css'
import { Form, Button, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from '../Navbar/navbar';
import emall from '../assets/e-mall.jpg'




const Registration = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    gender: 'male',
    qualification: 'ug',
    password: '',
  });

  const validateform = () => {
    const errors = {};
    const phoneregx = /^\d{10}$/;
    const passwordregx = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

    if (!formData.firstname.trim()) {
      errors.firstname = 'Enter first name'
    }
    if (!formData.lastname.trim()) {
      errors.lastname = 'Enter last name'
    }
    if (!formData.phone.trim() || !phoneregx.test(formData.phone)) {
      errors.phone = 'Check your phone number'
    }
    if (!formData.password.trim() || !passwordregx.test(formData.password)) {
      errors.password = 'check your password'
    }

    return errors;
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async () => {
    try {
      const errors = validateform(formData);
      if(Object.keys(errors).length === 0)
      {
      await axios.post('http://localhost:8000/register', formData);
      console.log('Form data submitted', formData);
      alert("Login Successfull");
      } else {
        alert('check entered credendials');
      }
 
    } catch (error) {
      console.error('Error in submitting', error);
    
  }
  };

  const errors = validateform();


  return (
    <div>
      <Container fluid>
        <Row>
    
      
       <Navbar1 />
     
       </Row>
       
        <Row>
          <Col lg={8} xs={10}>
          <img src={emall} alt='no inage' className='img-fluid' style={{obejectFit:'cover', width:'80%',height:'80%'}} />
          </Col>
       

         <Col lg={4} xs={10} style={{backgroundColor:"beige"}}>

    <Form >
    <Form.Group>
      <Row className='mb-3'>
        <Col className='mt-3'>
      
      <Form.Label>First name</Form.Label>
      </Col>
      <Col className='mt-3'>
      <Form.Control
        type='text'
        name='firstname'
        value={formData.firstname}
        onChange={handleInputChange}
        className='w-100'
      />
     {errors.firstname && <Form.Text className="text-danger">{errors.firstname}</Form.Text>}
      </Col>
      </Row>
      
    </Form.Group>
    <Form.Group>
      <Row className='mb-3'>
        <Col>
      <Form.Label>Last name</Form.Label>
      </Col>
      <Col>
      <Form.Control
        type='text'
        name='lastname'
        value={formData.lastname}
        onChange={handleInputChange}
      />
      {errors.lastname && <Form.Text className='text-danger'>{errors.lastname}</Form.Text>}
      </Col>
      </Row>
    </Form.Group>
    <Form.Group>
      <Row className='mb-3'>
        <Col>
      <Form.Label>Phone</Form.Label>
      </Col>
      <Col>
      <Form.Control
        type='number'
        name='phone'
        value={formData.phone}
        onChange={handleInputChange}
      />
      {errors.phone && <Form.Text className='text-danger'>{errors.phone}</Form.Text>}
      </Col>
      </Row>
      
    </Form.Group>
    <Form.Group>
      
    <Row className='mb-3'>
      <Col lg={6} sm={6} xs={6}>
      <Form.Label>Gender</Form.Label>
      </Col>
      <Col sm={true} xs={3}>
      <Form.Check
        type='radio'
        label='Male'
        name='gender'
        value='male'
        checked={formData.gender === 'male'}
        onChange={handleInputChange}
      />
      </Col>
      <Col  lg={3} sm={true} xs={3}>
      <Form.Check
        type='radio'
        label='Female'
        name='gender'
        value='female'
        checked={formData.gender === 'female'}
        onChange={handleInputChange}
      />
      </Col>
      </Row>
    </Form.Group>

    
    <Form.Group>
      <Row className='mb-3'>
        <Col>
        <Form.Label>Password</Form.Label>
        </Col>
        <Col>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        </Col>
        {errors.password && <Form.Text className='text-danger'>{errors.password}</Form.Text> }
      </Row>
    </Form.Group>



    <Row className='mt-4'>

      <Col>
    <Button variant='primary' onClick={handleFormSubmit}>Submit</Button>
    </Col>
    </Row>
    
  </Form>
  </Col>
  </Row>
  </Container>
  </div>

  );
};

export default Registration;

