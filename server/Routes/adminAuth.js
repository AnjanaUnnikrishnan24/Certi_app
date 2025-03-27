import { Router } from "express";
import authenticate from "../Middleware/authAdmin.js";
import adminCheck from "../Middleware/adminCheck.js";
import {Certificate} from "../Models/certificate.js"

const adminAuth = Router();

adminAuth.post("/issueCertificate", authenticate, adminCheck, async(req, res) => {
    try {
        const { CertificateId, Course, CandidateName, Grade, IssueDate } = req.body;
        console.log(CertificateId);
        const oldCertificate = await Certificate.findOne({cId:CertificateId})
        if(oldCertificate){
            res.status(401).send("Certificate in this Id already exist");
        }else{
            const newCertificate = new Certificate({
                cId:CertificateId,
                course:Course,
                cName:CandidateName,
                grade:Grade,
                issueDate:IssueDate
            });
            await newCertificate.save();
            res.status(201).send("Certificate issued successfully")
        }
    } catch {
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

adminAuth.get('/viewCertificate', async (req, res) => {
    try {
        const { CertificateId } = req.query; 

        if (!CertificateId) {
            return res.status(400).json({ msg: "CertificateId is required" });
        }

        const viewCerti = await Certificate.findOne({ cId: CertificateId });

        if (!viewCerti) { 
            res.status(404).json({ msg: "Certificate doesn't exist" });   
        } 
            
        res.status(200).json(viewCerti);  
    } catch (error) {
        console.error("Error fetching certificate:", error);
        res.status(500).json({ msg: "Internal Server Error", error: error.message });
    }
});

export default adminAuth;
