import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Login from './Pages/login';
import './App.css';
import HomePage from './Pages/HomePage';
import Register from './Pages/Register';


function App(){
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Register></Register>
      </div>
    </BrowserRouter>
  )
}

export default App;
