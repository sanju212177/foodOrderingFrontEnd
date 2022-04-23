import React, { useState } from 'react';
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemService from '../services/ItemService';
toast.configure()
const Itemcard = (props) => {
    const { addItem, getItem, inCart } = useCart();

    const [id, setId] = useState(props.id);
    const [img, setImg] = useState(props.img);
    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.desc);
    const [price, setPrice] = useState(props.price);
    const itemData = { id, img, title, desc, price }

    const alertmsg = () => {
        toast.error("Sorry! " + props.title + " not available currently..", {
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function calculate(itemData) {
        ItemService.getQuantity(props.id).then((response)=>{
            // setCurrentQuantity(response.data)
            if (inCart(props.id) && getItem(props.id).quantity < response.data) {
                addItem(itemData)
            }
            else
                if (!inCart(props.id) && response.data !== 0) {
                    addItem(itemData)
                }
                else {
                    <ToastContainer />
                    alertmsg();
                }
        }).catch(error =>{
            console.log(error);
        })
    }

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={img} class="card-img-top img-fluid" alt={title} />
                <div class="card-body text-center">
                    <h6 class="card-title">{title}</h6>
                    <h6 class="card-text">₹ {price}</h6>
                    {/* <p class="card-text">{props.desc}</p> */}

                    {/* className = {current_item_quant===false ?"btn btn-danger disiable" */}
                    <button className="btn btn-success" onClick={() => calculate(itemData)}
                    >Add To Cart</button>
                </div>
            </div>
        </div>
    );
};
export default Itemcard;