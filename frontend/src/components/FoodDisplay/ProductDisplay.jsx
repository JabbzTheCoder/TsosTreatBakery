import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css'


function ProductDisplay({category}) {
    const {product_list} = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Best selling treats</h2>
        <div className="food-display-list">
            {product_list.map((item,index)=>{
              if (category === "All" || category === item.category) {
                return  <FoodItem key={index} id={item._id}
                 name={item.name} price={item.price} description={item.description} image={item.image}/>
              }  
            })
            }
        </div>
    </div>
  ) 
}

export default ProductDisplay;
