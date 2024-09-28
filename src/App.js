
import React from 'react';
import './App.css';
import Registration from './components/registration/registration';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar1 from './components/Navbar/navbar';
import Login from './components/login/login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from '../src/components/welcome/Welcome'
import Admin from '../src/components/admin/admin'
import Additem from '../src/components/admin/Additem'
import Order from '../src/components/admin/Order'
import Productview from '../src/components/productView/Productview'
import Cart from '../src/components/cart/Cart'
import BuynowAll from '../src/components/BuyNow/BuynowAll'
import Address from '../src/components/BuyNow/address'
import Edititem from '../src/components/admin/Edititem'
import MyOrders from '../src/components/MyOrders/Myorders'
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar1 /> */}
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/additem' element={<Additem/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/productview' element={<Productview/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/buynowAll' element={<BuynowAll/>} />
          <Route path = '/address' element={<Address/>} />
          <Route path = '/edititem' element={<Edititem/>} />
          <Route path='/myorders' element={<MyOrders />} />

          </Routes>
          </Router>
          
          </div>
  );
}

function Home() {
  return (
    <div>

 
     
    
              <Registration />
       
       
      
    </div>
  );
}


function Forget() {
  return (

  <h1>Forget</h1>

  );
}
export default App;



