import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, FormControl, Form, FormLabel } from 'react-bootstrap';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isBuyAll, setIsBuyAll] = useState(true);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartitems')) || [];
    setCartItems(storedItems);
  }, []);

  const removeitem = (index) => {
    console.log(index)
    const updatecart = cartItems.filter((item,i) => i != index);
    setCartItems(updatecart);
    localStorage.setItem('cartitems',JSON.stringify(updatecart));

    
  }


  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.product_price * item.product_quantity;
    });
    return total;
  };

  // const Buyall = () => {
  //   if (cartItems) {
      
      
  //     localStorage.setItem('BuyAllItem', JSON.stringify(cartItems));
  
  //     console.log(cartItems)
  //     setIsBuyAll(true)

  //     window.location.href = `/buynowAll?isBuyAll=true`
  //   }
  // }



  const Buyall = () => {
    if (cartItems) {
      const total = calculateTotal();
      const buyAllItems = cartItems.map(item => ({
        ...item,
        single_total: item.product_price * item.product_quantity
      }));
  
      localStorage.setItem('BuyAllItem', JSON.stringify(buyAllItems));
      localStorage.setItem('BuyallTotal', JSON.stringify(total));
      setIsBuyAll(true);
      window.location.href = `/buynowAll?isBuyAll=true`;
    }
  };
  

  const updateQuantity = (index, newQuantity) => {
    const updatecart = cartItems.map((item, i) => {
      if(i == index) {
        return { ...item, product_quantity: newQuantity }
      }
      return item;
    })
    setCartItems(updatecart );
    localStorage.setItem('cartitems', JSON.stringify(cartItems));
    console.log("updated quantity:",cartItems)

  }
  
  
  return (
    <Container>
        <h1 style={{backgroundColor:'bisque',color:'chocolate'}}>My Cart</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={12}>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              
              <Card key={index} className="mb-3">
                <Card.Body style={{backgroundColor:'beige'}}>
                    <Row>
                        <Col>
                
                  <Card.Img variant='left' src={item.product_image} style={{width:'100px',height:'120px'}}/>
                  </Col>
                  <Col>
                  <Card.Title>{item.product_name}</Card.Title>
                  <Card.Text>Price: {item.product_price}</Card.Text>
                  <Card.Text>Description: {item.product_description}</Card.Text>
                  </Col>
                  <Col className='d-flex flex-column justify-content-center' lg={3}>
                  <Button  variant='danger' onClick={() => removeitem(index)}>Remove</Button>
                  <Form className='d-flex mt-3'>
                 <FormLabel>QTY:</FormLabel>
                  <FormControl
                  type='number'
                  name='cartqty'
                  min={1}
                  value={item.product_quantity}
                  onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                  style={{width:"70px",marginLeft:"20px"}}
                  />
                  </Form>
                  
                  </Col>
                  
                  </Row>
                </Card.Body>
           

              </Card>
         
              
              
              
            ))
            

          ) : (
            <p>No items in the cart.</p>
          )}
                {cartItems.length > 0 && (
            <Button variant="primary"  style={{ marginTop: '20px' }} onClick={Buyall}>Buy All</Button>
          )}
        </Col>
        
              
      </Row>
    </Container>
  );
};

export default Cart;
