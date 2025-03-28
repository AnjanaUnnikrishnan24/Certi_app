import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import cImage from '../assets/images/cImage.png'

const ViewCertificate = () => {
  const [cId, setCId] = useState('')
  const [certificateData, setCertificateData] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/viewCertificate?cId=${cId}`)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Certificate not found')
        }
        throw new Error('Failed to fetch certificate')
      }
      const data = await response.json()
      setCertificateData(data)
      setError('')
    } catch (err) {
      setError(err.message)
      setCertificateData(null)
    }
  }

  return (
    <>
      <div className="bg-slate-300 min-h-screen">
        <Navbar/>
        <div className="pt-8 flex flex-col items-center">
        <h1 className="text-center text-4xl font-semibold text-gray-800 mb-8">
          Certificate Dapp
        </h1> 
        <div className="flex justify-center items-center mb-8">
          <img 
            src={cImage} 
            alt="Online course certification" 
            className="h-32 w-32"
          /> 
        </div> 
          <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter Certificate ID"
                className="px-4 py-2 border rounded w-64"
                value={cId}
                onChange={(e) => setCId(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Search
              </button>
            </div>
          </form>
          
          {error && <p className="mt-4 text-red-600">{error}</p>}

          {certificateData && (
            <div className="border-2 border-gray-950 bg-slate-50 py-6 px-6 mt-8 mx-4 max-w-2xl w-full">
              <div className="border-2 border-gray-950 bg-slate-50 mx-auto">
                <h3 className="text-center text-3xl mb-4">Kerala Blockchain Academy</h3>
                <div className="flex justify-center items-center mb-4">
                  <img 
                    src={cImage} 
                    alt="course" 
                    height="150" 
                    width="150"
                  />
                </div>
                <div className="text-center space-y-2">
                  <p>This is to certify that <strong>{certificateData.cName}</strong></p>
                  <p>has successfully completed <strong>{certificateData.course}</strong> course</p>
                  <p>with grade <strong>{certificateData.grade}</strong> on <strong>
                    {new Date(certificateData.issueDate).toLocaleDateString()}
                  </strong></p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ViewCertificate