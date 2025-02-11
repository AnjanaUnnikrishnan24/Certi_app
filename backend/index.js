import express,{json} from 'express';
import dotenv from 'dotenv';
import { userauth } from './Routes/userAuth.js';
import  adminAuth  from './Routes/adminAuth.js';
import mongoose from 'mongoose';

dotenv.config();
 
const app=express();
app.use(json())

app.use('/',userauth);
app.use('/',adminAuth);

mongoose.connect('mongodb://localhost:27017/CertiApp').then(()=>{
    console.log("Mongodb connected Successfully to CertiApp");})
    .catch((error)=>{
        console.error("Mongodb connection failed",error);
});

app.listen(process.env.PORT,function(){
    console.log(`server is listening at ${process.env.PORT}`);
});