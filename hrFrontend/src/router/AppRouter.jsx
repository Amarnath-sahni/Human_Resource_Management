import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import Navbar from "./Navbar";


import HomePage from "../page/HomePage";
import Login from "../page/Login";
import SignupPage from "../page/SignupPage";




const AppRouter = () => {
 
  return (
    <BrowserRouter>
      
      <Routes>
        {/* ✅ Public Routes (only if NOT logged in) */}
       
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
   

        {/* ✅ Protected Routes (only if logged in) */}
      
          <>
            <Route path="/" element={<HomePage />} />
           

            {/* 🚫 Prevent logged-in user from going to login/signup */}
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/signup" element={<Navigate to="/" />} />

            {/* fallback */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
       
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;