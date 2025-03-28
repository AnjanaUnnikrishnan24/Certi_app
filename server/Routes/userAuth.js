import { Router } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {user} from '../Models/userDetails.js'

dotenv.config();

const userauth=Router();

userauth.post('/signUp',async(req,res)=>{
    try{
        const {userName,fullName,email,password} = req.body;
        console.log(fullName);
   
        const newPassword =await bcrypt.hash(password,10);
        console.log(newPassword);
        const existinguser = await user.findOne({userName:userName})
        if(existinguser){
            res.status(401).send("User already exit");
        }
        else{
            const newuser = new user({
                userName,
                fullName,
                email,
                password:newPassword
            });
            await newuser.save();
            console.log(" User signed up successfully:", newuser);
            res.status(201).json({message:"Signed-up successfully"})
        }}
    catch (error){
        console.error("Signup Error:", error);
        res.status(500).json({error:"Internal Server error"});
    } 
});

userauth.post('/login',async(req,res)=>{
    try{
        const {userName,password}=req.body;
        const result = await user.findOne({userName});
        if(!result){
            res.status(400).json({ msg: "Enter a valid username" });
        }
        else{
            console.log(result.password);
            const valid =await bcrypt.compare(password,result.password);
            console.log(valid);
            if(valid){
                const token = jwt.sign({ userName },process.env.SECRET_KEY,{expiresIn:'4h'});
                console.log(token);
                res.cookie('authToken',token,
                {
                    httpOnly:true
                });
                res.status(200).json({message:"Logged in successfully"});
            }
            else{
                res.status(401).json({message:"Unauthorized access"});
            }
         }
    }
    catch{
        res.status(500).json({message:"Internal Server Error"})
    }
})

userauth.get('/logout',(req,res)=>{
    res.clearCookie('authToken');
    console.log("User logged out successfully");
    res.status(200).json({msg:"Successfully logged out"})
})

export {userauth};