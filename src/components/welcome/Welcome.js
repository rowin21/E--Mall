
// import React, { useEffect, useState } from 'react';
// import { Nav, Navbar, Button, FormControl, Row, Container, Col, Card } from 'react-bootstrap';
// import axios from 'axios';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './welcome.css';
// import '../productView/Productview'
// import { TiShoppingCart } from "react-icons/ti";
// import { Navigate } from 'react-router-dom';

// const Welcome = () => {

//   const [products, setProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [searchKeyword, setSearchKeyword] = useState('');
//   const [filteresProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/products')
//       .then((res) => {
//         console.log("Fetched Products:", res.data);

//        setProducts(res.data);
//        setFilteredProducts(res.data);

//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []); 

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     filterProductsByCategory(category);
//   };

//   // const handleSearch = () => {
//   //   if (!searchKeyword) {
//   //     setFilteredProducts(products);
//   //   } else {
//   //     const filtered = products.filter(product => product.product_name.toLowerCase().startsWith(searchKeyword.toLowerCase()));
//   //     setFilteredProducts(filtered);
//   //   }
//   // };

//   const handleSearch = () => {
//     console.log("Search keyword:", searchKeyword);
//     if (!searchKeyword) {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter(product =>
//         product.product_name.toLowerCase().startsWith(searchKeyword.toLowerCase())
//       );
//       console.log("Filtered products search:", filtered);
//       setFilteredProducts(filtered);
//     }
//   };
  

//   const filterProductsByCategory = (category) => {
//     if (!category) {
//       setFilteredProducts(products);
//     } else {
//       const filtered = products.filter(product => product.product_category.toLowerCase() ===category.toLowerCase());
//       setFilteredProducts(filtered);
//     }
//   };

//   const handleProductClick = (product_ID,event) => {
//     event.preventDefault();
//     window.location.href =`/productview?id=${product_ID}`;
//     console.log('view product', product_ID)

//     axios.post('http://localhost:8000/productview', {product_id: product_ID})
//     .then((res) => {
//       console.log('Product_id submitted for server')
//     })
//     .catch((err) => {
//       console.log('Error in submitting product_id for server', err)
//     });


//   }

//   const filteredProducts = selectedCategory ? products.filter(product => product.product_category.toLowerCase() === selectedCategory.toLowerCase()) : products;


//   console.log("Selected Category:", selectedCategory);
//   console.log("Filtered Products:", filteredProducts);

//   const handlecart = () => {
//     window.location.href = '/cart';
//   };

//   return (
//     <div>
//       <Navbar bg="dark" expand="lg">
//         <Navbar.Brand className='text-white'>E-MALL</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" style={{ backgroundColor: "white" }} />
//         <Navbar.Collapse id='basic-navbar-nav'>
//           <div className='d-flex align-items-center' style={{ marginLeft: "10px" }}>
//             <FormControl type='text' placeholder='Search' value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)}/>
//             <Button variant='outline-success' style={{ marginLeft: "10px" }} onClick={handleSearch}>Search</Button>
//           </div>
//           <Nav className="mr-auto">
//             <Button variant='primary' className='mr-100' style={{ marginLeft: "80px", width: "150px", marginTop: "30px",marginBottom:"10px",padding:"1px" }} onClick={() => handleCategoryClick('Electronic')}>Electronics</Button>
//             <Button variant='primary' className='mr-100' style={{ marginLeft: "80px", width: "150px", marginTop: "30px",marginBottom:"10px",padding:"1px" }} onClick={() => handleCategoryClick('Fitness')}>Fitness</Button>
//             <Button variant='primary' className='mr-100' style={{ marginLeft: "80px", width: "150px", marginTop: "30px",marginBottom:"10px",padding:"1px" }} onClick={() => handleCategoryClick('Fashion')}>Fashion</Button>
//             <Button variant='primary' className='mr-100' style={{ marginLeft: "80px", width: "150px", marginTop: "30px",marginBottom:"10px",padding:"1px" }} onClick={() => handleCategoryClick('lifestyle')}>LifeStyle</Button>
//             <Button variant='none'style={{color:'green',marginLeft: "40px", width: "150px", marginTop: "30px",marginBottom:"10px",padding:"1px",fontSize:'25px'}} onClick={handlecart}><TiShoppingCart /></Button>

//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Container fluid>
//         <Row className="justify-content-center">
//           {/* {filteredProducts.map((product) => (
            
           
//             <Col key={product.product_id} xs={6} md={6} lg={4} xl={2} className="d-flex justify-content-center" >
              
//               <Card className="welcard" style={{ width: "300px", height: "350px", backgroundColor: "whitesmoke", marginTop: "30px",marginBottom:"10px",padding:"1px" }} onClick={(event) => handleProductClick(product.product_id,event)}>
//               <Card.Img variant='top' src={product.product_image} />
//                 <Card.Title>{product.product_name}</Card.Title>
//                 <Card.Text> {product.product_description}</Card.Text>
//                 <Card.Text>Price: {product.product_price}</Card.Text>
                
//               </Card>
//             </Col>
//           ))} */}

//           {filteredProducts.length === 0 ? (
//   <div>No products found.</div>
// ) : (
//   filteredProducts.map((product) => (
//     <Col key={product.product_id} xs={6} md={6} lg={4} xl={2} className="d-flex justify-content-center" >
//       <Card className="welcard" style={{ width: "300px", height: "350px", backgroundColor: "whitesmoke", marginTop: "30px",marginBottom:"10px",padding:"1px" }} onClick={(event) => handleProductClick(product.product_id,event)}>
//         <Card.Img variant='top' src={product.product_image} />
//         <Card.Title>{product.product_name}</Card.Title>
//         <Card.Text>{product.product_description}</Card.Text>
//         <Card.Text>Price: {product.product_price}</Card.Text>
//       </Card>
//     </Col>
//   ))
// )}

//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Welcome;





import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Button, FormControl, Row, Container, Col, Card } from 'react-bootstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './welcome.css';
import '../productView/Productview'
import { TiShoppingCart } from "react-icons/ti";
import { FaListCheck } from "react-icons/fa6";
import { Navigate } from 'react-router-dom';

const Welcome = () => {

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then((res) => {
        console.log("Fetched Products:", res.data);

        setProducts(res.data);
        setFilteredProducts(res.data);

      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterProductsByCategory(category);
  };

  const handleSearch = () => {
    console.log("Search keyword:", searchKeyword);
    if (!searchKeyword) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.product_name.toLowerCase().startsWith(searchKeyword.toLowerCase())
      );
      console.log("Filtered products search:", filtered);
      setFilteredProducts(filtered);
    }
  };

  const filterProductsByCategory = (category) => {
    if (!category) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.product_category.toLowerCase() === category.toLowerCase());
      setFilteredProducts(filtered);
    }
  };

  const handleProductClick = (product_ID, event) => {
    event.preventDefault();
    window.location.href = `/productview?id=${product_ID}`;
    console.log('view product', product_ID);

    axios.post('http://localhost:8000/productview', { product_id: product_ID })
      .then((res) => {
        console.log('Product_id submitted for server')
      })
      .catch((err) => {
        console.log('Error in submitting product_id for server', err)
      });
  }

  

  console.log("Selected Category:", selectedCategory);
  console.log("Filtered Products:", filteredProducts);

  const handlecart = () => {
    window.location.href = '/cart';
  };

  const myOrder = () => {
    window.location.href = '/MyOrders';
  }

  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className='text-white'>E-MALL</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" style={{ backgroundColor: "white" }} />
        <Navbar.Collapse id='basic-navbar-nav'>
          <div className='d-flex align-items-center' style={{ marginLeft: "10px" }}>
            <FormControl type='text' placeholder='Search' value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
            <Button variant='outline-success' style={{ marginLeft: "10px" }} onClick={handleSearch}>Search</Button>
          </div>
          <Nav className="mr-auto">
            <Button variant='primary' className='mr-100' style={{ marginLeft: "60px", width: "150px", height:"40px", marginTop: "30px", marginBottom: "10px" }} onClick={() => handleCategoryClick('Electronics')}>Electronics</Button>
            <Button variant='primary' className='mr-100' style={{ marginLeft: "60px", width: "150px",height:"40px", marginTop: "30px", marginBottom: "10px"}} onClick={() => handleCategoryClick('Fitness')}>Fitness</Button>
            <Button variant='primary' className='mr-100' style={{ marginLeft: "60px", width: "150px",height:"40px", marginTop: "30px", marginBottom: "10px", padding: "1px" }} onClick={() => handleCategoryClick('Fashion')}>Fashion</Button>
            <Button variant='primary' className='mr-100' style={{ marginLeft: "60px", width: "150px",height:"40px", marginTop: "30px", marginBottom: "10px", padding: "1px" }} onClick={() => handleCategoryClick('Lifestyle')}>LifeStyle</Button>
            <Button variant='none' style={{ color: 'green', marginLeft: "20px", width: "150px", marginTop: "30px", marginBottom: "10px", padding: "1px", fontSize: '25px' }} onClick={handlecart}><TiShoppingCart /></Button>
            <Button variant='none' style={{ color: 'green', width:"150px", marginTop:"30px", marginBottom:"10px", fontSize:'25px'}} onClick={myOrder} ><FaListCheck /></Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>
        <Row className="justify-content-center">
          {filteredProducts.length === 0 ? (
            <div>No products found.</div>
          ) : (
              filteredProducts.map((product) => (
                <Col key={product.product_id} xs={6} md={6} lg={4} xl={2} className="d-flex justify-content-center" >
                  <Card className="welcard" style={{ width: "300px", height: "350px", backgroundColor: "whitesmoke", marginTop: "30px", marginBottom: "10px", padding: "1px" }} onClick={(event) => handleProductClick(product.product_id, event)}>
                    <Card.Img variant='top' src={product.product_image} />
                    <Card.Title>{product.product_name}</Card.Title>
                    <Card.Text>{product.product_description}</Card.Text>
                    <Card.Text>Price: {product.product_price}</Card.Text>
                  </Card>
                </Col>
              ))
            )}
        </Row>
      </Container>
    </div>
  );
}

export default Welcome;
