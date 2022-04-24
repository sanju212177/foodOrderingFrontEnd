import React,{useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import IndexMain from "./Index-components/IndexMain";
import AdminLogin from './components/AdminLogin';
import AdminOrders from './components/AdminOrders';
import AdminProduct from './components/AdminProduct';
function App() {

  // let pathname = window.location.pathname;
  // useEffect(() => {
  //   pathname = window.location.pathname;
  // }, [window.location.pathname]);
  return (
   <BrowserRouter>
     {/* <IndexMain />  */}
        
       <Routes>
        <Route   
        path='/'
        element={
          <IndexMain/>
        }
        /> 
        <Route   
        path='/users'
        element={
          <Home/>
        }/>
        <Route   
        path='/admin'
        element={
          <AdminLogin/>
        }/>   
        <Route   
        path='/admin/orders'
        element={
          <AdminOrders/>
        }/>   
        <Route   
        path='/admin/products'
        element={
          <AdminProduct/>
        }/>   
        </Routes>
    </BrowserRouter> 
  // <Adminhome/>
  );
}

export default App;