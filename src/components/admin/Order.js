// // import axios from 'axios';
// // import React, { useEffect, useState } from 'react'
// // import {  Card, CardText, CardTitle, Col, Dropdown, DropdownButton, Row } from 'react-bootstrap';


// // const Order = () => {
// //   const [orders, setorders] = useState([]);
 

// //   useEffect(() => {
// //     axios.get('http://localhost:8000/order_product')
// //     .then((res) => {
// //       console.log("Fetched orders:", res.data);
// //       setorders(res.data);
// //     })
// //     .catch((err) => {
// //       console.error(err);
// //     });
// //   }, []);


  


// //   const updatedStatus = (orderId, status) => {
    
// //     console.log("Clicked orderId:", orderId, "to Status: ",status);
// //     axios.put(`http://localhost:8000/orderStatus/${orderId}`, { status})
// //       .then((res) => {
// //         console.log("Order Status updated", res.data);
  
// //         // Update orders state using a callback function
// //         setorders(prevOrders => {
// //           return prevOrders.map(item => {
           
// //             // Replace item.order_id with the correct property representing the order ID
// //             if (item.order_id === orderId) {
// //               console.log("Item:", item);

// //               return { ...item, status };
// //             }
// //             return item;
// //           });
// //         });
// //       })
// //       .catch((err) => {
// //         console.error("Error on updating status", err);
// //       });
// //   };
  
  
  
  

// //   return (
// //     <div>
// //       <Card>
// //         <CardTitle><h1>Orders</h1></CardTitle>
// //         <Row>
// //           <Col>
// //           <h4>Product Name</h4>
// //           </Col>
// //           <Col>
// //           <h4>Quantity</h4>
// //           </Col>
// //           <Col>
// //           <h4>Name</h4>
// //           </Col>
// //           <Col>
// //           <h4>Address</h4>
// //           </Col>
// //           <Col>
// //           <h4>City</h4>
// //           </Col>
// //           <Col>
// //           <h4>Pin</h4>
// //           </Col>
// //           <Col>
// //           <h4>Status</h4>
// //           </Col>
// //         </Row>
// //         {orders.map((item, index) => (
// //           <Card key={index}>
// //             <Row>
// //               <Col>
// //             <CardTitle>{item.order_product_name}</CardTitle>
// //             </Col>
// //             <Col>
// //             <CardText>{item.order_product_quantity}</CardText>
// //             </Col>
// //             <Col>
// //             <CardText>{item.customer_firstname} {item.customer_lastname}</CardText>
// //             </Col>
// //             <Col>
// //             <CardText>{item.customer_address}</CardText>
// //             </Col>
// //             <Col>
// //             <CardText>{item.customer_city}</CardText>
// //             </Col>
// //             <Col>
// //             <CardText>{item.customer_pin}</CardText>
// //             </Col>
// //             <Col>
// //             <DropdownButton
// //             id={`dropdown-basic-button-${index}`}
// //             title={item.status}
// //             variant={item.status === 'Delivered' ? "success" : item.status === 'Shipped' ? "warning" : "primary" }>
// //               <Dropdown.Item onClick={() => updatedStatus(item.order_id, 'Confirmed')}>Confirm</Dropdown.Item>
// //               <Dropdown.Item onClick={() => updatedStatus(item.order_id, 'Shipped')}>Shipped</Dropdown.Item>
// //               <Dropdown.Item onClick={() => updatedStatus(item.order_id, 'Delivered')}>Delivered</Dropdown.Item>
            
// //             </DropdownButton>





// //             </Col>
// //             </Row>
// //             </Card>
// //         ))}
   
      
// //       </Card>
// //     </div>
// //   )
// // }

// // export default Order



import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardText, CardTitle, Col, Dropdown, DropdownButton, Row } from 'react-bootstrap';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/order_product')
      .then((res) => {
        console.log("Fetched orders:", res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const updateStatus = (orderId, status) => {
    console.log("Clicked orderId:", orderId, "to Status:", status);
    axios.put(`http://localhost:8000/orderStatus/${orderId}`, { status })
      .then((res) => {
        console.log("Order Status updated", res.data);

        // Update orders state using a callback function
        setOrders(prevOrders => {
          return prevOrders.map(item => {
            // Ensure the correct order ID property is used
            if (item.order_id === orderId) {
              console.log("itemorder id:", item.order_id)
              console.log("orderId:", orderId)
              console.log("Item:", item);
              return { ...item, status };
            }
            return item;
          });
        });
      })
      .catch((err) => {
        console.error("Error on updating status", err);
      });
  };

  return (
    <div>
      <Card>
        <CardTitle><h1>Orders</h1></CardTitle>
        <Row>
          <Col><h4>Product Name</h4></Col>
          <Col><h4>Quantity</h4></Col>
          <Col><h4>Name</h4></Col>
          <Col><h4>Address</h4></Col>
          <Col><h4>City</h4></Col>
          <Col><h4>Pin</h4></Col>
          <Col><h4>Status</h4></Col>
        </Row>
        {orders.map((item, index) => (
          <Card key={index}>
            <Row>
              <Col>
                <CardTitle>{item.order_product_name}</CardTitle>
              </Col>
              <Col>
                <CardText>{item.order_product_quantity}</CardText>
              </Col>
              <Col>
                <CardText>{item.customer_firstname} {item.customer_lastname}</CardText>
              </Col>
              <Col>
                <CardText>{item.customer_address}</CardText>
              </Col>
              <Col>
                <CardText>{item.customer_city}</CardText>
              </Col>
              <Col>
                <CardText>{item.customer_pin}</CardText>
              </Col>
              <Col>
                <CardText>{item.orderId}</CardText>
              </Col>

              <Col>
              
                <DropdownButton 
                  id={`dropdown-basic-button-${index}`}
                  title={item.order_status}
                  variant={
                    item.status === 'Delivered' ? "success" :
                    item.status === 'Shipped' ? "warning" :
                    item.status === 'Confirmed' ? "info" : "primary"
                    
                  }
                >
                  <Dropdown.Item onClick={() => updateStatus(item.orderId, 'Confirmed')}>Confirm</Dropdown.Item>
                  <Dropdown.Item onClick={() => updateStatus(item.orderId, 'Shipped')}>Shipped</Dropdown.Item>
                  <Dropdown.Item onClick={() => updateStatus(item.orderId, 'Delivered')}>Delivered</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Row>
          </Card>
        ))}
      </Card>
    </div>
  )
}

export default Order;




