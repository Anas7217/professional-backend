// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import { app } from "./app.js";
import connectDB from "./db/index.js";


dotenv.config({ 
    path:'./.env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,(req,res)=>{
        console.log(`server is running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed!!!",err);
})







/*
import express from "express";
const app=express();

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is started at ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.log("Error",error);
        throw error
        
    }
})()

*/