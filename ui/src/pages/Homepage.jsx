import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const [certificateId, setCertificateId] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (certificateId) {
      navigate(`/view-certificate/${certificateId}`)
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-slate-300 min-h-screen pt-8">
        <h1 className="text-center text-4xl font-semibold text-gray-800 mb-8">
          Certificate Dapp
        </h1> 
        <div className="flex justify-center items-center mb-8">
          <img 
            src="/images/online-course.png" 
            alt="Online course certification" 
            className="h-32 w-32"
          /> 
        </div> 
        <form onSubmit={handleSubmit} className="flex justify-center">
          <div className="flex gap-2">
            <input
              className="placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-slate-300 shadow-sm"
              type="number"
              id="courseId"
              placeholder="Enter Certificate ID"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              aria-label="Certificate ID"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </form>  
      </div>
    </>
  )
}

export default Homepage