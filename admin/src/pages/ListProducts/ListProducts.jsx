import React, { useEffect, useState } from 'react'
import './ListProducts.css'
import axios from 'axios';
import { url } from '../../assets/assets';
import { toast } from 'react-toastify';
const ListProducts = () => {
  const [list,setList] = useState([]);

  const removeProduct = async (productId) =>{
    const response = await axios.post(`${url}/api/product/remove`,{id:productId})
    await fetchList();

    if(response.data){
      toast.success(response.data.message)
    }
    else{
      toast.error(response.data.message)
    }
  }

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/product/list`)
    if (response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("There was an error getting the products")
    }
  }

  useEffect(()=>{
    fetchList()
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Products List</p>
      <div className='list-table'>
        <div className='list-table-format title'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt='' />
              <p>{item.name}</p>
              <p>{item.catergory}</p>
              <p>{item.price}</p>
              <p onClick={() =>removeProduct(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListProducts
