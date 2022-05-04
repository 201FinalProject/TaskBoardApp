import React from "react";
// import GroupSelect from "../../Components/GroupSelectButton/GroupSelect"
import PageHeader from "../../components/PageHeader/PageHeader"
import RegisterService from '../../services/RegisterService';
import './Register.css';
import { Component } from "react";





export default class RegisterPage extends Component {
      constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            userName: '',
            pass: '',
            email: '',
        }
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePassHandler = this.changePassHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        //if(this.state.id === '_add'){
          //  return
        //}else{
            RegisterService.getUserById(this.state.id).then( (res) =>{
                let user = res.data;
                this.setState({userName: user.userName,
                    pass: user.pass,
                    email: user.email,
                });
            });
        //}        
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {userName: this.state.userName, pass: this.state.pass, email: this.state.email};
        console.log('user => ' + JSON.stringify(user));

        RegisterService.createUser(user).then(res =>{
            this.props.history.push('/Register');
        });
        /* // step 5
        if(this.state.id === '_add'){
            RegisterService.createUser(user).then(res =>{
                this.props.history.push('/Register');
            });
        }
        
        else{
            RegisterService.updateUser(user, this.state.id).then( res => {
                this.props.history.push('/Register');
            });
        } */
    }

    changeUserNameHandler= (event) => {
        this.setState({userName: event.target.value});
    }

    changePassHandler= (event) => {
        this.setState({pass: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeConfirmPasswordHandler= (event) => {
      this.setState({pass: event.target.value});
  }
  
    /*saveRegister() {
      var data = {
        userName: this.state.userName,
        email: this.state.email,
        pass: this.state.pass,
        confirmPass: this.state.confirmPass
    }; 
  
    //   LoginDataService.create(data) 
    //     .then(response => {
    //       this.setState({
    //         email: response.data.email,
    //         pass: response.data.pass,
    //         groupCode: response.data.groupCode,
    //       });
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    }
  
    newRegisterPage() {
      this.setState({
        userName: "",
        email: "",
        pass: "",
        confirmPass: "",  
      });
    } */
  
    render() {
      return(
        <div id="MainMain">
            <div id="Main">
                <PageHeader name="Register"></PageHeader>
                {/* <h1>Register</h1> */}
                    <form>
                        <div className="inputsContainer">
                            <input className="test" id="Username" name="Username" placeholder="Username"
                            value={this.state.userName} onChange={this.changeUserNameHandler}/>
                            <input className="test" type="email" id="Email" name="Email" placeholder="Email"
                            value={this.state.email} onChange={this.changeEmailHandler}/>
                            <input className="test" type="pass" id="Pass" name="Pass" placeholder="Pass"
                            value={this.state.pass} onChange={this.changePassHandler}/>
                            <input className="test" type="pass" id="ConfirmPass" name="ConfirmPass" placeholder="Confirm Pass"
                            value={this.state.confirmPass} onChange={this.changeConfirmPassHandler}/>
                        </div>
                        <div className="container">
                            <div className="vertical-center">
                            <button name = "Register" onClick={this.saveOrUpdateUser}>Create Account</button>
                   
                                </div>
                        </div>
                    </form>
            </div>
        </div>
    )};
    }



