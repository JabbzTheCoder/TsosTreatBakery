import { error } from "console";
import productModel from "../models/productModel.js";
import fs from 'fs'

// add product item

const addProduct = async (req,res) =>{
   let image_filename = `${req.file.filename}`;

   const product = new productModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category:req.body.category
   })
   try {
    await product.save();
    res.json({sucess:true,message:"Product added successfully"})
   }catch (error){
    console.log(error)
    res.json({success:false,message:"Error"})
   }
}

export {addProduct}