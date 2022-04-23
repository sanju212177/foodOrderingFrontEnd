import React  from 'react';
import Itemcard from "./Itemcard";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemService from '../services/ItemService';
const FoodItems= (props)=>{
    return(
        <>
        <h1 className="text-center mt-3 text-white">All Items</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">

                    {props.data.map((item,index)=>{
                        return(
                            <>
                            <Itemcard img={"http://localhost:9191/images/"+item.image}
                             id={item.foodId}
                             title={item.foodName}
                              desc={item.info}
                               price={item.price} 
                               quantity = {item.quantity}
                               item={item} 
                               key={index}
                               />
                            </>   
                        )
                    })}


                    {/* {data.productData.map((item,index)=>{
                        return(
                            <>
                            <Itemcard img={item.img}
                             title={item.title}
                              desc={item.info}
                               price={item.price} 
                               item={item} 
                               key={index}
                               />
                            </>   
                        )
                    })} */}

                </div>

            </section>
        </>
    );
};


export default FoodItems;
