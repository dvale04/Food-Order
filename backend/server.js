import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// App config
const app = express()
const port = 4000 

// middleware
app.use(express.json()) // when we get request from frontend to backened, that will be parsed using this JSON
app.use(cors()) // to access the backened from any frontend

// db connection 
connectDB();

// api endpoints 
app.use("/api/food",foodRouter) // when we access this route, it will be handled by foodRouter
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=> {
    res.send("API Working ") // when we access the root route, it will send this response
// HTTP method to request the data from this server
}) 
app.listen(port,() => {
    console.log(`Server Started on http://localhost:${port}`)
})

