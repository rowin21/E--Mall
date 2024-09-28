import React, { useEffect, useState } from 'react'
import { Form, Row,Col, Button, FormGroup, Card, CardTitle, CardText, Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const Address = () => {
  const [items, setitems] = useState([])
  const [step, setstep] = useState(1);
  const [selectedOption, setselectedoption] = useState('')
  const [isBuyAll, setIsBuyAll] = useState(false); // Change default state to false
  const location = useLocation();
  const [total, settotal] = useState(0)
  const queryparams = new URLSearchParams(location.search);
  const isBuyAllParam = queryparams.get('isBuyAll') === 'true';
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formdata, setFormData] = useState({
    firstname : '',
    lastname : '',
    contact : '',
    address : '',
    city : '',
    pincode : '',
    house : '',
    payment: ''


  });


  useEffect(() => {
    setIsBuyAll(isBuyAllParam);
    if (!isBuyAllParam) {
      const singleBuy = JSON.parse(localStorage.getItem('buyItem')) || {};
      setitems(singleBuy ? [singleBuy] : []);
      console.log("single:",singleBuy)
      console.log("s_total:",singleBuy.single_total)
      settotal(singleBuy.single_total)
    } else {
      const selecteditem = JSON.parse(localStorage.getItem('BuyAllItem')) || [];
      setitems(selecteditem);
      console.log("cart:",selecteditem)
      settotal(localStorage.getItem('BuyallTotal'))
    }
  }, [isBuyAllParam]);
  





  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formdata, [name]: value});
  };

  const next = () => {
    console.log(formdata)
    setstep(step + 1)
  }

  const optionchange = (e) => {
    setselectedoption(e.target.value);
    setFormData ({ ...formdata, payment:e.target.value})
    
  }

  const pay = () => {

    console.log(formdata)
    alert("Payemnt succesfull")
  }




  const confirm = () => {
    // First, check the product quantity availability
    axios.post('http://localhost:8000/api/order_quantity', { items: items })
      .then(response => {
        // If product quantity is available, proceed to place the order
        console.log('Product quantity available:', response.data);
        
        // Now, execute the second API to place the order
        axios.post('http://localhost:8000/api/orders', { formData: formdata, items: items }, {withCredentials: true})
          .then(response => {
            console.log('Server Response:', response.data);
            setOrderPlaced(true);
            alert("Order Placed")
            
          })
          .catch(error => {
            console.error("Error in sending orders to the server:", error);
          });
      })
      .catch(error => {
        console.error("Error in checking product quantity:", error);
      });
      
  };

  const cont = () => {
    
      window.location.href = '/welcome';
    };
  
  

  return (
    // <div style={{ backgroundColor: "yellow" }}>
    //   <div className='d-flex align-items-center justify-content-center min-vh-100' >
    //   {step === 1 && (
    //   // <Form className='border p-4 bg-white' style={{borderColor:"red", borderWidth:"5px",padding:"10px", backgroundColor:"white", borderStyle:"solid",borderWidth:"2px",borderColor:"black"}} >
    //     <Form className='border p-4 bg-white rounded'>
    //     <Row className='mt-4' lg={6}  xs={12}>
    //       <Col lg={7}>
    //     <label><b>First Name:</b></label>
    //     </Col>
    //     <Col lg={1}>
    //     <input type='text' name='firstname' value={formdata.firstname} onChange={handleChange}/>
    //     </Col>
    //     </Row>

    //     <Row className='mt-4' lg={6}  xs={12}>
    //       <Col lg={7}>
    //       <label><b>Last Name:</b></label>
    //       </Col>
    //       <Col lg={1}>
    //       <input type='text' name='lastname' value={formdata.lastname} onChange={handleChange}/>
    //       </Col>
    //     </Row>

    //     <Row className='mt-4' lg={6} xs={12}>
    //       <Col lg={7}>
    //       <label><b>Contact Number:</b></label>
    //       </Col>
    //       <Col lg={1}>
    //       <input type='number' name='contact' max={10} value={formdata.contact} onChange={handleChange}/>
    //       </Col>
    //     </Row>

    //     <Row className='mt-4' lg={6} xs={12}>
    //       <Col lg={7}>
    //       <label><b>Delivery Address:</b></label>
    //       </Col>
    //       <Col lg={1}>
    //       <input type='text' name='address'  value={formdata.address} onChange={handleChange}/>
    //       </Col>
    //     </Row>

    //     <Row className='mt-4' lg={6} xs={12}>
    //       <Col lg={7}>
    //       <label><b>City:</b></label>
    //       </Col>
    //       <Col lg={1}>
    //       <input type='text' name='city' value={formdata.city} onChange={handleChange}/>
    //       </Col>
    //     </Row>

    //     <Row className='mt-4' lg={6} xs={12}>
    //       <Col lg={7}>
    //       <label><b>Pin Code</b></label>
    //       </Col>
    //       <Col lg={1}>
    //       <input type='number' name='pincode' value={formdata.pincode} onChange={handleChange}/>
    //       </Col>
    //     </Row>

    //     <Row className='mt-4' lg={6} xs={12}>
    //       <Col lg={7}>
    //       <label><b>House No / Building Name:</b></label>
    //       </Col>
    //       <Col lg={1}>
    //       <input type='text' name='house' value={formdata.house} onChange={handleChange}/>
    //       </Col>
    //     </Row>

    //     <Row className='mt-4' lg={6} xs={12}>
    //       <Col lg={12}>
    //       <Button onClick={next}>Proceed</Button>
    //       </Col>
    //     </Row>


    //   </Form>


      

    //   )}
    //   </div>

    //   {step === 2 && (
    //     <>
    //     <h1 style={{backgroundColor:"limegreen"}}>Order Details</h1>
    //     {items && items.map((item, index) => (
    //       <div >
            
    //       <Card key={index} style={{backgroundColor:"beige"}}>
    //       <Card.Title>Product: {item.product_name}</Card.Title>
    //       <Card.Text>Price: {item.product_price}</Card.Text>
    //       <Card.Text>Description: {item.product_description}</Card.Text>
    //       <Card.Text>Quantity: {item.product_quantity} </Card.Text>
          
        
    //       </Card>
         


    //       </div>
          
          

    //     ))}
    //     <Card style={{backgroundColor:"whitesmoke"}}>
    //       <h3>Delivery Address</h3>
    //       <Row>
    //         <Col>
    //     <Card.Text>Name: {formdata.firstname} {formdata.lastname}</Card.Text>
    //     </Col>
    //     <Col>
    //     <Card.Text>Contact: {formdata.contact}</Card.Text>
    //     </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //     <Card.Text>Delivery Address: {formdata.address}</Card.Text>
    //     </Col>
    //     <Col>
    //     <Card.Text>House No: {formdata.house}</Card.Text>
    //     </Col>
    //     </Row>
    //     <Row>
    //       <Col>
    //     <Card.Text>City: {formdata.city}</Card.Text>
    //     </Col>
    //     <Col>
    //     <Card.Text>Pin Code: {formdata.pincode}</Card.Text>
    //     </Col>
    //     </Row>
    //      <h3>Total : {total} </h3>
    //      <Row>
    //       <Col>
    //       </Col>
    //       <Col>
    //      <Button onClick={next}>Proceed</Button>
    //      </Col>
    //      <Col>
    //      </Col>
    //      </Row>
    //      </Card>
    //     </>
        

    //   )}





    //   {step === 3 && (
    //     <Form style={{borderStyle:"solid",borderWidth:"2px",borderColor:"green",backgroundColor:"lightgreen"}}>
    //       <Row style={{backgroundColor:""}}>
    //       <Row >
    //       <label><b>Select Your payment Option</b></label>
    //       </Row>
       
    //       <Row className='mt-2' lg={9}>
    //         <Col>
    //       <input type='radio' name='payment' value="cod" checked={selectedOption === 'cod'} onChange={optionchange}/>
    //       </Col>
    //       <Col>
    //       <label>Cash On Delivery</label>
    //       </Col>
    //       </Row>
          

    //       <Row>
    //       <Col>
    //       <input type='radio' name='payment' value="googlepay" checked={selectedOption === 'googlepay'} onChange={optionchange}/>
    //       </Col>
    //       <Col>
    //       <label>Google Pay</label>
    //       </Col>
    //       </Row>

    //       <Row>
    //       <Col>
    //       <input type='radio' name='payment' value="netbanking" checked={selectedOption === 'netbanking'} onChange={optionchange}/>
    //       </Col>
    //       <Col>
    //       <label>Net Banking</label>
    //       </Col>
    //       </Row>

    //       </Row>
    //       {orderPlaced ? (
    //         <Button onClick={cont}>Continue Shopping</Button>
    //       ) : (
    //       <Button onClick={confirm}>Pay</Button>
    //     )}


    //     </Form>
    //   )}

    //   {step == 4 && (
    //     <Card>
    //       <CardText>Conformation</CardText>
    //       <Row>
    //         <Col>
    //         <Button className='success' onClick={confirm}>Confirm</Button>
    //         </Col>
    //         <Col>
    //         <Button className='danger'>Cancel</Button>
    //         </Col>
    //       </Row>
    //     </Card>
    //   )}
    // </div>


    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: 'beige' }}>
    <div className="w-100" style={{ maxWidth: '600px' }}>
      {step === 1 && (
        <Form className='border p-4 bg-white rounded'>
          <Row className='mt-4'>
            <Col lg={7} xs={12} className='mb-2'>
              <Form.Label><b>First Name:</b></Form.Label>
            </Col>
            <Col lg={5} xs={12}>
              <Form.Control type='text' name='firstname' value={formdata.firstname} onChange={handleChange} />
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col lg={7} xs={12} className='mb-2'>
              <Form.Label><b>Last Name:</b></Form.Label>
            </Col>
            <Col lg={5} xs={12}>
              <Form.Control type='text' name='lastname' value={formdata.lastname} onChange={handleChange} />
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col lg={7} xs={12} className='mb-2'>
              <Form.Label><b>Contact Number:</b></Form.Label>
            </Col>
            <Col lg={5} xs={12}>
              <Form.Control type='number' name='contact' max={10} value={formdata.contact} onChange={handleChange} />
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col lg={7} xs={12} className='mb-2'>
              <Form.Label><b>Delivery Address:</b></Form.Label>
            </Col>
            <Col lg={5} xs={12}>
              <Form.Control type='text' name='address' value={formdata.address} onChange={handleChange} />
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col lg={7} xs={12} className='mb-2'>
              <Form.Label><b>City:</b></Form.Label>
            </Col>
            <Col lg={5} xs={12}>
              <Form.Control type='text' name='city' value={formdata.city} onChange={handleChange} />
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col lg={7} xs={12} className='mb-2'>
              <Form.Label><b>Pin Code:</b></Form.Label>
            </Col>
            <Col lg={5} xs={12}>
              <Form.Control type='number' name='pincode' value={formdata.pincode} onChange={handleChange} />
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col lg={7} xs={12} className='mb-2'>
              <Form.Label><b>House No / Building Name:</b></Form.Label>
            </Col>
            <Col lg={5} xs={12}>
              <Form.Control type='text' name='house' value={formdata.house} onChange={handleChange} />
            </Col>
          </Row>

          <Row className='mt-4'>
            <Col className="text-center">
              <Button onClick={next}>Proceed</Button>
            </Col>
          </Row>
        </Form>
      )}

      {step === 2 && (
        <>
          <h1 className="text-center" style={{ backgroundColor: 'bisque', padding: '10px', borderRadius: '5px' }}>Order Details</h1>
          {items && items.map((item, index) => (
            <Card key={index} style={{ margin: '10px 0' }}>
              <Row>
                <Col xs={4} >
                <Card.Img variant='left' src={item.product_image} style={{width:"100%",marginTop:"20px",height:"80%",margin:"0",borderColor:"yellow",borderWidth:"2px",borderStyle:"solid"}}/>
                </Col>
                <Col>
               
              <Card.Body style={{alignItems:"start"}}>
                
                <Card.Title> {item.product_name}</Card.Title>
                <Card.Text>Price: {item.product_price}</Card.Text>
                <Card.Text>Quantity: {item.product_quantity}</Card.Text>
              </Card.Body>
              </Col>
              </Row>
            </Card>
          ))}
          <Card style={{ backgroundColor: 'whitesmoke', padding: '10px', borderRadius: '5px' }}>
            <h3>Delivery Address</h3>
            <Row>
              <Col md={6}>
                <Card.Text>Name: {formdata.firstname} {formdata.lastname}</Card.Text>
              </Col>
              <Col md={6}>
                <Card.Text>Contact: {formdata.contact}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Card.Text>Delivery Address: {formdata.address}</Card.Text>
              </Col>
              <Col md={6}>
                <Card.Text>House No: {formdata.house}</Card.Text>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Card.Text>City: {formdata.city}</Card.Text>
              </Col>
              <Col md={6}>
                <Card.Text>Pin Code: {formdata.pincode}</Card.Text>
              </Col>
            </Row>
            <h3>Total: {total}</h3>
            <Row>
              <Col className="text-center">
                <Button onClick={next}>Proceed</Button>
              </Col>
            </Row>
          </Card>
        </>
      )}

      {step === 3 && (
        <Form className="border p-4 bg-white rounded">
          <h4>Select Your Payment Option</h4>
          <div className="mb-3">
            <Form.Check
              type="radio"
              label="Cash On Delivery"
              name="payment"
              value="cod"
              checked={selectedOption === 'cod'}
              onChange={optionchange}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              label="Google Pay"
              name="payment"
              value="googlepay"
              checked={selectedOption === 'googlepay'}
              onChange={optionchange}
            />
          </div>
          <div className="mb-3">
            <Form.Check
              type="radio"
              label="Net Banking"
              name="payment"
              value="netbanking"
              checked={selectedOption === 'netbanking'}
              onChange={optionchange}
            />
          </div>
          {orderPlaced ? (
            <Button onClick={cont}>Continue Shopping</Button>
          ) : (
            <Button onClick={confirm}>Pay</Button>
          )}
        </Form>
      )}

      {step === 4 && (
        <Card>
          <Card.Body>
            <Card.Text>Confirmation</Card.Text>
            <Row>
              <Col>
                <Button variant="success" onClick={confirm}>Confirm</Button>
              </Col>
              <Col>
                <Button variant="danger">Cancel</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
    </div>
  </Container>
  )
}

export default Address