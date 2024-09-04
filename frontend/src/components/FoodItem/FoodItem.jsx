import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import OutlineStar from '../icons/OutlineStar'
import FullStar from '../icons/FullStar'
import { StoreContext } from '../../context/StoreContext'


const FoodItem = ({ id, name, price, description, image }) => {
  // const [itemCount, setCounterItem] = useState(0)
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'> 
        <img className='food-item-image' src={image} alt="" />
        {!cartItems[id]
          ?<img src={assets.add_icon_white} className='add' onClick={()=>addToCart(id)} alt="" />
          :<div className='food-item-counter'>
             <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
             <p>{cartItems[id]}</p>
             <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
               
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <div className='food-item-rating'>
            {/* To do*/}
            <FullStar />
            <FullStar />
            <FullStar />
            <OutlineStar />
            <OutlineStar />
          </div>
        </div>
        <p className="food-item-desc">
          {description}
        </p>
        <p className="food-item-price">
          R{price}
        </p>
      </div>

    </div>
  )
}

export default FoodItem
