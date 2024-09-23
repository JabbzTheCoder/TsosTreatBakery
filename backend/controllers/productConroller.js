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
    res.json({success:true,message:"Product added successfully"})
   }catch (error){
    console.log(error)
    res.json({success:false,message:"Error"})
   }
}

//all products list
const listProduct = async (req,res) => {
    try{
      const products  = await productModel.find({});
      res.json({success:true,data:products})
    }catch (error){
      console.log(error)
      res.json({success:false,message:error})

    }
}
// Remove product item
const removeProduct = async (req,res) => {
    try {
      const product = await productModel.findById(req.body.id)
      //remove image from uploads
      fs.unlink(`uploads/${product.image}`, ()=>{})

      await productModel.findByIdAndDelete(req.body.id) 
      res.json({success:true, message:"Product deleted successfully"})
    } catch (error) {
      console.log(error)
      res.json({success:false, message:"Erorr"})
    }
}

export {addProduct,listProduct,removeProduct}