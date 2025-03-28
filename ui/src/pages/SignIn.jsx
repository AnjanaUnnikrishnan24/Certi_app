import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'

const SignIn = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate();
    
    const handleLogin = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch('/api/login',{
                method:'POST',
                credentials: 'include',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    userName,
                    password
                }),
            });

            if(!response.ok) {
                const errData = await response.json();
                throw new Error(errData.msg || 'Login failed');
            }

            navigate('view');
        } catch(err) {
            setError(err.message || 'Invalid credentials: Please try again!')
        }
    };

  return (
    <>
    <div  className="bg-slate-300 flex justify-center h-[100vh] ">
        <h1 className="text-2xl font-bold p-10 mt-64 mr-20">Certificate Dapp</h1>
        {error && <p className='text-red-500 mb-4'>{error}</p>}
        <form onSubmit={handleLogin} className="bg-slate-400 w-100 h-100 mt-32 rounded-xl justify-center">
            <p className="text-3xl pt-2.5 text-center font-serif">Login</p>
            <div className="px-8">
                <div className="pt-6 pl-4">
                    <label className='block text-gray-700 font-medium mb-2'>User Name:</label> 
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value) } required 
                        className='w-full px-4 py-2 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'/> 
                </div>
                <div className="pt-6 pl-4">
                    <label className='block text-gray-700 font-medium mb-2'>Password:</label> 
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                        className='w-full px-4 py-2 border border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'/>
                </div>
                <div className="pt-4 pl-4 pb-5 justify-between">
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"> Login </button>
                    <p className='mt-4'>Don't have an account? <Link to='signUp' className='text-blue-800'>Sign Up</Link></p>
                </div>
            </div>   
        </form>
    </div>
    </>
  )
}

export default SignIn