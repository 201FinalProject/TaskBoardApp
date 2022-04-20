import React from 'react';
import { Routes, Link, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Login from './Pages/login';
import './App.css';

function App(){
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
            <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
