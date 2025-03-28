import React, { useState } from 'react';
import Navbar from '../components/Navbar';


const IssuePage = () => {
  const [cId,setCId ] = useState("") 
  const [course,setCourse ] = useState("Certified Blockchain Associate")
  const [cName,setCName ] = useState("")
  const [grade,setGrade ] = useState("S")
  const [issueDate,setIssueDate ] = useState("")
  const [error,setError ] = useState("")


  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      const response = await fetch('/api/issueCertificate',{
          method:'POST',
          credentials: 'include',
          headers: {
              'Content-Type':'application/json',
          },
          body: JSON.stringify({
            cId, 
            course,
            cName,
            grade,
            issueDate
          }),
      });
      console.log("output",response)
      if(!response.ok) {
          const errData = await response.json();
          throw new Error(errData.msg || 'Issuing Certificate failed');
      }
      alert("Certificate issued successfully")

  } catch(err) {
      setError(err.message || 'Certificate Issuing Failed: Please try again!')
  }
  }
  
  return (
    <>
    
    <div className="bg-slate-300 h-[100vh]">
    <Navbar/>

    <div className="bg-white border border-gray-300 shadow-lg rounded-xl p-8 w-full max-w-2xl ml-auto mr-auto mt-8">
    <h3 className="text-2xl mt-7 text-center">ISSUE NEW CERTIFICATE</h3>
      <form onSubmit={handleSubmit}>

        <label className="block text-gray-700 font-medium" >Select Course*</label>
        <select 
          className="w-full mt-2 px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
          value={course} 
          onChange={(e)=>setCourse(e.target.value)} 
        >
          <option>Certified Blockchain Associate</option>
          <option>Certified Blockchain Architect</option>
          <option>Cyber Security</option>
        </select>

        <label className="block text-gray-700 font-medium">Certificate Id*</label>
        <input 
          className="w-full mt-2 px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
          value={cId} 
          onChange={(e)=>setCId(e.target.value)} 
          type="text" placeholder="Certificate Id" required 
        />

        <label className="block text-gray-700 font-medium">Candidate name*</label>
        <input 
          className="w-full mt-2 px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={cName} onChange={(e)=>setCName(e.target.value)}
          type="text" placeholder="name" required
        />

        <label className="block text-gray-700 font-medium">Select Grade*</label>
        <select 
          className="w-full mt-2 px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
          value={grade} onChange={(e)=>setGrade(e.target.value)}>
            <option>S</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>Failed</option>
        </select>

        <label className="block text-gray-700 font-medium">Issue Date *</label>
        <input 
          className="w-full mt-2 px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={issueDate} onChange={(e)=>setIssueDate(e.target.value)}
          type="date" required
        />
        <button 
          type="submit" 
          className="border-solid rounded-lg text-white text-sm w-full mt-4 h-10 bg-blue-500 "
          >Issue Certificate
        </button>
      </form>
    </div>
    </div>
    </>
  )
}

export default IssuePage