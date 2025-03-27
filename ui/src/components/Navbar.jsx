import React from 'react'

const Navbar = () => {
  return (
    <div  className="hidden md:flex space-x-4 justify-end">
        <a href="frontpage.html" className="block px-4 py-2 text-2xl hover:bg-gray-700">Home</a>
        <a href="issuecertificate.html" className="block px-4 py-2 text-2xl hover:bg-gray-700">Issue Certificate</a>
        <a href="issuecertificate.html" className="block px-4 py-2 text-2xl hover:bg-gray-700">Login</a>
    </div>
  )
}

export default Navbar