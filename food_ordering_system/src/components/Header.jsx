import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.jpg';
import cart from '../images/cart.png';
import customer from '../images/customer.png';
import { Button, Modal } from 'react-bootstrap';
import Cart from "./Cart";
import { useCart } from "react-use-cart";
export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout = (e)=>{
      e.preventDefaults();
      localStorage.removeItem('token');
      window.location.open('http://localhost:3000/','self');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3 p-3 py-2">
        <div className="container-fluid">
          <a className="navbar-brand" to="/"><img src={Logo} width="70" height="70" className="nav-ap-0 rounded-3" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <a className="nav-aactive pe-3 text-white" aria-current="page" to="/">Orders</a>
              </li>
              <li className="nav-item">
                <a className="nav-aactive ps-2 text-white" aria-current="page" to="/">Products</a>
              </li> */}

            </ul>
            <form className="d-flex ">

              <button className="btn btn--outline-success text-white nav-ame-1" type="submit" >MyDetails</button>
              <button className="btn btn--outline-success text-white nav-ame-1" type="submit" >MyOrders</button>
              <button className="btn btn--outline-success text-white nav-ame-1" type="submit" onClick={(e)=>logout(e)}>Logout</button>
              <button className="btn btn--outline-success text-white nav-ame-1" type="submit">Login/Signup</button>
              <Button variant="dark p-0 pe-3 ps-2" data-toggle="tooltip" data-placement="bottom" title="Cart" onClick={handleShow}>
                <img src={cart} width="45" height="45" className=" bg-light rounded-3" />
              </Button>

            </form>
          </div>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your cart ,</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}