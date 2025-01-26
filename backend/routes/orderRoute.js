import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, initializeTransaction } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware,placeOrder);
orderRouter.post('/initialize-transaction', initializeTransaction);

export default orderRouter;