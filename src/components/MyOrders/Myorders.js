// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Container,Card,Row,Col } from 'react-bootstrap';



// const MyOrders = () => {
//     const [orders, setOrders] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8000/myorders', { withCredentials: true})
//         .then((res) => {
//             setOrders(res.data);
//         })
//         .catch((err) => {
//             console.error('Error in fetching Myorders api', err);
//         });
//     }, []);


//     return(
        
//         <Container>
//             <Row className='justify-content-center'>
//                 {orders.length === 0 ? (
//                     <div>No Orders found</div>
//                 ): (
//                     orders.map((order) => (
//                         <Col key={order.order_id}>
//                             <Card>
//                                 <Card.Text>Product Name: {order.order_product_name}</Card.Text>
//                                 <Card.Text>Product Quantity:{order.order_product_quantity}</Card.Text>
//                                 <Card.Text>Product Price:{order.order_product_price}</Card.Text>
//                                 <Card.Text>Order Statue:{order.order_status}</Card.Text>
//                             </Card>
//                         </Col>
//                     ))
//                 )}
//             </Row>

//         </Container>
        
//     );
// };

// export default MyOrders;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Container, Card, Row, Col, Button } from 'react-bootstrap';

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = () => {
//     axios.get('http://localhost:8000/myorders', { withCredentials: true })
//       .then((res) => {
//         setOrders(res.data);
//       })
//       .catch((err) => {
//         console.error('Error in fetching Myorders api', err);
//       });
//   };

//   const handleCancelOrder = (orderId) => {
//     axios.post(`http://localhost:8000/cancelOrder`, { orderId }, { withCredentials: true })
//       .then((res) => {
//         if (res.status === 200) {
//           fetchOrders(); // Refresh orders list after cancellation
//         }
//       })
//       .catch((err) => {
//         console.error('Error in cancelling order', err);
//       });
//   };

//   return (
//     <Container>
//       <Row className='justify-content-center'>
//         {orders.length === 0 ? (
//           <div>No Orders found</div>
//         ) : (
//           orders.map((order) => (
//             <Col key={order.order_id} md={12}>
//               <Card>
//                 <Card.Body>
//                   <Card.Text>Product Name: {order.order_product_name}</Card.Text>
//                   <Card.Text>Product Quantity: {order.order_product_quantity}</Card.Text>
//                   <Card.Text>Product Price: {order.order_product_price}</Card.Text>
//                   <Card.Text>Order Status: {order.order_status}</Card.Text>
//                   {order.order_status !== 'cancelled' && (
//                     <Button variant="danger" onClick={() => handleCancelOrder(order.order_id)}>
//                       Cancel Order
//                     </Button>
//                   )}
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         )}
//       </Row>
//     </Container>
//   );
// };

// export default MyOrders;



// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Container, Card, Row, Col, Button } from 'react-bootstrap';

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = () => {
//     axios.get('http://localhost:8000/myorders', { withCredentials: true })
//       .then((res) => {
//         setOrders(res.data);
//       })
//       .catch((err) => {
//         console.error('Error in fetching Myorders API', err);
//       });
//   };

//   const handleCancelOrder = (orderId) => {
//     axios.post('http://localhost:8000/cancelOrder', { orderId }, { withCredentials: true })
//       .then((res) => {
//         if (res.status === 200) {
//           fetchOrders(); // Refresh orders list after cancellation
//         }
//       })
//       .catch((err) => {
//         console.error('Error in cancelling order', err);
//       });
//   };

//   return (
//     <Container>
//       <Row className='justify-content-center'>
//         {orders.length === 0 ? (
//           <div>No Orders found</div>
//         ) : (
//           orders.map((order) => (
//             <Col key={order.order_id} md={4}>
//               <Card className="mb-4">
//                 <Card.Body>
//                   <Card.Text>Product Name: {order.order_product_name}</Card.Text>
//                   <Card.Text>Product Quantity: {order.order_product_quantity}</Card.Text>
//                   <Card.Text>Product Price: {order.order_product_price}</Card.Text>
//                   <Card.Text>Order Status: {order.order_status}</Card.Text>
//                   {order.order_status !== 'cancelled' && (
//                     <Button variant="danger" onClick={() => handleCancelOrder(order.order_id)}>
//                       Cancel Order
//                     </Button>
//                   )}
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))
//         )}
//       </Row>
//     </Container>
//   );
// };

// export default MyOrders;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get('http://localhost:8000/myorders', { withCredentials: true })
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error('Error in fetching Myorders API', err);
      });
  };

  const handleCancelOrder = (orderId) => {

    axios.post('http://localhost:8000/cancelOrder', { orderId }, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          fetchOrders(); // Refresh orders list after cancellation
        }
      })
      .catch((err) => {
        console.error('Error in cancelling order', err);
      });
  };

  return (
    <Container>
      <Row className='justify-content-center'>
        <h1>My Orders</h1>
        {orders.length === 0 ? (
          <div>No Orders found</div>
        ) : (
          orders.map((order) => (
            <Col key={order.order_id} md={12}>
              <Card className="mb-4" style={{margin:"10px",paddingBottom:"10px",paddingTop:"10px",backgroundColor:"beige"}}>
                <Card.Body>
                  <Row>
                  <Col>
                  <Card.Text>Product Name: {order.order_product_name}</Card.Text>
                  </Col>
              
                  <Col>
                  <Card.Text>Product Quantity: {order.order_product_quantity}</Card.Text>
                  </Col>
                  <Col>
                  <Card.Text>Product Price: {order.order_product_price}</Card.Text>
                  </Col>
                  <Col>
                  <Card.Text>Order Status: {order.order_status}</Card.Text>
                  </Col>
                  <Row>
                    <Col>
                  {order.order_status !== 'Cancelled' && (
                    <Button variant="danger" onClick={() => handleCancelOrder(order.orderId)} style={{marginTop:"15px", width:"800px"}}>
                      Cancel Order
                    </Button>
                  )}
                  </Col>
                  </Row>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default MyOrders;
