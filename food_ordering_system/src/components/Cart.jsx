import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import { useCart } from "react-use-cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import OrdersService from "../services/OrdersService";
import { ToastContainer, toast } from 'react-toastify';
import ItemService from '../services/ItemService';
toast.configure()
export default function Cart() {
    // const[amount , setAmount] = useState(()=> 0)
    // const[customerId ,setCustomerId] = useState(()=>0)
    const [data, setData] = useState({ amount: 0, customerId: 0 });
    const {
        isEmpty,
        totalUniqueItems,
        clearCartMetadata,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        inCart,
        getItem
    } = useCart();


    const alertmsg = () => {
        toast.success("Your order has been placed..", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function buyProduct(e) {
        if(localStorage.getItem('token') === null){
            alert("please login first!!");
        }
        else{
        setData(data => {
            return { amount: cartTotal, customerId: 435 }
        })
     }
    }

    const updateItemQuant = (id, newQuantity) => {
        ItemService.getQuantity(id).then((response) => {
            // alert(getItem(id).quantity +"---------"+ response.data)
            if (inCart(id) && newQuantity <= response.data) {
                updateItemQuantity(id, newQuantity);
            }
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        if (data.amount != 0) {
            OrdersService.createOrder(data).then((response) => {

                console.log(response);
                if (response.status === 200) {
                    console.log(Number(response.data.amount))
                    let options = {
                        key: 'rzp_test_syNtpIejUJ1PGG',
                        amount: Number(response.data.amount),
                        currency: 'INR',
                        name: 'Online Food Ordering',
                        description: 'Service Charges',
                        image: 'data:image/png;base64,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',
                        order_id: response.id,
                        handler: function (response) {
                            console.log(response.razorpay_payment_id)
                            console.log(response.razorpay_order_id)
                            console.log(response.razorpay_signature)
                            console.log('payment successfull !!')
                            alert("congrates !! Payment Successful !!")
                        },
                        prefill: {
                            "name": "Gaurav Kumar",
                            "email": "gaurav.kumar@example.com",
                            "contact": "9999999999"
                        },
                        notes: {
                            "address": "Online food ordering system"
                        },
                        theme: {
                            "color": "#3399cc"
                        }
                    };

                    console.log(options)
                    let rzp = new window.Razorpay(options);

                    rzp.on('payment.failed', function (response) {
                        console.log(response.error.code);
                        console.log(response.error.description);
                        console.log(response.error.source);
                        console.log(response.error.step);
                        console.log(response.error.reason);
                        console.log(response.error.metadata.order_id);
                        console.log(response.error.metadata.payment_id);

                        alert("oops!! Payment failed!")
                    });

                    rzp.open();
                }
                <ToastContainer />
                alertmsg("Your order has been placedd..");

            }).catch(error => {
                console.log(error);
            })

            items.map((item, index) => {


                ItemService.getQuantity(item.id).then((response) => {

                    const oldquantity = response.data;
                    // alert(Number(oldquantity)- Number(item.quantity))
                    const quantity = String((Number(oldquantity) - Number(item.quantity)))
                    const data = { quantity }

                    ItemService.updateQuantity(Number(item.id), data).then((response) => {
                    }).catch(error => {
                        console.log(error);
                    })

                })

            })

            emptyCart();
        }
    }, [data])


    if (isEmpty) return <h5 style={{ color: "red" }} className="text-center ">Your Cart is Empty!</h5>

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    {/* <h5>Cart({totalUniqueItems})total Items:({totalItems})</h5> */}
                    <table className="table table-light table-hover table-sm text-xsmall" style={{ fontSize: '1rem' }}>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index} className="row ">
                                        <td className="col-2">
                                            <img src={item.img} style={{ height: '1rem' }} />
                                        </td>
                                        <td className="col-3 text-left">{item.id}</td>
                                        <td className="col-1">₹{item.price}</td>
                                        <td className="container-fluid col-5">
                                            <div className="row">
                                                <div className="col-2 center-block">
                                                    <button
                                                        className="btn btn-primary  btn-sm"
                                                        onClick={() => updateItemQuant(item.id, item.quantity - 1)}
                                                    >-</button>
                                                </div>
                                                <div className="col-2 center-block ">
                                                    <h5 style={{ textAlign: "center", color: 'black' }} > {item.quantity}</h5>
                                                </div>
                                                <div className="col-2 center-block">
                                                    <button
                                                        className="btn btn-primary btn-sm"
                                                        onClick={() => updateItemQuant(item.id, item.quantity + 1)}
                                                    >+</button>
                                                </div>
                                                <div className="col-5  text-right">
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => removeItem(item.id)}
                                                    >X</button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                </div>
                <hr />
                <div className="container">
                    <div className="col-auto ms-auto text-right">
                        <h6>Total Price: ₹{cartTotal}</h6>

                    </div>
                    <div className="col-auto text-right">
                        <button
                            className="btn btn-danger btn-sm "
                            onClick={() => emptyCart()}
                        >Clear Cart  </button>
                        <button className="btn btn-primary btn-sm" onClick={(e) => buyProduct(e)}>Buy Now </button>
                    </div>
                </div>
            </div>
        </section>

    );
}