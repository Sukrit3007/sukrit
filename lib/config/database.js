import mongoose from "mongoose"

export const ConnectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Database is connected");
    } catch (error) {
        console.error(error)
    }
} 