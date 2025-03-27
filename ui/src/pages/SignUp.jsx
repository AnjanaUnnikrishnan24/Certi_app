import React from 'react';
import { useNavigate, Link } from 'react-router-dom';


const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail]   = useState('');
    const [userName, setUsername]   = useState('');
    const [password, setPassword]   = useState('');
    const [userRole, setUserRole]   = useState('user');
    const [error, setError]         = useState('');
    const navigate                = useNavigate();

    const handleSignup = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch('/api/signup',{
                method:'POST',
                credentials: 'include',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    FirstName: firstName,
                    Email:email,
                    UserName: userName,
                    Password: password,
                    UserRole: userRole,
                }),
            });
            console.log("output",response)
            if(!response.ok) {
                const errData = await response.json();
                throw new Error(errData.msg || 'Signup failed');
            }

            navigate('SignIn');
        } catch(err) {
            setError(err.message || 'Signup failed: Please try again!')
        }
    };


  return (
    <>
    <div  className="bg-slate-300 flex justify-center pt-40 my-14 ">
        <h1 className="text-2xl font-bold p-10">Certificate Dapp</h1>
        <form className="bg-slate-400 w-100 rounded-xl justify-center">
            <p className="text-3xl pt-2.5 text-center font-serif">Sign Up</p>
            <div className="px-8">
                <div className="pt-6 pl-4">
                    <label >User Name:</label> 
                    <input type="email" required /> 
                </div>
                <div className="pt-6 pl-4">
                    <label >Full Name:</label> 
                    <input type="email" required /> 
                </div>
                <div className="pt-6 pl-4">
                    <label >Email:</label> 
                    <input type="email" required /> 
                </div>
                <div className="pt-6 pl-4">
                    <label >Password:</label>
                    <input type="password" required />
                </div>
                <div className="pt-4 pl-4 pb-5 ml-[90px]">
                    <a href="login.html" className="border-solid rounded text-white text-sm w-10 h-10 bg-slate-600 p-3">Signup</a>
                </div>
               
            </div>   
        </form>
    </div>
    </>
  )
}

export default SignUp