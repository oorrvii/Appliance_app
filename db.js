import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("succesfully connected mongodb")
    }catch(error){
        console.log("Error connecting to mongodb",error)
         process.exit(1)
    }
    }
export default connectDB;
