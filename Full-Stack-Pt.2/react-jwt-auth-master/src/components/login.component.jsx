import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import PageHeader from "../common/PageHeader/PageHeader"
import { Link } from "react-router-dom";

import AuthService from "../services/auth.service";


const useStyles = {
  MainDivision: {
    width: "100%",
    // backgroundImage: `url(${background}`,
    // backgroundSize: "cover",
    height: "1024px"
  },

    InnerBox: {
        textAlign: "center", 
        marginBottom: "60px",
        marginTop: "100px",
        fontFamily: "DM Sans",
        fontSize: "42px",
        fontWeight: "700",
        lineHeight: "62px",
        letterSpacing: "0em",
        textAlign: "center",
        color: "#000000",
        textDecoration: "underline"

    },

    InnerLogin: {
        marginBottom: "-5px",
        marginRight: "320px",
        fontFamily: "DM Sans",
        fontSize: "28px",
        fontWeight: "700",
        lineHeight: "62px",
        letterSpacing: "0em",
        textAlign: "center",
        color: "#000000"

    },

    Boxes: {
        height: "61.359771728515625px",
        width: "383.42926025390625px",
        borderRadius: "4px",
        display: "block",
        background: "rgba(255, 207, 164, 0.01)",
        boxShadow: "inset 0px -1px 0px #000000, inset 1px 0px 0px #000000, inset -1px 0px 0px #000000, inset 0px 1px 0px #000000",
        margin: "auto",
        fontFamily: "DM Sans",
        background: "#FFCFA403",
        paddingLeft: "10px",
    },

    InnerGuestLogin: {
        textAlign: "center", 
        marginTop: "20px",
        marginRight: "235px",
        marginBottom: "-12px",
        fontFamily: "DM Sans",
        fontSize: "28px",
        fontWeight: "700",
        lineHeight: "62px",
        letterSpacing: "0em",
        color: "#000000"

    },

    linkToRegister: {
        textAlign: "center",
        fontFamily: "DM Sans",
        color: "#000000",
        marginTop: "20px",
    },

    loginButton: {
        marginTop: "10px",
        marginBottom: "10px",
        width: "390px",
        height: "2.5em",
        caretColor: "transparent",
        textAlign: "center",
        boxSizing: "border-box",
        fontFamily: "DM Sans",
        fontSize: "1em",
        backgroundColor: "#87CEFA",
        display: "block",
        margin: "auto",
        cursor: "pointer"
    },

    guestLoginButton: {
        height: "2.5em",
        width: "390px",
        caretColor: "transparent",
        textAlign: "center",
        boxSizing: "border-box",
        fontSize: "1em",
        fontFamily: "DM Sans",
        marginTop: "10px",
        backgroundColor: "#87CEFA",
        display: "block",
        margin: "auto",
        cursor: "pointer"
    },

}

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeGroupCode = this.onChangeGroupCode.bind(this);

    this.state = {
      username: "",
      password: "",
      groupCode: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeGroupCode(e){
    this.setState({
      groupCode: e.target.value
    })
  }

  handleGuestLogin(e){
    e.preventDefault()
    this.props.history.push("/home")
    window.location.reload()
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div style={useStyles.MainDivision}>
        <PageHeader name="Login"></PageHeader>
        <div >
        <h3 style={useStyles.InnerLogin}>Login</h3>

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div>
              <Input
                type="text"
                style={useStyles.Boxes}
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.onChangeUsername}
                validations={[required]}
              />
            </div>
            <br></br>

            <div className="form-group">
              <Input
                type="password"
                style={useStyles.Boxes}
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>
            <br/>

            <div className="container">
              <div className="vertical-center">
                <button
                  style={useStyles.loginButton}
                  disabled={this.state.loading}
                >
                  {this.state.loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>

        <div>
          <h3 style={useStyles.InnerGuestLogin}>Guest Login</h3>
          <Form
            onSubmit={this.handleGuestLogin}
            ref={c => {
              this.form = c;
            }}
          >
              <br></br>
            <div style={useStyles.guestContainer}>
              <div style={useStyles.guestVerticalCenter}>
                <button 
                  style={useStyles.guestLoginButton} 
                  type="submit"  
                  onClick={this.saveOrUpdateGroup}>
                  Guest Login
                </button>
              </div>
            </div>
          </Form>
          
        </div>
        <div style={useStyles.linkToRegister} >
          <Link to='/register'>
            <u>Create New Account</u>
          </Link>
        </div>
      </div>
    );
  }
}
