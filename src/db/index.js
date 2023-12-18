import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB=async()=>{
    // console.log(DB_NAME)
    try {
        // console.log(`Connection String: ${process.env.MONGODB_URI}/${DB_NAME}`);
    //    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
        useNewUrlParser: true, // Add any necessary options
        useUnifiedTopology: true,
    });

       console.log(`\n mongodb conneted !! DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MongoDB connection Error",error)
        process.exit(1);   
    }
}

export default connectDB;