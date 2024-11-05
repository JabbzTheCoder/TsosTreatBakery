 import express from 'express';
 import { addToCart,removeFromCart,getCart } from '../controllers/cartContoller';
 import authMiddleware from '../middleware/auth';

 const cartRouter = express.Router();

 cartRouter.post("/add",authMiddleware, addToCart);
 cartRouter.post("/remove",authMiddleware, removeFromCart)
 cartRouter.post("/get",authMiddleware, getCart)

 export default cartRouter;  