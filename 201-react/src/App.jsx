import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Login from './Pages/login';
import './App.css';
import HomePage from './Pages/HomePage';
<<<<<<< HEAD
import Register from './Pages/Register';

=======
import HistoryPage from './Pages/HistoryPage';
>>>>>>> 6928da225d03a5121173f374d7f0c352b3ba9f83

function App(){
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<HomePage/>}/>
            <Route path="/history" element={<HistoryPage/>}/>
        </Routes>
        <Register></Register>
      </div>
    </BrowserRouter>
  )
}

export default App;
