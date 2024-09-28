
// import React, { useState, useEffect } from 'react';
// import { Button, Card } from 'react-bootstrap';
// import { useLocation } from 'react-router-dom';

// const BuynowAll = () => {
//   const [buyitem, setBuyitem] = useState([]);
//   const location = useLocation();
//   const queryparams = new URLSearchParams(location.search);
//   const isBuyAll = queryparams.get('isBuyAll') === 'true'

//   useEffect(() => {
//     if (!isBuyAll) {
//       const singleBuy = JSON.parse(localStorage.getItem('buyitem')) || {};
      
//       setBuyitem(singleBuy.productDetails ? [singleBuy] : []);
//       console.log('singlebuy:',singleBuy)
//     } else {
//       const selecteditem = JSON.parse(localStorage.getItem('BuyAllItem')) || []
//       setBuyitem(selecteditem);

//     }
//   }, [isBuyAll]);



//   const calculateTotal = () => {
//     let total = 0;
//     buyitem.forEach(item => {
//       total += item.product_price * item.product_quantity;
//     });
//     return total;
//   };



  

//   const gotoAdd = () => {
//     const total = calculateTotal()
//     localStorage.setItem('BuyallTotal', JSON.stringify(total))
   
    
//     console.log("Total:",total)
//      window.location.href = `\Address`;

//     console.log(buyitem)
//   }

//   return (
//     <div>
//       <h2>Buy Now</h2>
//       {buyitem.map((buyitem, index) => (
//         <Card key={index} style={{backgroundColor:"beige"}}>
          
//           <Card.Title>Name: {buyitem.product_name}</Card.Title>
//           <Card.Text>ID: {buyitem.product_id}</Card.Text>
//           <Card.Text>Price: {buyitem.product_price}</Card.Text>
//           <Card.Text>Description: {buyitem.product_description}</Card.Text>
//           <Card.Text>Quantity: {buyitem.product_quantity} </Card.Text>
//         </Card>
//      ) )}

//      <Card className='mt-3' style={{backgroundColor:"whitesmoke"}}>
//       <Card.Text>Total Amount: <b>{calculateTotal()}</b></Card.Text>
//      </Card>

//      <Button variant='success' className='mt-2' onClick={gotoAdd}>Proceed </Button>
//     </div>
//   );
// }

// export default BuynowAll;




import React, { useState, useEffect } from 'react';
import { Button, Card,Row,Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const BuynowAll = () => {
  const [buyitem, setBuyitem] = useState([]);
  const [isBuyAll, setIsBuyAll] = useState(false); // Change default state to false
  const location = useLocation();
  const queryparams = new URLSearchParams(location.search);
  const isBuyAllParam = queryparams.get('isBuyAll') === 'true';

  // useEffect(() => {
  //   setIsBuyAll(isBuyAllParam); // Update isBuyAll state based on URL parameter
  //   if (!isBuyAllParam) {
  //     // If it's not a Buy All scenario, fetch single item from local storage
  //     const singleBuy = JSON.parse(localStorage.getItem('buyitem')) || {};
  //     setBuyitem(singleBuy.productDetails ? [singleBuy] : []);
  //   } else {
  //     // If it's a Buy All scenario, fetch all items from local storage
  //     const selecteditem = JSON.parse(localStorage.getItem('BuyAllItem')) || [];
  //     setBuyitem(selecteditem);
  //   }
  // }, [isBuyAllParam]);




  useEffect(() => {
    setIsBuyAll(isBuyAllParam); // Update isBuyAll state based on URL parameter
    if (!isBuyAllParam) {
      // If it's not a Buy All scenario, fetch single item from local storage
      const singleBuy = JSON.parse(localStorage.getItem('buyitem')) || {};
      console.log("Retrieved buy item:", singleBuy); // Add this line
      setBuyitem(singleBuy ? [singleBuy] : []);
    } else {
      // If it's a Buy All scenario, fetch all items from local storage
      const selecteditem = JSON.parse(localStorage.getItem('BuyAllItem')) || [];
      setBuyitem(selecteditem);
    }
  }, [isBuyAllParam]);




  // useEffect(() => {
  //   setIsBuyAll(isBuyAllParam); // Update isBuyAll state based on URL parameter
  //   if (!isBuyAllParam) {
  //     // If it's not a Buy All scenario, fetch single item from local storage
  //     const singleBuy = JSON.parse(localStorage.getItem('BuyItem')) || {};
  //     setBuyitem(singleBuy ? [singleBuy] : []);
  //   } else {
  //     // If it's a Buy All scenario, fetch all items from local storage
  //     const selectedItems = JSON.parse(localStorage.getItem('BuyAllItem')) || [];
  //     setBuyitem(selectedItems);
  //   }
  // }, [isBuyAllParam]);
  
  

  const calculateTotal = () => {
    let total = 0;
    buyitem.forEach(item => {
      total += item.product_price * item.product_quantity;
    });
    return total;
  };

  const gotoAdd = () => {
    const total = calculateTotal();
    localStorage.setItem('BuyallTotal', JSON.stringify(total));
    window.location.href = '/Address?isBuyAll=true'; // Fixed template string
  };

  return (
    <div>
      <h2>Buy Now </h2>
      {buyitem.map((buyitem, index) => (
        <Card key={index} style={{ backgroundColor: 'beige' }}>
          <Row>
            <Col xs={4}>
            <Card.Img variant='left' src={buyitem.product_image} style={{width:"30%",height:"20px",marginTop:"20px",height:"80%",borderColor:"yellow",borderWidth:"2px",borderStyle:"solid"}}/>
            </Col>
            <Col>
  <Card.Title> {buyitem.product_name}</Card.Title>
  <Card.Text>Price: {buyitem.product_price}</Card.Text>
  <Card.Text>Quantity: {buyitem.product_quantity} </Card.Text>
  </Col>
  </Row>
</Card>
      ))}

      <Card className='mt-3' style={{ backgroundColor: 'whitesmoke' }}>
        <Card.Text>Total Amount: <b>{calculateTotal()}</b></Card.Text>
      </Card>

      <Button variant='success' className='mt-2' onClick={gotoAdd}>Proceed </Button>
    </div>
  );
};

export default BuynowAll;







