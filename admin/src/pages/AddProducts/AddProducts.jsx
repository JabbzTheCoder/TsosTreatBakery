import React, { useState } from 'react'
import './AddProducts.css'
import { assets } from '../../assets/assets'
import axios from 'axios'

const AddProducts = () => {

    const url = "http://localhost:4000"
    const [image,setImage] = useState(false);
    const [data,setData] = useState({
        name:"",
        description:"",
        price:"",
        category:"scones"
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const onSubmitHandler = async (event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image",image)

        fetch('http://localhost:4000/api/product/add', {
            method: 'POST',
            body: formData, // Replace 'data' with your actual data object
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
          

        // const response = await fetch('http://localhost:4000/api/product/add', {
        //     method: 'POST',
        //     body: formData, // Convert the data to JSON
        // });


        // const response = await axios.post(`${url}/api/product/add`,formData)
        //console.log(response.data)
        // if (response.data.success){
        //     setData({
        //         name:"",
        //         description:"",
        //         price:"",
        //         category:"scones"
        //     })
        //     setImage(false)
        // } 

    }
 
 
    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={image?URL.createObjectURL(image):assets.upload_area} alt='' />
                    </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type='file' id="image" hidden required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product name</p>
                    <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Product name' />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product description</p>
                    <textarea onChange={onChangeHandler} value={data.description} name='description' rows="6" placeholder='Product description'>
                    </textarea>
                </div>
                <div className='add-category-price'>
                    <div className='add-category flex-col'>
                        <p>Product category</p>
                        <select onChange={onChangeHandler} name='category'>
                            <option value="scones">Scones</option>
                            <option value="buiscits">Buiscits</option>
                            <option value="buckects">Buckets</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Prodcuct price</p>
                        <input onChange={onChangeHandler} value={data.price} type='Number' name='price' placeholder='R100.00' />
                    </div>
                </div>
                <button type='submit' className='add-btn'>Add Product</button>
            </form>
        </div>
    )
}

export default AddProducts
