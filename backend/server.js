import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import productRouter from "./routes/productRoute.js"



// app config 
const app = express()
const port = 4000

// db connection
connectDB();

//API Endpoints
app.use("/api/product",productRouter)
app.use('/images', express.static('uploads'))

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`)
}) 