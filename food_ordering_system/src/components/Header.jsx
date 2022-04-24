import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.jpg';
import cart from '../images/cart.png';
import Offcanvas from 'react-bootstrap/Offcanvas'
import UserService from '../services/UserService';
import customer from '../images/customer.png';
import { Button, Modal } from 'react-bootstrap';
import Cart from "./Cart";
import { useCart } from "react-use-cart";
export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);//cart modal
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () =>{
    setShow1(true);//login
    }
  const getAuthenticated = (e) => {
      // e.preventDefualt();
      // alert(username+" ---------- "+password)
      const dataa = {
          username, password
      }
      UserService.getToken(dataa).then((response) => {
          localStorage.setItem('token', response.data.token)
      }).catch(error => {
          alert(error);
      })

  }


  const logout = ()=>{
      localStorage.removeItem('token');
      window.open('http://localhost:3000/','_self');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3 p-3 py-2">
        <div className="container-fluid">
          <a className="navbar-brand" to="/"><img src={Logo} width="55" height="55" className="nav-ap-0 rounded-3" /></a>
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
            <form className="center navbar-nav">
              {localStorage.getItem('token') &&(
              <div>
              <button className="btn btn--outline-success text-white nav-ame-1" type="button" ><small>DETAILS</small></button>
              <button className="btn btn--outline-success text-white nav-ame-1" type="button" > <small> MY ORDERS </small></button>
              <button className="btn btn--outline-success text-white nav-ame-1" type="button" onClick={logout}><small> LOGOUT  </small></button>
              </div>)}
              {localStorage.getItem('token')==null &&(
              <button className="btn btn--outline-success text-white nav-ame-1" type="button" onClick={handleShow1}><small>LOGIN/SIGNUP</small></button>
              )}
            </form>
              <Button variant="dark p-0 pe-2 ps-2" data-toggle="tooltip" data-placement="bottom" title="Cart" onClick={handleShow}>
                <img src={cart} width="55" height="55" className=" bg-light rounded-3" />
              </Button>
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

      <Offcanvas show={show1} onHide={handleClose1} placement="end" name="end" className='bg-dark text-white'>
                <Offcanvas.Header closeButton >
                </Offcanvas.Header>
                <Offcanvas.Body>
                <div >
                    <h3>Sign in,</h3>
                    <form className='p-2'>
                        <div class="form-group py-2">
                            <label for="exampleInputusername1">username</label>
                            <input type="text" class="form-control" id="exampleInputusername1" style={{height:'30px', width:'300px'}} aria-describedby="usernameHelp" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" style={{height:'30px', width:'300px'}} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="subbmit" class="btn btn-success  btn-sm" onClick={(e) => getAuthenticated(e)}>Submit</button>
                    </form>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
   

    </>
  )
}