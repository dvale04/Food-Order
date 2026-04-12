import express from "express"
import {addFood} from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

foodRouter.post("/add",addFood) //send the data on the server and on the server
//data will be processed and get response from the server  ex. when fill a form,
//that form data will be sent using the post method 







export default foodRouter; 
