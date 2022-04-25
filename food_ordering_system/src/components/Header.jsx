import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.jpg';
import cart from '../images/cart.png';
import Offcanvas from 'react-bootstrap/Offcanvas'
import UserService from '../services/UserService';
import OrdersService from "../services/OrdersService";
import customer from '../images/customer.png';
import { Button, Modal } from 'react-bootstrap';
import userlogo from '../images/userlogo.jpg'
import pic from '../images/bg.jpg'
import Cart from "./Cart";
import Success from './Success'
import UseForm from './UseForm'
import validate from './Validate';

export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);//cart modal
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const [orderList, setOrderList] = useState([]);
  const [tokenReceived, setTokenReceived] = useState(localStorage.getItem('token') !== null ? true : false)

  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [pincode, setPincode] = useState('')
  // const [userlogin , setUserLogin] = useState('');

  const [showIn, setShowIn] = useState(false);
  const handleCloseIn = () => setShowIn(false);
  const handleShowIn = () => setShowIn(true);
  const handleShow1 = () => {
    setShow1(true);//login
  }

  //signuppp 
  function submitForm() {

  }
  const { handleChangeIn, values, handleSubmit, errors } = UseForm(submitForm, validate);
  const createUser = () => {
    const user = {
      userName: values.email,
      password: values.password,
      customerDto: {
        customerName: values.username,
        customerEmail: values.email,
        phoneNumber: values.phone,
        address: {
          street: values.street,
          city: values.city,
          state: values.state,
          country: "india",
          pincode: values.pincode
        }
      }
    }

    if (values.username.length > 0 && values.password.length > 0) {
      UserService.signUpUser(user).then(() => {
        alert("signed up successfully..")
      }).catch(error => {
        console.log(error);
      })
      setShowIn(false)
    }
  }

  ///pending
  async function getAuthenticated() {
    // e.preventDefualt();
    // alert(username+" ---------- "+password)
    const dataa = {
      username, password
    }
    UserService.getToken(dataa).then((res)=>{
      if(res.data){
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('username',username);
        setTokenReceived(true);
      } 
    }).catch(error =>{
      console.log(error);
    });
  }
 
  // async function getAuthenticated() {
  //   // e.preventDefualt();
  //   // alert(username+" ---------- "+password)
  //   const dataa = {
  //     username, password
  //   }
  //   const res = await UserService.getToken(dataa);
  //   if(res){
  //     localStorage.setItem('token', res.data.token)
  //     setTokenReceived(true);
  //   } 


  // }
 
  useEffect(() => {
    if (localStorage.getItem('token')) {
      UserService.loadUserByUsername(localStorage.getItem('username')).then((response) => {
        alert(localStorage.getItem('username'));
        // console.log(response.data.customer)
        if (response.data.role.localeCompare('ROLE_USER') === 0) {
          localStorage.setItem('customer', JSON.stringify(response.data.customer))
        }
        else
          localStorage.removeItem('token');
      }).catch(error => {
        console.log(error);
      })

    }
  }, [tokenReceived])












  // function getAuthenticated() {
  //   const dataa = {
  //     username, password
  //   }
  //   let p = new Promise((resolve, reject) => {
  //     UserService.getToken(dataa).then((res) => {
  //       if (res.data != undefined) {
  //         localStorage.setItem('token', res.data.token)
  //         resolve(true);
  //       }
  //       else {
  //         reject(false)
  //       }
  //     })
  //   })

  //   p.then(() => {
  //     if (localStorage.getItem('token') !== null && username !== undefined) {
  //       UserService.loadUserByUsername(username).then((response) => {
  //         alert(username);
  //         //  const data = response.data;
  //         console.log(response.data.customer)
  //         if (response.data.role.localeCompare('ROLE_USER') === 0) {
  //           localStorage.setItem('customer', JSON.stringify(response.data.customer))
  //         }
  //         else
  //           localStorage.removeItem('token');
  //       }).catch(error => {
  //         console.log(error);
  //       })

  //     }

  //   }).catch(()=>{
  //     console.log("bad credentials")
  //   })
  // }



















  //get Order by customerId
  const getMyOrders = () => {
    if (localStorage.getItem('customer')) {
      OrdersService.getOrderByCustomerId(Number(JSON.parse(localStorage.getItem('customer')).customerId)).then((response) => {
        setOrderList(response.data)
      }).catch(error => {
        console.log(error);
      })
    }
  }

  //setting customers details
  const setMyDetails = () => {
    // setDetails(JSON.parse(localStorage.getItem('customer')))
    if (localStorage.getItem('customer')) {
      setCustomerName(JSON.parse(localStorage.getItem('customer')).customerName);
      setCustomerEmail(JSON.parse(localStorage.getItem('customer')).customerEmail);
      setPhoneNumber(JSON.parse(localStorage.getItem('customer')).phoneNumber);
      setStreet(JSON.parse(localStorage.getItem('customer')).address.street);
      setCity(JSON.parse(localStorage.getItem('customer')).address.city);
      setState(JSON.parse(localStorage.getItem('customer')).address.state);
      setCountry(JSON.parse(localStorage.getItem('customer')).address.country);
      setPincode(JSON.parse(localStorage.getItem('customer')).address.pincode);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('customer');
    window.open('http://localhost:3000/', '_self');
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3 p-3 py-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={Logo} width="55" height="55" className="nav-ap-0 rounded-3" /></a>
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
              {localStorage.getItem('token') && (
                <div>
                  <button className="btn btn--outline-success text-white nav-ame-1" type="button" data-bs-toggle="modal" data-bs-target="#details" onClick={setMyDetails}><small>DETAILS</small></button>
                  <button className="btn btn--outline-success text-white nav-ame-1" type="button" data-bs-toggle="modal" data-bs-target="#myorder" onClick={getMyOrders} > <small> MY ORDERS </small></button>
                  <button className="btn btn--outline-success text-white nav-ame-1" type="button" onClick={logout}><small> LOGOUT  </small></button>
                </div>)}
              {localStorage.getItem('token') == null && (
                <div>
                  <button className="btn btn--outline-success text-white nav-ame-1" type="button" onClick={handleShow1}><small>LOGIN</small></button>
                  <button className="btn btn--outline-success text-white nav-ame-1" type="button" onClick={handleShowIn} ><small>SIGNUP</small></button>

                </div>
              )}
            </form>
            <Button variant="dark p-0 pe-2 ps-2" data-toggle="tooltip" data-placement="bottom" title="Cart" onClick={handleShow}>
              <img src={cart} width="55" height="55" className=" bg-light rounded-3" />
            </Button>
          </div>
        </div>
      </nav>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Your cart ,</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Cart />
        </Modal.Body>
      </Modal>






      <Offcanvas show={show1} onHide={handleClose1} placement="end" name="end" className='bg-dark text-white' style={{
        '--color-1': 'deepskyblue', '--color-2': 'gray',
        background: `
    linear-gradient(
      120deg,
      var(--color-1),
      var(--color-2) 80%
    )`
      }}>
        <Offcanvas.Header closeButton >
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-dark" >
            <h3>Sign in,</h3>
            <form >
              <div class="form-group ">
                <label for="exampleInputusername1 ">username</label>
                <input type="text" class="form-control p-2" id="exampleInputusername1" style={{ height: '30px', width: '300px' }} aria-describedby="usernameHelp" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div class="form-group my-2">
                <label for="exampleInputPassword1 ">Password</label>
                <input type="password" class="form-control p-2" id="exampleInputPassword1" style={{ height: '30px', width: '300px' }} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="subbmit" class="btn btn-success p-0 pe-3 btn-sm col my-2" onClick={(e) => getAuthenticated(e)}>Submit</button>
              <a className="col">Forgot password?</a>
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>







      <div className="modal fade " id="myorder" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content" style={{
            '--color-1': 'deepskyblue', '--color-2': 'gray',
            background: `
    linear-gradient(
      120deg,
      var(--color-1),
      var(--color-2) 80%
    )`
          }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">My Orders</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="my-3" style={{ 'overflow': 'auto', 'height': '300px' }}>
                <table className="table table-sm" style={{ fontFamily: "serif" }} >
                  <thead>
                    <tr>
                      <th scope="col" >order_id</th>
                      <th scope="col">Status</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Date</th>
                      <th scope="col">startTime</th>
                      <th scope="col">endTime</th>
                    </tr>
                  </thead>
                  {orderList && (
                    <tbody>
                      {orderList && orderList.map((order) =>

                        <tr className={order.status === "delivered" ? 'table-success'
                          : order.status === "cancelled" ? 'table-danger' : ""} >
                          <th scope='row'>
                            {order.orderId}
                          </th>
                          <td >
                            {order.status}
                          </td>
                          <td>
                            {order.amount}
                          </td>
                          <td>
                            {order.date}
                          </td>
                          <td>
                            {order.startTime}
                          </td>
                          <td>
                            {order.endTime}
                          </td>
                        </tr>
                      )
                      }
                    </tbody>
                  )}
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>







      <div className="modal fade " id="details" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content" style={{
            '--color-1': 'deepskyblue', '--color-2': 'gray',
            background: `
    linear-gradient(
      120deg,
      var(--color-1),
      var(--color-2) 80%
    )`
          }}>
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel3">Personal Information</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-0">
              <div className="my-3" style={{ 'overflow': 'auto', 'height': '300px' }}>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-4 bg-secondary">
                      <img src={userlogo} alt="Cannot display p-3" height='300' width='255' />
                    </div>
                    <div className="col">
                      <ul class="list-group ">
                        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">Name</div>
                            {customerName}
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">Email</div>
                            {customerEmail}
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">Phone Number</div>
                            {phoneNumber}
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">Street</div>
                            {street}
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">City</div>
                            {city}
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">State</div>
                            {state}
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">Country</div>
                            {country}
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-start">
                          <div class="ms-2 me-auto">
                            <div class="fw-bold">Pin Code</div>
                            {pincode}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>






      {/* sign uppppppppp */}
      <Offcanvas show={showIn} onHide={handleCloseIn} placement="end" name="end" className='bg-dark text-dark' style={{
        '--color-1': 'deepskyblue', '--color-2': 'gray',
        background: `
    linear-gradient(
      120deg,
      var(--color-1),
      var(--color-2) 80%
    )`
      }}>
        <Offcanvas.Header closeButton  >
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='signup'>
            <div className='form-content-right' style={{
              '--color-1': 'deepskyblue', '--color-2': 'gray',
              background: `
    linear-gradient(
      120deg,
      var(--color-1),
      var(--color-2) 80%
    )`
            }}>
              <form onSubmit={handleSubmit} method='get'>
                <h1>Sign Up</h1>
                <div className='form-group'>
                  <div className='row'>
                    <div className='col-md-5'>
                      <label htmlFor='username' className='control-label'>Name</label>
                      <input type="text" name='username' className="form-control" style={{ height: '30px', width: '155px' }} value={values.username} onChange={handleChangeIn} defaultValue={values.phonecode} />
                      {errors.username && <p style={{ fontSize: '15px', color: 'red' }}>{errors.username}</p>}
                    </div>
                    <div className="col-md-5">
                      <label htmlFor='phone' className='control-label'>Contact No.</label>
                      <input type="tel" name='phone' className="form-control" style={{ height: '30px', width: '155px' }} value={values.phone} onChange={handleChangeIn} />
                      {errors.phone && <p style={{ fontSize: '15px', color: 'red' }}>{errors.phone}</p>}
                    </div>
                  </div>
                </div>



                <div className='form-group'>
                  <div className='row'>
                    <div className='col-md-5'>
                      <label htmlFor='email' className='control-label'>Email</label>
                      <input type="email" name='email' className="form-control" style={{ height: '30px', width: '155px' }} value={values.email} onChange={handleChangeIn} />
                      {errors.email && <p style={{ fontSize: '15px', color: 'red' }}>{errors.email}</p>}
                    </div>
                    <div className='col-md-5'>
                      <label htmlFor='password' className='control-label'>Password</label>
                      <input type="password" name='password' className="form-control" style={{ height: '30px', width: '155px' }} value={values.password} onChange={handleChangeIn} />
                      {errors.password && <p style={{ fontSize: '15px', color: 'red' }}>{errors.password}</p>}
                    </div>
                  </div>
                </div>


                <div className='form-group'>
                  <div className='form-group'>
                    <label htmlFor='address' className='control-label '>Address: </label>
                    <div className='row'>
                      <div className='col-md-5'>
                        <label htmlFor='street' className='control-label'>Street</label>
                        <input type="text" name='street' className="form-control" style={{ height: '30px', width: '155px' }} value={values.street} onChange={handleChangeIn} />
                      </div>
                      <div className='col-md-5'>
                        <label htmlFor='city' className='control-label'>City</label>
                        <input type="text" name='city' className="form-control" style={{ height: '30px', width: '155px' }} value={values.city} onChange={handleChangeIn} />
                      </div>
                    </div>
                  </div>



                  <div className='form-group'>
                    <div className='row'>
                      <div className='col-md-5'>
                        <label htmlFor='state' className='control-label'>State</label>
                        <input type="text" name='state' className="form-control" style={{ height: '30px', width: '155px' }} value={values.state} onChange={handleChangeIn} />
                      </div>
                      <div className='col-md-5'>
                        <label htmlFor='pincode' className='control-label'>Pincode</label>
                        <input type="text" name='pincode' className="form-control" style={{ height: '30px', width: '155px' }} value={values.pincode} onChange={handleChangeIn} />
                      </div>
                    </div>
                  </div>
                  {errors.address && <p style={{ fontSize: '15px', color: 'red' }}>{errors.address}</p>}
                </div>


                <button className="btn-success rounded-3 my-3" type='submit' onClick={createUser}>Sign Up</button>
                <br />
                <span className="form-input-login">Already have an account?
                  <a href="#SecLogin"> Log In</a> here </span>
              </form>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>









    </>
  )
}