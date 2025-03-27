import React from 'react'

const ViewCertificate = () => {
  return (
    <>
    <div className="bg-slate-300">
      <div  className="border-2 border-gray-950 bg-slate-50 py-6 px-6 mt-[200px] ml-[500px] mr-[500px]" >
        <div className="border-2 border-gray-950 bg-slate-50 mx-auto my-auto" >
            
            <h3  className="text-center text-3xl">Kerala Blockchain Academy</h3>
            <div  className="flex justify-center items-center">
                <img src="/Certiapp/images/online-course.png" alt="course" height="150" width="150"/>
            </div>
            <div className="text-center">
                <p>This is to certify that <strong>N</strong></p>
                <p>has successfully completed <strong>Blockchain Foundation</strong>course</p>
                <p>with <strong>S</strong> on <strong>2024-08-07</strong></p>
                
            </div>
             
        </div>
      </div>
    </div>
    </>
  )
}

export default ViewCertificate