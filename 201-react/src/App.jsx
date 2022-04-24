import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/login';
import './App.css';
import HomePage from './Pages/HomePage';

function App(){
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<HomePage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
