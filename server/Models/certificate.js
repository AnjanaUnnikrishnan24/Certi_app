import {Schema} from "mongoose";
import { model } from "mongoose";

const certiDetails = new Schema({
    cId:{type:String,required:true},
    course:{type:String,required:true},
    cName:{type:String,required:true},
    grade:{type:String,required:true},
    issueDate:{type:String,required:true}
});

const Certificate = model('certiDetails',certiDetails)
export {Certificate}