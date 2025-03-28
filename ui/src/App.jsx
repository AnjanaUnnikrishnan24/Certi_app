import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ViewCertificate from "./pages/ViewCertificate";
import IssuePage from "./pages/IssuePage";

const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='signUp' element={<SignUp/>}/>
        <Route path='view' element={<ViewCertificate/>}/>
        <Route path='issue' element={<IssuePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;