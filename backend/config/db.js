import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:dvr3315184@cluster0.ell22ir.mongodb.net/food-del').then(() => console.log("DB Connected"));
}