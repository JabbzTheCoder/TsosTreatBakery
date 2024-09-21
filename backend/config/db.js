import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jabbzthecoder:H0n0rY0urP0tential@cluster0.tjnqp.mongodb.net/tsos-treats').then(()=>console.log("Connected to the DB successfully"));
}