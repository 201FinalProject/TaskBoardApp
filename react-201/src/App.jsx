import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Pages/Login/Login';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import Register from './Pages/Register/Register';
import HistoryPage from './Pages/History/HistoryPage';
import CreateGroup from './Pages/CreateGroup/CreateGroup';
import TaskCreate from './Pages/TaskCreate/TaskCreate';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<HomePage/>}/>
            <Route path="/history" element={<HistoryPage/>}/>
            <Route path="/Register" element={<Register></Register>}/>
            <Route path="/CreateGroup" element={<CreateGroup/>}/>
            <Route path="/taskcreate" element={<TaskCreate/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
