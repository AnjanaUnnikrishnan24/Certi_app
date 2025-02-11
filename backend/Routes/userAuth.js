import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {user} from '../Models/userDetails.js'

dotenv.config();

const userauth=Router();

userauth.post('/signUp',async(req,res)=>{
    try{
        const {UserName,FullName,Email,UserRole,Password} = req.body;
        console.log(FullName);
   
        const newPassword =await bcrypt.hash(Password,10);
        console.log(newPassword);
        const existinguser = await user.findOne({userName:UserName})
        if(existinguser){
            res.status(401).send("User already exit");
        }
        else{
            const newuser = new user({
                userRole:UserRole,
                userName:UserName,
                fullName:FullName,
                email:Email,
                password:newPassword
            });
            await newuser.save();
            res.status(201).send("Signed-up successfully")
        }}
    catch{
        res.status(500).send("Internal Server error");
    } 
});

userauth.post('/login',async(req,res)=>{
    try{
        const {UserName,Password}=req.body;
        const result = await user.findOne({userName:UserName});
        if(!result){
            res.status(400).send("Enter a valid username");
        }
        else{
            console.log(result.password);
            const valid =await bcrypt.compare(Password,result.password);
            console.log(valid);
            if(valid){
                const token = jwt.sign({UserName:UserName,UserRole:result.userRole},process.env.SECRET_KEY,{expiresIn:'4h'});
                console.log(token);
                res.cookie('authToken',token,
                {
                    httpOnly:true
                });
                res.status(200).json({message:"Logged in successfully"});
            }
            else{
                res.status(401).send("Unauthorized access");
            }
         }
    }
    catch{
        res.status(500).send("Internal Server Error")
    }
})

userauth.get('/logout',(req,res)=>{
    res.clearCookie('authToken');
    console.log("User logged out successfully");
    res.status(200).json({msg:"Successfully logged out"})
})

export {userauth};