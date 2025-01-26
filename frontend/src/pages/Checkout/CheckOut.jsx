import React, { useContext, useState, useEffect } from 'react';
import './CheckOut.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const CheckOut = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [deliveryFee, setDeliveryFee] = useState(0.00);
  const [data, setData] = useState({
    street: null,
    suburb: null,
    city: null,
    province: null,
    zip: null,
    type
  });

  const isAllDataPopulated = () => {
    return Object.values(data).every((value) => Boolean(value));
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const fetchDeliveryRate = async () => {
    try {
      const res = await axios.post(
        'https://api.shiplogic.com/v2/rates',
        {
          collection_address: {
            type: 'residential',
            company: '',
            street_address: '96 Forest road',
            local_area: 'Bramley',
            city: 'Johannesburg',
            zone: 'Gauteng',
            country: 'ZA',
            code: '2018',
          },
          delivery_address: {
            type: 'residential',
            company: '',
            street_address: data.street,
            local_area: data.suburb,
            city: data.city,
            zone: data.province,
            country: 'ZA',
            code: data.zip,
          },
          parcels: [
            {
              submitted_length_cm: 42.5,
              submitted_width_cm: 38.5,
              submitted_height_cm: 5.5,
              submitted_weight_kg: 3,
            },
          ],
        },
        { headers: { Authorization: 'Bearer a601d99c75fc4c64b5a64288f97d52b4' } }
      );

      setDeliveryFee(res.data.rates[0].rate);
    } catch (error) {
      console.error('Failed to fetch delivery rate:', error);
    }
  };

  // useEffect to make API call when all fields are populated
  useEffect(() => {
    // Call API only if all data fields are populated
    if (isAllDataPopulated()) {
      fetchDeliveryRate();
    }
  }, [data]); // Trigger effect when data changes

  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name' />
        </div>
        <input type='text' placeholder='Phone' />
        <input type='email' placeholder='Email address' />
        <input onChange={onChangeHandler} name='street' type='text' placeholder='Street' />
        <input onChange={onChangeHandler} name='suburb' type='text' placeholder='Suburb' />
        <div className='multi-fields'>
          <input onChange={onChangeHandler} name='city' type='text' placeholder='City/Town' />
          <input onChange={onChangeHandler} name='province' type='text' placeholder='Province' />
        </div>
        <div className='multi-fields'>
          <input onChange={onChangeHandler} name='zip' type='text' placeholder='Zip code' />
        </div>
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
              <p>Delivery</p>
              <p>R{deliveryFee}</p>
            </div>
            <div className='cart-total-details'>
              <b>Total</b>
              <b>R{getTotalCartAmount() + deliveryFee}</b>
            </div>
          </div>
          <button>Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default CheckOut;