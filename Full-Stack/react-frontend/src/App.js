import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/Employee Stuff/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/Employee Stuff/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/Employee Stuff/UpdateEmployeeComponent';
import Login from './components/Login/Login';
import ViewEmployeeComponent from './components/Employee Stuff/ViewEmployeeComponent';
import ListTaskComponent from './components/ListTaskComponent.jsx';
import CreateTaskComponent from './components/CreateTaskComponent.jsx';
import ViewTaskComponent from './components/ViewTaskComponent.jsx';
import Register from './components/Register/Register';
import HomePage from './Pages/Home/HomePage';
import ListUserComponent from './components/ListUserComponent.jsx';
import CreateUserComponent from './components/CreateUserComponent.jsx';
import ViewUserComponent from './components/ViewUserComponent.jsx';

function App() {
  return (
    <div>
        <Router>
            <Navbar />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {HomePage}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path="/Login" component ={Login} ></Route>
                          <Route path = "/" exact component = {ListTaskComponent}></Route>
                          <Route path = "/tasks" component = {ListTaskComponent}></Route>
                          <Route path = "/add-task/:id" component = {CreateTaskComponent}></Route>
                          <Route path = "/view-task/:id" component = {ViewTaskComponent}></Route>
                          <Route path="/Register" component = {Register}></Route>
                          <Route path = "/" exact component = {ListUserComponent}></Route>
                          <Route path = "/users" component = {ListUserComponent}></Route>
                          <Route path = "/add-user/:id" component = {CreateUserComponent}></Route>
                          <Route path = "/view-user/:id" component = {ViewUserComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
