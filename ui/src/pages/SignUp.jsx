import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch('/api/signUp',{
                method:'POST',
                credentials: 'include',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    fullName,
                    email,
                    userName,
                    password,
                }),
            });
            console.log("output",response)
            const data = await response.json();
            console.log("Response data:", data);

            if(!response.ok) {
                const errData = await response.json();
                throw new Error(errData.msg || 'Signup failed');
            }

            navigate('/');
        } catch(err) {
            setError(err.message || 'Signup failed: Please try again!')
        }
    };


  return (
    <>
    <div  className="bg-slate-300 flex justify-center h-[100vh] ">
        <h1 className="text-2xl font-bold p-10 mt-64 mr-32">Certificate Dapp</h1>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <form onSubmit={handleSignup} className="bg-slate-400 w-100 h-130 rounded-xl justify-center mt-16">
            <p className="text-3xl pt-2.5 text-center font-serif mt-4">Sign Up</p>
            <div className="px-8">
                <div className="pt-2">
                    <label className='block text-gray-700 font-medium mb-2' >Full Name:</label> 
                    <input type="text" value={fullName} onChange={(e)=>setFullName(e.target.value)} required className='w-full px-4 py-2 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'/> 
                </div>
                <div className="pt-2">
                    <label className='block text-gray-700 font-medium mb-2' >User Name:</label> 
                    <input type="text" value={userName} onChange={(e)=>setUsername(e.target.value)} required className='w-full px-4 py-2 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'/> 
                </div>
                <div className="pt-2">
                    <label className='block text-gray-700 font-medium mb-2' >Email:</label> 
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required className='w-full px-4 py-2 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'/> 
                </div>
                <div className="pt-2">
                    <label className='block text-gray-700 font-medium mb-2' >Password:</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required className='w-full px-4 py-2 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'/>
                </div>
                <button
                    type="submit"
                     className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4"
                >
                Sign Up
                </button>
                <div className="pt-4 pl-4 pb-5">
                <p> Already have an account?
                    <Link to='/' className='text-blue-900 ml-2'>Login</Link>
                </p>
                </div>
               
            </div>   
        </form>
    </div>
    </>
  )
}

export default SignUp