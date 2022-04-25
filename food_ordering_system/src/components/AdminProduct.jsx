import React, { useState, useEffect } from 'react';
import ItemService from "../services/ItemService";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './AdminNavbar';
toast.configure()
//import {useNavigate} from 'react-router-dom';

export default function AdminProduct() {
  const [foodId, setFoodId] = useState("");
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [info, setInfo] = useState("");
  const [imageFile, setImageFile] = useState("");   //imageUrl
  const [foodItems, setFoodItems] = useState([]);
  const [stock, setStock] = useState(0);
  //Add Food Item
  const addFood = (e) => {
    e.preventDefault();
    const foodItem = { foodName, price, quantity, info }

    const data = new FormData();

    data.append("file", imageFile);
    data.append('foodItemsDto', JSON.stringify(foodItem))

    const alertmsg1 = () => {
      toast.success("Product added..", {
          position: "bottom-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
     }

    ItemService.addItem(data).then(() => {
      <ToastContainer/>
      alertmsg1();
    }).catch(error => {
      console.log(error);
    })

  }

  //methode to update quantity of fooditem
  const updateStock = (newQuantity, oldQuantity) => {
    if (Number(newQuantity) + Number(oldQuantity) < 0)
      setStock(0);
    else
      setStock(Number(newQuantity) + Number(oldQuantity));

  }

  useEffect(() => {
    setQuantity(Number(stock));
  }, [stock])

  const updateQuantity = (foodId) => {
    const data = { quantity }
    ItemService.updateQuantity(foodId, data).then((response) => {
    }).catch(error => {
      console.log(error);
    })
    window.location.reload();
  }

  //useEffect to get all food items
  useEffect(() => {
    getAllFoodItems();
  }, [])


  //Get all items
  const getAllFoodItems = () => {
    ItemService.getAllFoodItems().then((response) => {
      setFoodItems(response.data)
      console.log(response.data);
    }).catch(error => {
      console.log(error);
    })
  }


  //Delete an item
  const deleteFoodItem = (foodId) => {
    ItemService.deleteFoodItem(foodId).then((response) => {
      getAllFoodItems();

    }).catch(error => {
      console.log(error);
    })

  }

  return (
    // Add Product code of front-end
    <div>
    <Navbar/>
    <div className="container my-2 w-100 rounded-3 " id="product-heading" style={{
      '--color-1': 'deepskyblue', '--color-2': 'gray',
      background: `
    linear-gradient(
      120deg,
      var(--color-1),
      var(--color-2) 80%
    )`
    }}>
      <div className="container" id="Add-Product" >
        <div className="container p-4 ">
          <h4> Product List</h4>
          {/* Table for Showing Food items Already available */}
          <div style={{ 'overflow': 'auto', 'height': '350px' }}>
            <table className="table table-sm" style={{ fontFamily: "serif" }} >
              {/* Table Heading */}
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Stock</th>
                  <th scope="col"></th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {
                  foodItems.map(
                    foodItem =>
                      <tr key={foodItem.foodId}>
                        <td> {foodItem.foodId} </td>
                        <td> {foodItem.foodName} </td>
                        <td> {foodItem.price} </td>
                        <td> {foodItem.quantity} </td>
                        <td>
                          <input type="number" className="rounded " placeholder="stock" width="40" size="2" style={{ width: '80px', height: '31px', padding: '0px' }} required onChange={(e) => updateStock(foodItem.quantity, e.target.value)} ></input>
                          <button type="button" className="btn btn-warning btn-sm p-0" onClick={() => updateQuantity(foodItem.foodId)}>update</button>
                        </td>
                        <td> {foodItem.info} </td>
                        <td>
                          <button className="btn btn-danger btn-sm p-0" onClick={() => deleteFoodItem(foodItem.foodId)} >Delete</button>
                        </td>
                      </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
        {/* Button For Adding Products */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5 p-3">
          <button className="btn btn-primary btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#addProduct">Add Products</button>
          {/* Modal for Adding Product */}
          <div className="modal fade" id="addProduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content bg-light text-dark" id="modal-body" style={{
                '--color-1': 'deepskyblue', '--color-2': 'gray',
                background: `
      linear-gradient(
        120deg,
        var(--color-1),
        var(--color-2) 70%   
      )`
              }}>
                <form>
                  <div className="modal-header">
                    <h6 className="modal-title" id="exampleModalLabel">Add Products</h6>
                    <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <div className="col">
                        <label htmlFor="foodname">Food Item Name</label>
                        <input type="text" className="form-control" placeholder="Enter Food Item Name" name="foodname" id="foodname" value={foodName} onChange={(e) => setFoodName(e.target.value)} required />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="col">
                        <label htmlFor="price">Price</label>
                        <input type="text" className="form-control" placeholder="Enter Price" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="col">
                        <label htmlFor="quantity">Stock</label>
                        <input type="text" className="form-control" placeholder="Number of items available" name="quantity" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                      </div>
                    </div>
                    <div className="form-group tm-form-group mb-3">
                      <label htmlFor="description">Food Item Description</label>
                      <textarea className="form-control tm-form-control validate tm-small" placeholder='Enter Description Here' id="description" name="description" rows="2" value={info} onChange={(e) => setInfo(e.target.value)} required></textarea>
                    </div>
                    {/* For Image uploading */}
                    <div class="mb-3">
                      <label htmlFor="formFile" class="form-label">Upload Image of Food Item</label>
                      <input class="form-control" type="file" id="image" alt="_img" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} required />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-success btn-sm" onClick={(e) => { addFood(e); window.location.reload(); }} >Add Item</button>
                    <button type="button" class="btn btn-danger btn-sm" data-bs-dismiss="modal">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Button For deleting Products */}
          {/* <button className="btn btn-danger btn-sm ms-3" type="button" data-bs-toggle="modal" data-bs-target="#deleteproduct" >Delete Products</button> */}
          <div className="modal fade" id="deleteproduct" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Delete Product</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <div className="col">
                      <label htmlFor="foodname">Food Id</label>
                      <input type="text" className="form-control" placeholder="Enter Food Id you want to delete" name="foodId" id="foodId" value={foodId} onChange={(e) => setFoodId(e.target.value)} required />
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-danger btm-sm p-0" onClick={() => { deleteFoodItem(foodId); window.location.reload(); }} >Delete Product</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}
