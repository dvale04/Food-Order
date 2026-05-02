import express from "express"
import {addFood,listFood} from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

// Image storage Engine 

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
const upload = multer({storage:storage})


foodRouter.post("/add",upload.single("image"),addFood) //send the data on the server and on the server
//data will be processed and get response from the server  ex. when fill a form,
//that form data will be sent using the post method 
foodRouter.get("/list",listFood)






export default foodRouter; 
