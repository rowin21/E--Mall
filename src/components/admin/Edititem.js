import React, { useEffect, useState } from 'react'
import {Nav, Row, Col, Container, Card, Button, Form} from 'react-bootstrap'
import axios from 'axios';

const Edititem = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/edititem')
        .then((res) => {
            console.log("Fetched editproducts", res.data);

            setProducts(res.data);

        })
        .catch((err) => {
            console.error(err);
        });
        
    }, []);

    //update function

    const handleUpdate = (productId, newPrice, newQuantity) => {
        // Send a request to update the product in the database
        axios.put(`http://localhost:8000/edititem/${productId}`, {
            price: newPrice,
            quantity: newQuantity
        })
        .then((res) => {
            
            setProducts(products.map(product => {
                if (product.product_id === productId) {
                    return {
                        ...product,
                        product_price: newPrice,
                        product_quantity: newQuantity
                    };
                }
                return product;
            }));
        })
        .catch((err) => {
            console.error(err);
        });

        alert("Item Details Updated")
    };
  return (
    <div>
        <Container fluid>
        <Row>
                    <Col>
                    <h3>Product</h3>
                    </Col>
                    <Col>
                    <h3>Price</h3>
                    </Col>
                    <Col>
                    <h3>Quantity</h3>
                    </Col>
                    <Col>
                   <h3>Status</h3> 
                    </Col>
                </Row>
        {products.map(product => (
            <Row>

               
                    <Card key={product.product_id}>
                        <Row>
                        <Col>
                        <Card.Text>{product.product_name}</Card.Text>
                        </Col>
                        <Col>
                        <Form.Control
                        type='number'
                        value={product.product_price}
                        onChange={(e) => {
                            const newPrice = e.target.value;
                            setProducts(products.map(p => {
                                if (p.product_id === product.product_id) {
                                    return { ...p, product_price: newPrice}
                                }
                                return p;
                            }));
                        }}
                        />
                        </Col>
                        <Col>
                        <Form.Control
                        type='number'
                        value={product.product_quantity}
                        onChange={(e) => {
                            const newQuantity = e.target.value;
                            setProducts(products.map(p => {
                                if (p.product_id === product.product_id) {
                                    return { ...p, product_quantity: newQuantity}
                                }
                                return p;
                            }));
                        }}
                        />
                        </Col>
                        <Col>
                        <Button variant='primary' onClick={() => handleUpdate(product.product_id,product.product_price,product.product_quantity)}>Update</Button>
                        </Col>
                        </Row>


                    </Card>
                
            </Row>
            ))}
        </Container>
    </div>
  )
}

export default Edititem