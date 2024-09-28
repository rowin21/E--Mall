import React, { useState } from 'react'
import { Form, FormControl, FormGroup, FormLabel, Row, Col, Container, FormText, Button } from 'react-bootstrap'
import './additem.css'

const Additem = () => {

  const [formData, setFromData] = useState({
    pro_category : '',
    pro_name : '',
    pro_price : '',
    pro_description : '' ,
    pro_image : '',
    pro_quantity: ''

  })

  const handleChange = (e) => {
    const { name, value} = e.target;
    setFromData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if(response.ok) {
        console.log('Product added succesfully');
      }
      else {
        console.error('Failed to add products')

      }
    } catch (error) {
      console.error('Error',error);
    }
  };

  return (
    <div className='additem'>
      <Container className='justify-content-center align-items-center'>
         <Form className='mt-3'>
          <FormText>Add Product</FormText>
            <FormGroup>
                <Row lg={2} className='mt-3'>
                    <Col>
                    <FormLabel>Category</FormLabel>
                    </Col>
                    <Col lg='5' md='4' xs='10'>
                    <Form.Select name='pro_category' value={formData.pro_category} onChange={handleChange}>
                      <option>Select a Category</option>
                      <option value='electronics'>Electronics</option>
                      <option value='lifestyle'>Lifestyle</option>
                     <option value='fitness'>Fitness</option>
                     <option value='fashion'>Fashion</option>
                    </Form.Select>

                    </Col>
                </Row>

            </FormGroup>
        
        
                  <FormGroup>
                    <Row lg={2} className='mt-3'>
                      <Col>
                      <FormLabel>Product Name:</FormLabel>
                      </Col>
                      <Col lg='5' md='4' xs='10' clas>
                      <FormControl
                      type='text'
                      name='pro_name'
                      value={formData.pro_name}
                      onChange={handleChange}/>
                      </Col>
                    </Row>
                  </FormGroup>
                

                 
                  <FormGroup>
                    <Row lg={2} className='mt-3'>
                      <Col>
                      <FormLabel>Product Price:</FormLabel>
                      </Col>
                      <Col lg='5' md='4' xs='10'>
                      <FormControl
                      type='number'
                      name='pro_price'
                      value={formData.pro_price}
                      onChange={handleChange} />
                      </Col>
                    </Row>
                  </FormGroup>
                

                 
                  <FormGroup>
                    <Row lg={2} className='mt-3'>
                      <Col>
                      <FormLabel>Product Description:</FormLabel>

                      </Col>
                      <Col lg='5' md='4' xs='10'>
                      <FormControl
                      type='text'
                      name='pro_description' 
                      value={formData.pro_description}
                      onChange={handleChange}/>
                      </Col>
                    </Row>
                  </FormGroup>
                

                 
                  <FormGroup>
                    <Row lg={2} className='mt-3'>
                      <Col>
                      <FormLabel>Product Image:</FormLabel>
                      </Col>
                      <Col lg='5' md='4' xs='10'>
                      <FormControl
                      type='text'
                      name='pro_image'
                      value={formData.pro_image}
                      onChange={handleChange} />
                      </Col>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <Row lg={2} className='mt-3'>
                      <Col>
                      <FormLabel>Product Quantity:</FormLabel>
                      </Col>
                      <Col lg='5' md='4' xs='10'>
                      <FormControl
                      type='number'
                      name='pro_quantity'
                      value={formData.pro_quantity}
                      onChange={handleChange} />
                      </Col>
                    </Row>
                  </FormGroup>

                  <Button type='submit' className='mt-5' onClick={handleSubmit}>Submit</Button>
                </Form> 
                </Container>



    </div>
  )
}

export default Additem