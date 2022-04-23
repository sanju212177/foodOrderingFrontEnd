import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from "./FoodItems";
import { CartProvider } from "react-use-cart";
import Header from './Header';
import Footer from './Footer';
import PostHeader from './PostHeader';
import { useEffect, useState } from "react";
import ItemService from '../services/ItemService';
function Home() {  
  
  const [foodItems ,setFoodItems]  = useState([]);

  
  useEffect(()=>{
    ItemService.getAllFoodItems().then(response=>{
        setFoodItems(response.data);
    }).catch(error => {
      console.log(error);
    })
  },[]);


  return (
   <div className='bg-dark' >
   <CartProvider>
   <Header/>
   <PostHeader/>
   <FoodItems data = {foodItems}/>
   <Footer />
   </CartProvider>
   </div>
  
  );
}

export default Home;
