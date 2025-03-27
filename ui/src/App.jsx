import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ViewCertificate from "./pages/ViewCertificate";
import IssuePage from "./pages/IssuePage";
import Homepage from "./pages/Homepage";

const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='SignUp' element={<SignUp/>}/>
        <Route path='SignIn' element={<SignIn/>}/>
        <Route path='view' element={<ViewCertificate/>}/>
        <Route path='issue' element={<IssuePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;