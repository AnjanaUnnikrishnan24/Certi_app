import { Router } from "express";
import {Certificate} from "../Models/certificate.js"

const adminAuth = Router();

adminAuth.post("/issueCertificate", async (req, res) => {
    try {
        const { cId, course, cName, grade, issueDate } = req.body; // Fix: Match schema keys
        console.log("Request Body:", req.body); 

        const oldCertificate = await Certificate.findOne({ cId });

        if (oldCertificate) {
            return res.status(400).json({ msg: "Certificate with this ID already exists" });
        }

        const newCertificate = new Certificate({ 
            cId, 
            course, 
            cName, 
            grade, 
            issueDate 
        });
        await newCertificate.save();

        res.status(201).json({ msg: "Certificate issued successfully" });
    } catch (error) {
        console.error("Error issuing certificate:", error); // Fix: Log error details
        res.status(500).json({ msg: "Internal Server Error", error: error.message });
    }
});

adminAuth.get('/viewCertificate', async (req, res) => {
    try {
        const { cId } = req.query; 

        if (!cId) {
            return res.status(400).json({ msg: "CertificateId is required" });
        }

        const viewCerti = await Certificate.findOne({ cId });

        if (!viewCerti) { 
            res.status(404).json({ msg: "Certificate doesn't exist" });   
        } 
            
        res.json(viewCerti);  
    } catch (error) {
        console.error("Error fetching certificate:", error);
        res.status(500).json({ msg: "Internal Server Error", error: error.message });
    }
});

export default adminAuth;
