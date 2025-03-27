import React from 'react'

const Homepage = () => {
  return (
    <>
    <div className="bg-slate-300">
        <h1 className="text-center text-4xl">Certificate Dapp</h1> 
        <div  className="flex justify-center items-center">
            <img src="/Certiapp/images/online-course.png" alt="course" height="150" width="150"/> 
        </div> 
        <form  className="flex justify-center items-center">
            <div  class="pt-6 pl-4 flex">
                <input className="placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" type="number" id="courseId" placeholder="Enter Certificate ID to view"/>
                <button className="border-solid rounded text-white text-sm w-40 h-10 bg-blue-500"><a href="viewcertificate.html">Search</a></button>
            </div>
        </form>  
    </div>
    </>
  )
}

export default Homepage