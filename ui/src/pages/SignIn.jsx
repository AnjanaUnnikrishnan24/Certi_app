import React from 'react'

const SignIn = () => {
  return (
    <>
    <div  className="bg-slate-300 flex justify-center pt-40 my-14 ">
        <h1 className="text-2xl font-bold p-10">Certificate Dapp</h1>
        <form className="bg-slate-400 w-100 rounded-xl justify-center">
            <p className="text-3xl pt-2.5 text-center font-serif">Login</p>
            <div className="px-8">
                <div className="pt-6 pl-4">
                    <label for="email">User Name:</label> 
                    <input type="email" required/> 
                </div>
                <div className="pt-6 pl-4">
                    <label for="password">Password:</label> 
                    <input type="password" required/>
                </div>
                <div className="pt-4 pl-4 pb-5 justify-between">
                    <a href="fp.html">Forget Password ? </a>
                    <a href="frontpage.html" className="border-solid rounded text-white text-sm w-10 h-10 bg-slate-600 p-3">Login</a>
                </div>
                <div>
                    <p>Don't have account? <a href="signUp.html">Signup</a></p>
                </div>
               
            </div>   
        </form>
    </div>
    </>
  )
}

export default SignIn