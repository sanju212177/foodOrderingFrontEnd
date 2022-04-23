import React from 'react';
import AdminOrders from './AdminOrders'
import Navbar from './AdminNavbar'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import AdminProduct from './AdminProduct';

function Adminhome() {
  return (
    <div className='bg-dark ' style={{'height':'850px'}}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/admin/orders' element={<AdminOrders/>} />
    <Route path='/admin/products' element={<AdminProduct/>} />
    </Routes>
    </BrowserRouter>\
  </div>
  );
}

export default Adminhome;
