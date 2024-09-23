import React, { useState } from 'react'
import './AddProducts.css'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'
import { url } from '../../assets/assets';

const AddProducts = () => {

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

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", Number(data.price));
        formData.append("category", data.category);
        formData.append("image", image);
    
        try {
            const response = await axios.post(`${url}/api/product/add`, formData);
    
            if (response.data.success) {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "scones",
                });
                setImage(false);
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            } 
        } catch (error) {
            console.error("Error during submission:", error);
        }
    };
    
 
 
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
