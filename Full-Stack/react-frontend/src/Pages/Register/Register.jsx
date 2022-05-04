import React from "react";
// import GroupSelect from "../../Components/GroupSelectButton/GroupSelect"
import PageHeader from "../../components/PageHeader/PageHeader"
import './Register.css';
import { Component } from "react";




export default class RegisterPage extends Component {
    constructor(props) {
      super(props);
      this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangeEmail = this.onChangeEmail.bind(this);
      this.onChangePassword = this.onChangePassword.bind(this);
      this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
  
      this.state = {
        userName: null,
        email: null,
        password: null,
        confirmPassword: null
      };
    }
  
    onChangeUserName(e) {
      this.setState({
        userName: e.target.value
      });
    }

    onChangeEmail(e) {
      this.setState({
        email: e.target.value
      });
    }
  
    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }

    onChangeConfirmPassword(e) {
      this.setState({
        confirmPassword: e.target.value
      });
    }
  
    saveRegister() {
      var data = {
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
    };
  
    //   LoginDataService.create(data) 
    //     .then(response => {
    //       this.setState({
    //         email: response.data.email,
    //         password: response.data.password,
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
        password: "",
        confirmPassword: "",  
      });
    }
  
    render() {
      return(
        <div id="MainMain">
            <div id="Main">
                <PageHeader name="Register"></PageHeader>
                {/* <h1>Register</h1> */}
                    <form>
                        <div class="inputsContainer">
                            <input class="test" id="Username" name="Username" placeholder="Username"/>
                            <input class="test" type="email" id="Email" name="Email" placeholder="Email"/>
                            <input class="test" type="password" id="Password" name="Password" placeholder="Password"/>
                            <input class="test" type="password" id="ConfirmPass" name="ConfirmPass" placeholder="Confirm Password"/>
                        </div>
                        <div class="container">
                            <div class="vertical-center">
                                <button type="submit" name="Register">Create Account</button>
                                </div>
                        </div>
                    </form>
            </div>
        </div>
    )};
    }



