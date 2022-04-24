import React, { useState, useEffect } from 'react'
import OrdersService from '../services/OrdersService';
import Navbar from './AdminNavbar';
export default function AdminOrders() {



  const [orderList, setOrderList] = useState([]);
  const [option_select, setOption_select] = useState([]);
  const [orderid, setOrderId] = useState();
  const handleChange = (event, order_id) => {

    setOrderId(order_id);
    setOption_select({ status: event.target.value });

  };

  useEffect(() => {
    let element = { status: option_select.status }
    if (orderid) {
      OrdersService.updateOrder(orderid, element).then(() => {
        if (option_select) window.location.reload();
      }).catch(
        error => {
          console.log(error)
        }
      );
    }
  }, [option_select]);

  useEffect(() => {
    OrdersService.getAllOrders().then((response) => {
      setOrderList(response.data)
    }).catch(error => {
      console.log(error);
    })
  }, []);


  return (
    <div>
      <Navbar/>
    <div className="container rounded-3 my-2" style={{
      '--color-1': 'deepskyblue', '--color-2': 'gray',
      background: `
    linear-gradient(
      120deg,
      var(--color-1),
      var(--color-2) 80%
    )`
    }}>
      <div className='container p-4'>
    <div>
      <h4>Customers orders list</h4>
    </div>
    <div className="my-3" style={{'overflow':'auto','height':'500px'}}>
      <table className="table table-sm" style={{fontFamily : "serif"}} >
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
                  <select className="form-select-sm" aria-label="Default select example" name='option_select'
                    value={option_select}
                    onChange={(event) => handleChange(event, order.orderId)}>
                    <option value="">{order.status}</option>
                    <option value="packing">packing</option>
                    <option value="pending">pending</option>
                    <option value="out for delivery">out for delivery</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="delivered">Delivered</option>
                  </select>
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
  </div>
  </div>
  )
}
