import {Schema} from "mongoose";
import { model } from "mongoose";

const userDetails = new Schema({
    userRole:{type:String,required:true},
    userName:{type:String,required:true},
    fullName:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
});

const user = model('Details',userDetails)
export {user}