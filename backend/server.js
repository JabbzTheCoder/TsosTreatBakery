import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import productRouter from "./routes/productRouter.js"



// app config 
const app = express()
const port = 4000

// db connection
connectDB();

//API Endpoints
app.use("/api/product",productRouter)

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
}) 