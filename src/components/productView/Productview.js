
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Container, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

import axios from 'axios';
import './productview.css'

const Productview = () => {
  const [isBuyAll, setIsBuyAll] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get('id');

    if (productId) {
      axios.post('http://localhost:8000/productview', { product_id: productId })
        .then((res) => {
          setProductDetails(res.data);
        })
        .catch((err) => {
          console.error('Error fetching product details:', err);
        });
    }
  }, []);

  const addtocart = () => {
    if(productDetails) {
      const cartitem = { ...productDetails, product_quantity: quantity}
    const excartitems = JSON.parse(localStorage.getItem('cartitems')) || [];
    console.log(excartitems)
   

    const itenInCart = excartitems.some(item => item.product_id === productDetails.product_id);

    if(itenInCart){
      alert("item already in cart");
      return;
    }
    
    excartitems.push(cartitem);
    
    localStorage.setItem('cartitems', JSON.stringify(excartitems));  
    alert('Item added to the cart')
  }
};

  const handleChangeQuantity = (event) => {
    setQuantity(parseInt(event.target.value) || 1)

  }


const buynow = () => {
  if (productDetails) {
    const single_total = productDetails.product_price * quantity;
    const singleBuy = { ...productDetails, product_quantity: quantity, single_total };
    localStorage.setItem('buyItem', JSON.stringify(singleBuy)); // Update key to 'buyItem'
    window.location.href = `/address`; // Navigate to Address component
  }
};
  return (
    <Container>
      <Row className='justify-content-center' >
        
  

      {productDetails && (
        <Col lg={5} md={8} sm={8} xs={12}>
        <Card className='product_card'>
          <div className='d-flex justify-content-center'>
          
          <Card.Img variant='top' src={productDetails.product_image} style={{width:'100%',height:'500px',marginTop:'10px'}} />
          </div>
          <Card.Title>{productDetails.product_name}</Card.Title>
          <Card.Text><b>Price:</b>{productDetails.product_price}</Card.Text>
          <Card.Text><b>Description:</b>{productDetails.product_description}</Card.Text>

          <FormGroup>
            <Row>
            <Col>
            <FormLabel>Quantity:</FormLabel>
            </Col><Col>
            <FormControl type='number' min={1} value={quantity} onChange={handleChangeQuantity} />
            </Col>
            </Row>
          </FormGroup>
          
          <Row>
            <Col>
          <button className='text-primary p-1 pro_button mt-2' variant='primary' onClick={addtocart}><b>Add To Cart</b></button>
          </Col>
          <Col>
          <button className='text-primary p-1 pro_button mb-2 mt-2' onClick={buynow} ><b>Buy Now</b></button>
          </Col>
          
          </Row>
        </Card>
        </Col>
      )}
      
      
      </Row>
    </Container>
   
  );
};

export default Productview;






























