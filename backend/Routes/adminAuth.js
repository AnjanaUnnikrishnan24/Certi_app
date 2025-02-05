import { Router } from "express";
import authenticate from "../Middleware/authAdmin.js";
import adminCheck from "../Middleware/adminCheck.js";

const adminAuth = Router();
const certi = new Map();

adminAuth.post("/issueCertificate", authenticate, adminCheck, (req, res) => {
    try {
        const { CertificateId, Course, CandidateName, Grade, IssueDate } = req.body;
        if (certi.get(CertificateId)) {
            res.status(400).json({ msg: "Certificate already exists" });
        }
        else{
            certi.set(CertificateId, { Course, CandidateName, Grade, IssueDate });
            console.log(certi.get(CertificateId));
            res.status(201).json({ msg: `${CertificateId} stored successfully` });
        }
    } catch {
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

adminAuth.get('/viewCertificate',(req,res)=>{
    try {
        const { CertificateId } = req.query;
        const viewCerti = certi.get(CertificateId);

        if(viewCerti){
            const { Course, CandidateName, Grade , IssueDate} = viewCerti;
            certi.set(CertificateId, { Course, CandidateName, Grade, IssueDate });
            console.log(certi.get(CertificateId));    
            res.status(200).json({Certificate : certi.get(CertificateId) });     
        }else{
            res.status(400).json({ msg: "Certificate doesn't exists" });
        }
    } catch {
        res.status(500).json({ msg: "Internal Server Error" });
    }
})

export default adminAuth;
