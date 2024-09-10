import React,{useContext} from 'react'
import './CheckOut.css'
import { StoreContext } from '../../context/StoreContext'
const CheckOut = () => {
  
  const {getTotalCartAmount} = useContext(StoreContext);
    
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>

        <div className='multi-fields'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>
        <input type='email' placeholder='Email address' />
        <input type='text' placeholder='Street' />
        <div className='multi-fields'>
          <input type='text' placeholder='City/Town' />
          <input type='text' placeholder='Province' />
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip code' />
          <input type='text' placeholder='Country' />
        </div>
        <input type='text' placeholder='Phone' />
      </div>
      <div className='place-order-right'>
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>R{getTotalCartAmount()}</p>
            </div>
            <div className='cart-total-details'>
              <p>Tax</p>
              <p>R{2}</p>
            </div>
            <div className='cart-total-details'>
              <b>Total</b>
              <b>R{getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>Proceed to Payment</button>
        </div>
      </div>
    </form> 
  )
}

export default CheckOut;
